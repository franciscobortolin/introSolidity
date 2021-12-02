import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.7.3", settings: {} }],
  },
  networks: {
    
    hardhat: {},
    localhost: {},
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/D1-jom7y3bnZHztWqToO99OH5nhZXspN",
      accounts: [`0x${"201e8bb83ecd1850c567be053f025e04e0e6928e4fe4c50288b7ce41c0242c3e"}`,],
      gasPrice: 8000000000
      }
  }
  
};

export default config
