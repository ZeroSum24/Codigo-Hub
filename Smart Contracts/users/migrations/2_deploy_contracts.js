var contract = artifacts.require("./users.sol");

module.exports = function(deployer) {
    deployer.deploy(contract);
}
