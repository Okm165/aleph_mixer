import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import contractMetadata from "./ContractMetadata";

const CONTRACT_ADDRESS =  "5CetrJNGnNjd85aUL3vBwwgFVkJT2fTbp8iAojuiVL4uuQ6X";
const ACCOUNT_ADDRESS = "5FqKc4yU7tpNhaFHFGfFFJJFLiYHKxwtsfqMrirSboLoZhJe";

// Connect to a Polkadot node
// const provider = new WsProvider('wss://rpc.polkadot.io');
// const api = await ApiPromise.create({ provider });
// export const contract = new ContractPromise(api, contractMetadata, CONTRACT_ADDRESS);


// maximum gas to be consumed for the call. if limit is too small the call will fail.
const gasLimit = 3000n * 1000000n;

export const mix = async (hash: string, amount: number) => {
    // const result = await contract.query.deposit(
    //     ACCOUNT_ADDRESS,
    //   {
    //     gasLimit,
    //     value: amount,
    //   },
    //   {hash: hash}
    // );
    // console.log(result);
}

export const unmix = async (password: string, amount: number) => {
    // const result = await contract.query.withdraw(
    //     ACCOUNT_ADDRESS,
    //     {
    //       gasLimit,
    //     }, 
    //     {
    //         pass: password, amount: amount
    //     }
    //   );
    //   console.log(result);
}

export const getBalance = async () => {
    // const callValue = await contract.query.balanceOf(ACCOUNT_ADDRESS, { gasLimit });
    // console.log(callValue);
}