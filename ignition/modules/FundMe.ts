import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("FundMeModule", (m) => {
  const apollo = m.contract("FundMe", ["Saturn V"]);

  m.call(apollo, "launch", []);

  return { apollo };
});
