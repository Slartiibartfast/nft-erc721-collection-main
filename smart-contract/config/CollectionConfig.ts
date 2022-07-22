import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TanotiCrafts',
  tokenName: 'TANOTI',
  tokenSymbol: 'TNT',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 200,
  whitelistSale: {
    price: 0.1,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.1,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0x43A31930339399871B268589106F2d4C39827E46',
  marketplaceIdentifier: 'Tanoti',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
