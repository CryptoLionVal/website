const NETWORKS = {
  TESTNET: {
    RPC: 'https://testnet-croeseid.crypto.com:26657',
    T_VALIDATOR: '15CDB1DCB71FE74CB7EA971E2CC17751F21984E8',
    VALIDATOR: 'tcrocncl1valsdtujgugsfhwuh8twkqpuxhr5486nlvk4ew',
    HD_PATH: "m/44'/1'/0'/0/0",
    PREFIX: 'tcro',
    EXPLORER: 'https://crypto.org/explorer/croeseid',
  },
  MAINNET: {
    RPC: 'https://mainnet.crypto.org:26657',
    T_VALIDATOR: '8F7012771B173B8DD2E7A9FBC9EAF7B1E3C055FB',
    VALIDATOR: 'crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495',
    HD_PATH: "m/44'/394'/0'/0/0",
    PREFIX: 'cro',
    EXPLORER: 'https://crypto.org/explorer',
  },
}

export default class Chain {
  constructor(chain, networks = NETWORKS) {
    this.chain = chain
    this.networks = networks
  }

  config(key, network = null) {
    if (network) return this.networks[network][key]

    return this.networks[this.chain][key]
  }
}
