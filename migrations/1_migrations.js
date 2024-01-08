const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

/* What migrations folder used for?

    - The migrations folder in a Truffle project contains JavaScript files that serve as migration scripts.
    - These scripts are responsible for deploying smart contracts to the Ethereum network in a controlled and organized manner.
    - Each migration script corresponds to a specific deployment step and is executed sequentially.


    Example script name:
    1. 1_initial_migration.js  -  This script deploys the Migrations.sol contract, initializing the migration system.
    2. 2_supplyChain.js        -  This script would deploy the next contract in the deployment order.
    3. 3_add_functionality.js  -   Another script that might deploy a contract or add functionality to existing contracts.


    - The purpose of organizing deployment steps into separate migration scripts is to maintain a clear and ordered deployment process.
    -  It ensures that each step is executed only once, avoiding unnecessary redeployments, and it helps in tracking the deployment history.
*/
