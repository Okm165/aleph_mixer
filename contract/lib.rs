#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod mixer {
    use ink::storage::Mapping;
    use ink::prelude::string::String;
   

    #[ink(storage)]
    #[derive(Default)]
    pub struct Mixer {
        balances: Mapping<String, Balance>,
    }

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        SignatureInvalid,
        InsufficientBalance,
        DepositNotFound,
    }

    impl Mixer {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self { balances: Mapping::new() }
        }

        #[ink(message)]
        pub fn deposit(& mut self, data: String, pubkey: String) -> () {
            self.balances.insert(data + &pubkey, &self.env().transferred_value());
            
        }

        #[ink(message)]
        pub fn withdraw(& mut self, data: String, pubkey: String, signature: String, amount: Balance) -> Result<(), Error> {
            // check valid signature
            
            let id = data + &pubkey;
            let balance = self.balances.get(id.clone());
            if let Some(balance) = balance {
                if balance >= amount {
                    self.balances.insert(id, &(balance - amount));
                } else {
                    return Err(Error::InsufficientBalance);
                }
            } else {
                return Err(Error::DepositNotFound);
            }


            todo!();
        }
    }
}