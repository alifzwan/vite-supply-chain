// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/* What Migrations.sol used for?

    - The Migrations.sol file in the Truffle Suite is a special contract that helps manage the deployment of other contracts to the Ethereum network.
    - Its purpose is to track and handle the deployment of smart contracts in a systematic way.

    Explanation: 

    Order of Deployment:
    - Truffle uses migration scripts to deploy contracts in a specific order. 
    - The migration scripts are written in JavaScript and are executed sequentially. 
    - The Migrations.sol contract is deployed first because it's specified in the initial migration script (usually named 1_initial_migration.js), and subsequent contracts are deployed in the order defined in subsequent migration scripts.


    Contract Deployment History: 
    - Migrations.sol maintains a record of the deployment history. 
    - Each time you run a migration, a new instance of the Migrations contract is deployed with an incremented migration number.
    - This ensures that contracts are not redeployed unnecessarily.

    Network Independence:
    - Since Ethereum networks can be decentralized and there may be multiple nodes, Migrations.sol helps ensure that each node has the same understanding of the deployed contract state.
    - It provides a standardized way to manage and record the deployment process.

    Migration Scripting:
    - Migration scripts are JavaScript files that specify the deployment steps.
    - They typically use the Truffle artifacts and web3.js (or ethers.js) to interact with the Ethereum network.
    - These scripts are placed in the migrations folder and executed in order.


    What if you dont incliude "Migration.sol"
    - If you don't include Migrations.sol in your contract folder, you won't be able to use the Truffle migration process.
    - Truffle relies on this contract to keep track of deployed contracts and their versions. 
    - Omitting it may result in an incomplete or disorganized deployment process.


*/


contract Migrations {
    address public owner = msg.sender;
    uint public last_completed_migration;

    modifier restricted() {
        require(
            msg.sender == owner,
            "This function is restricted to the contract's owner"
        );
        _;
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }
}
