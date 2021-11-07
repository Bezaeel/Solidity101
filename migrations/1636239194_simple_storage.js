var simple_storage = artifacts.require("./simple_storage.sol");
module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(simple_storage);
};
