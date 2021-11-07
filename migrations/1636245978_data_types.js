var data_types = artifacts.require("data_types")
module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(data_types);
};
