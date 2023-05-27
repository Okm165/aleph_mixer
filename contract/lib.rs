#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod mixer {
    use ink::storage::Mapping;
    use ink::prelude::string::String;
    use ink::env::hash::{Sha2x256, CryptoHash, HashOutput};

    #[ink(storage)]
    #[derive(Default)]
    pub struct Mixer {
        balances: Mapping<<Sha2x256 as HashOutput>::Type, Balance>,
    }

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        HexInvalid,
        SignatureInvalid,
        InsufficientBalance,
        DepositNotFound,
        TransferFailed,
    }

    impl Mixer {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self { balances: Mapping::new() }
        }

        #[ink(message, payable)]
        pub fn deposit(&mut self, hash: String) -> Result<(), Error> {
            let hash = prefix_hex::decode::<<Sha2x256 as HashOutput>::Type>(hash);
            if let Ok(hash) = hash {
                self.balances.insert(hash, &self.env().transferred_value());
                return Ok(());
            } else {
                return Err(Error::HexInvalid);
            }
        }

        #[ink(message)]
        pub fn withdraw(&mut self, pass: String, amount: Balance) -> Result<(), Error> {
            let mut hash = <Sha2x256 as HashOutput>::Type::default();
            Sha2x256::hash(&pass.into_bytes(), &mut hash);
            let balance = self.balances.get(hash.clone());
            if let Some(balance) = balance {
                if balance >= amount {
                    self.balances.insert(hash, &(balance - amount));
                    if self.env().transfer(self.env().caller(), amount).is_err() {
                        return Err(Error::TransferFailed);
                    } else {
                        return Ok(());
                    }
                } else {
                    return Err(Error::InsufficientBalance);
                }
            } else {
                return Err(Error::DepositNotFound);
            }
        }
    }

    #[cfg(test)]
    mod tests {
        use super::*;
        use ink::env::pay_with_call;

        #[ink::test]
        fn test_valut() {
            let mut mixer = Mixer::new();
            let pass = "dupa".to_string();
            let wrong_pass = "dupa1".to_string();
            let key = "0x60a5d3e4100fe8afa5ee0103739a45711d50d7f3ba7280d8a95b51f5d04aa4b8".to_string();

            let accounts = ink::env::test::default_accounts::<ink::env::DefaultEnvironment>();
            let contract = ink::env::account_id::<ink::env::DefaultEnvironment>();
            ink::env::test::set_callee::<ink::env::DefaultEnvironment>(contract);
            ink::env::test::set_caller::<ink::env::DefaultEnvironment>(accounts.bob);
            ink::env::test::set_account_balance::<ink::env::DefaultEnvironment>(accounts.bob, 100);

            assert_eq!(pay_with_call!(mixer.deposit(key), 30) , Ok(()));
            assert_eq!(mixer.withdraw(pass.clone(), 10), Ok(()));
            assert_eq!(mixer.withdraw(wrong_pass, 10), Err(Error::DepositNotFound));
            assert_eq!(mixer.withdraw(pass.clone(), 20), Ok(()));
            assert_eq!(mixer.withdraw(pass, 1), Err(Error::InsufficientBalance));
        }
    }
}