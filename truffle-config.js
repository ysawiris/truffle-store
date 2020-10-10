const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "claim decade pave soul print sea margin multiply aerobic cart bunker purchase example retreat city";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/593c0ba89c3240c691d4c97d02fe6239", 2)
      },
      network_id: 3,
      gas: 4500000,
      gasPrice: 10000000000,
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  }
};
