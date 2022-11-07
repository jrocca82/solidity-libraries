import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const contract = await deploy("Contract", {
    from: deployer,
    args: [],
    log: true
  });

  console.log(`Successfully deployed contract to ${contract.address}`);
};

export default func;
func.tags = ["testbed", "_Contract"];