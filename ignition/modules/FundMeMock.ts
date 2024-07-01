// ./ignition/modules/Token.ts
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { network } from "hardhat";

const DECIMALS = "18";
const INITIAL_PRICE = "2000000000000000000000"; // 2000
export default buildModule("TokenModule", (m) => {
  const deployer = m.getAccount(0);

  const mock = m.contract("MockV3Aggregator", [DECIMALS, INITIAL_PRICE], {
    from: deployer,
  });

  return { mock };
});
