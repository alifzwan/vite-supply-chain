
<p align="center">
<a href="https://trufflesuite.com/docs/truffle/" target="_blank" rel="noopener noreferrer">
  <img src="https://seeklogo.com/images/T/truffle-logo-2DC7EBABF2-seeklogo.com.png" width="120" height='120'>
</a>
  
<a href="https://trufflesuite.com/docs/ganache/" target="_blank" rel="noopener noreferrer">
  <img src="https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png" width="120" height='120'>
</a>

<a href="https://react.dev/learn/installation" target="_blank" rel="noopener noreferrer">
  <img src="https://brandlogos.net/wp-content/uploads/2020/09/react-logo-512x512.png" width="120" height='120'>
</a>

<a href="https://web3js.readthedocs.io/en/v1.10.0/" target="_blank" rel="noopener noreferrer">
  <img src="https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png" width="120" height='120'>
</a>

</p>

<h1 align="center">   
  Innovating Food Supply Chain Management: Smart Contract and Consensus Algorithm in Blockchain
</h1> 

<img src = "https://github.com/alifzwan/React-Supply-Chain/assets/63784108/d0757b80-ce95-42ff-8d25-81e11d8a0306">



## 🚀 Requirements
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   ```sh
   git --version
   ```
  
    
 - [Nodejs](https://nodejs.org/en/)
    ```sh
    node --version
    ```
 - [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
    ```sh
    yarn --version
    ```
 - [Ganache](https://trufflesuite.com/ganache/)
- You'll know you did it right if you can run the application and see:
  <p align="center">
    <img width="400" alt="ganache-picture" src="https://github.com/alifzwan/ethers-simple-storage/blob/main/images/ganache-picture.png">
  </p>


## 🛠 Set-up

1. Install the dependencies
   ```sh
   npm install or yarn
   ```
2. Compile the Smart Contract
   ```sh
   truffle compile --reset
   ```
3. Deploy the Smart Contract to the Ethereum Network
   ```sh
   truffle migrate --reset
   ```
4. Install React dependencies
   ```sh
   cd client
   npm install or yarn
   ```
5. Start the development server
   ```sh
   yarn run dev
   ```
<p align="center"><img src="https://trufflesuite.com/img/truffle-logo-dark.svg" width="200"></p>


[![npm](https://img.shields.io/npm/v/truffle.svg)](https://www.npmjs.com/package/truffle)
[![npm](https://img.shields.io/npm/dm/truffle.svg)](https://www.npmjs.com/package/truffle)
[![GitHub Discussions](https://img.shields.io/static/v1?label=Join&message=Discussions&color=3fe0c5)](https://github.com/trufflesuite/truffle/discussions)
[![Coverage Status](https://coveralls.io/repos/github/trufflesuite/truffle/badge.svg)](https://coveralls.io/github/trufflesuite/truffle)
[![gitpoap badge](https://public-api.gitpoap.io/v1/repo/trufflesuite/truffle/badge)](https://www.gitpoap.io/gh/trufflesuite/truffle)

## What is Truffle
- Truffle is a frameworks that helps you to easily develop, compile, test, and deploy your smart contracts in your development environment.
- Another example like truffle is **Hardhat**

## Why Truffle
- Easy front-end(Dapp) integration with smart contract:

  - To develop Decentralized Application(Dapp), You need 2 things:
    - Front-end (react.js/node.js)
    - Smart contract

- Everything at one place:
  - The front-end code and smart contract will be at the same workplace
 
## Truffle installation

```
npm install -g truffle
```

To add `truffle.config`

```
truffle init
```

## Folder Description

- **Contracts** - This file contain all of our smart contract
- **Migrations** - This file is where we write script to deploy the smart contract
- **Test** - This file is for test/debug our smart contract
  

# 🔥Truffle Operation
## Compile

This command will compile all of your smart contract in `contracts` folder.

```
truffle compile
```

- After you compile the smart contract, you will now have `build\contracts` folder which contain your `contract.json` which is your compiled contract

- This `contract.json` contained 2 information:

  - Address
  - ABI

- `contract.json` also known as **artifacts** like in **Hardhat**

## Deploy

- To deploy our smart contract, we need a **migration scripts**

- We need to configure our `truffle-config.js`. We need to tell it which blockchain we want to deploy our smart contract at.

- There's two network where you can deploy your smart contract:

  - **Ganache** - your local network
  - **Testnet** - like sepolia/goerli (Metamask)

- Deployment on **Ganache** :
  ```
  truffle migrate --reset
  ```
- If you don't select which account you want to deploy your smart contract, by default it will choose account 1

- Deployment on **Testnet**:
  ```
  truffle migrate --network sepolia --reset
  ```
  - After deploy you can check your contract address on https://sepolia.etherscan.io/ whether your contract exist or not

### Migration Scripts

- Create file on **migrations folder**.
- Your file must follow your smart contract name.
- For example: `1_contract.json`
- Your contract must be deployed in a sequential manner (In order)
- So your next scripts would be `2_contract.json`

# Ganache

Ganache is local blockchain simulator with the help of which you can run a local blockchain on your system.

- It provides you a wallet that consists of :
  - Account
  - ETH
  - Private Key
- These stuff is used to test your deployment of smart contract

# ⬨ Blockchain Deployment

## Alchemy

- So let's say you have Your Computer (Centralized) and Ethereum Network (Decentralized):

  - You want to join Ethereum Network, so that you can do transaction on Ethereum Network and deploy your smart contract

  - However, the problem arise where Your Computer is Centralized/Real world while Ethereum Network is in Decentralized/Blockchain

  - You cannot connect Your Computer to Ethereum Network.

  - So how to connect Your Computer to Ethereum Network?

  - There's two approaches:

    - Geth - transform your system to NODE (NOT RECOMMENDED)

    - Alchemy - provide bridge between your system to ethereum network (End-Point)

  - We gonna choose **Alchemy**
    - Alchemy will give us provider link (sepolia) and Project ID (API Key)

## .env

- This file contains an explicit contains that you cannot share with anybody:

  - MNEMONIC - This is your Metamask Private Key
  - PROJECT_ID - This is your Alchemy API Key
  - PROVIDER - This is your ALchemy Project Link

- Install **dotenv**:

```
npm install dotenv
```

- Install **HDWalletProvider**

```
npm install @truffle/hdwallet-provider
```

# Ganache VS Testnet

```
   Ganache (Local Network)                Testnet (Ethereum Network)

 - Centralized System                    - Decentralized System

 - Migration/Deployment time is less     - Migration/Deployment time is more

 - Not Reliable for final testing of     - Reliable for final testing
   Dapp
```









