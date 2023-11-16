
import './order.scss';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Web3 from "web3";
import SupplyChainABI from "/src/artifacts/SupplyChain.json"

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: 0,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Order = () => {

    const navigate = useNavigate()

    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, [])

    const [currentaccount , setCurrentaccount ]  = useState("");
    const [loader         , setloader         ]  = useState(true);
    const [SupplyChain    , setSupplyChain    ]  = useState();
    const [Items          , setItems          ]  = useState();
    const [ItemName       , setItemName       ]  = useState();
    const [ItemCategories , setItemCategories ]  = useState();
    const [ItemBrand      , setItemBrand      ]  = useState();
    const [ItemOrigin     , setItemOrigin     ]  = useState();
    const [ItemDescription, setItemDescription]  = useState();
    const [ItemPhase      , setItemPhase      ]  = useState();
    
    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    };


    const loadBlockchaindata = async () => {
        setloader(true);
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setCurrentaccount(account);
        const networkId = await web3.eth.net.getId();
        const networkData = SupplyChainABI.networks[networkId];
        
        if (networkData) {
            const supplychain = new web3.eth.Contract(SupplyChainABI.abi, networkData.address);
            setSupplyChain(supplychain);
            var i;
            const itemsCount = await supplychain.methods.itemsCount().call();
            const item = {};
            const ItemPhase = [];
            for (i = 0; i < itemsCount; i++) {
                item[i] = await supplychain.methods.ItemsInfo(i + 1).call();
                ItemPhase[i] = await supplychain.methods.Chronology(i + 1).call();
            }
            setItems(item);
            setItemPhase(ItemPhase);
            setloader(false);
        }
        else {
            window.alert('The smart contract is not deployed to current network')
        }
    }

    if (loader) {
        return (
            <div>
                <h1 className="wait">Loading...</h1>
            </div>
        )

    }
    

    const redirect_to_project = () => {
      navigate('/project')
    }

    const regItemName       = (event) => {
        setItemName      (event.target.value);
    }
    const regItemCategories = (event) => {
        setItemCategories(event.target.value);
    }
    const regItemBrand      = (event) => {
        setItemBrand     (event.target.value);
    }
    const regItemOrigin     = (event) => {
        setItemOrigin    (event.target.value);
    }
    const regItemDescription       = (event) => {
        setItemDescription      (event.target.value);
    }


    const regItem = async (event) => {
        event.preventDefault();
        try {
            var receipt = await SupplyChain.methods.orderItems(
                ItemName, 
                ItemCategories, 
                ItemBrand, 
                ItemOrigin, 
                ItemDescription).send({ from: currentaccount });
                
            if (receipt) {
                loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }

    return (
        <div className="ord-main-container">
            <h2 className="ord-section-title">Ordering</h2>
             <div className="current-address">
                    <label htmlFor="currentAddress">Current Address: </label>
                    <span>{currentaccount}</span>
            </div>

           
            <div className="ord-section">
                <h2>Ordering</h2>
                <form onSubmit={regItem}>
                    <motion.div className="input-container" variants={variants}>
                    <motion.div variants={itemVariants}>
                        <label>Name:</label><br />
                        <input type="text" onChange={regItemName} placeholder="Name" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label>Categories:</label><br />
                        <input type="text" onChange={regItemCategories} placeholder="Categories" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label>Brand:</label><br />
                        <input type="text" onChange={regItemBrand} placeholder="Brand" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label>Based In:</label><br />
                        <input type="text" onChange={regItemOrigin} placeholder="Based In" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label>Description</label><br />
                        <input type="text" onChange={regItemDescription} placeholder="Description" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants} className="order-button">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onSubmit={regItem}
                        >
                            Order
                        </motion.button>
                    </motion.div>
                </motion.div>
                </form>
                

                <div className="table-container">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Categories</th>
                                <th>Brand</th>
                                <th>Based In</th>
                                <th>Description</th>
                                <th>Current Stage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(Items).map(function (key) {
                                return (
                                    <tr key={key}>
                                        <td>{Number(Items[key].id)}</td>
                                        <td>{Items[key].name}</td>
                                        <td>{Items[key].categories}</td>
                                        <td>{Items[key].brand}</td>
                                        <td>{Items[key].origin}</td>
                                        <td>{Items[key].nutritionInfo}</td>
                                        <td>
                                            {
                                                ItemPhase[key]
                                            }
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <motion.div variants={itemVariants} className="back-button">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={redirect_to_project}
                        >
                            Back to Project Overview
                        </motion.button>
            </motion.div>

        </div>
    );
}

export default Order;