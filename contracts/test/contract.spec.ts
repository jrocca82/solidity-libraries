import { ethers, deployments } from "hardhat";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import "@nomicfoundation/hardhat-chai-matchers";
import { BigNumber, Bytes, BytesLike } from "ethers";
import { getEventData } from "../scripts/utils";

chai.use(chaiAsPromised);

const setupEnvironment = async () => {
  // const factory: Contract__factory = await ethers.getContractFactory(
  //   "Contract"
  // );
  // const contract = (await factory.deploy()) as unknown as Contract;

  // return { contract };
};

describe("Contract", () => {
  let deployer: SignerWithAddress, alice: SignerWithAddress;
  // let contract: Contract;
  let testClaimExpiry: BigNumber;
  let eventParams: {
    tokenURI: string,
    claimableExpiryDate: BigNumber,
    eventCreator: string,
    totalSupply: BigNumber
  };
  let createValidEvent: (execute: boolean) => Promise<{ hash: string, signature: string }>;

  beforeEach(async () => {
    [deployer, alice] = await ethers.getSigners();
    const env = await setupEnvironment();
    // contract = env.contract;
  });

  it("Should do something", async () => {
   
  });
});