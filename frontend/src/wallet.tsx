import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';

// Connect to a Polkadot node
const provider = new WsProvider('wss://rpc.polkadot.io');
const api = await ApiPromise.create({ provider });

const metadata = undefined;
const contract = new ContractPromise(api, metadata, "");
