import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';
import { CodePromise } from '@polkadot/api-contract';

// Connect to a Polkadot node
const provider = new WsProvider('wss://rpc.polkadot.io');
const api = await ApiPromise.create({ provider });
