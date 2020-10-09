var Adoption = artifacts.require("Adoption");
var ConvertLib = artifacts.require("ConvertLib");

module.exports = function(deployer) {
    deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, Adoption);
    deployer.deploy(Adoption)
};