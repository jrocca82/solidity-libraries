import { HardhatUserConfig } from "hardhat/types";
import "dotenv/config";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "@typechain/hardhat";
import "solidity-coverage";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-tracer";
import "@typechain/ethers-v5";
import "@nomicfoundation/hardhat-chai-matchers";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: process.env.MUMBAI_ALCHEMY_KEY || "",
        blockNumber: 14252603,
        enabled: false,
      },
      saveDeployments: false,
    },
    localhost: {
      saveDeployments: false,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: 0,
    alice: 1,
    bob: 2,
    carol: 3,
    ted: 4,
    system1: 5,
    system2: 6,
  },
};

export default config;