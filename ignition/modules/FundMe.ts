import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { network } from "hardhat";
import verify from "../../utils/verify";
import { networkConfig, developmentChains } from "../../helper-hardhat-config";

export default buildModule("FundMeModule", (m) => {
  const chainId = network.config.chainId; 
  const deployer = m.getAccount(0);
  const tokenOwner = m.getAccount(1);

  let ethUsdPriceFeedAddress: string
  if (chainId == 31337) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator")
    ethUsdPriceFeedAddress = ethUsdAggregator.address
  } else {
    ethUsdPriceFeedAddress = networkConfig[network.name].ethUsdPriceFeed!
  }
  
  const fundMe = m.contract("FundMe", [ethUsdPriceFeedAddress], {
    from: deployer,
  });
  
  return { fundMe };
});
