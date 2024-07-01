// ./ignition/modules/Token.ts
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DECIMALS = "18"
const INITIAL_PRICE = "2000000000000000000000" // 2000
/*
 The callback passed to `buildModule()` provides a module builder object `m`
 as a parameter. Through this builder object, you access the Module API.
 For instance, you can deploy contracts via `m.contract()`.
*/
export default buildModule("TokenModule", (m) => {
  /* 
  Instead of named accounts, you get access to the configured accounts
  through the `getAccount()` method.
 */
  const deployer = m.getAccount(0);
  const tokenOwner = m.getAccount(1);

  /*
  Deploy `Token` by calling `contract()` with the constructor arguments
  as the second argument. The account to use for the deployment transaction
  is set through `from` in the third argument, which is an options object.
 */
  const mock = m.contract("MockV3Aggregator", [DECIMALS, INITIAL_PRICE], {
    from: deployer,
  });

  /*
  The call to `m.contract()` returns a future that can be used in other `m.contract()`
  calls (e.g. as a constructor argument, where the future will resolve to the
  deployed address), but it can also be returned from the module. Contract
  futures that are returned from the module can be leveraged in Hardhat tests
  and scripts, as will be shown later.
 */
  return { mock };
});
