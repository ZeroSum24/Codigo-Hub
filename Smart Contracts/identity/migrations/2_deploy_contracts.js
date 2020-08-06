var contract = artifacts.require("./identity.sol");

module.exports = function(deployer) {
    deployer.deploy(contract);
}
