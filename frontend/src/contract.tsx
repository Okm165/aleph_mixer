import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import contractMetadata from "./ContractMetadata";

// Connect to a Polkadot node
const provider = new WsProvider('wss://rpc.polkadot.io');
const api = await ApiPromise.create({ provider });
export const contract = new ContractPromise(api, contractMetadata, "5CetrJNGnNjd85aUL3vBwwgFVkJT2fTbp8iAojuiVL4uuQ6X");
