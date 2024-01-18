
import './order.scss';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import ProjectSideBar from '../project/projectsidebar/projectSideBar/ProjectSideBar';
import "ldrs/cardio"; 
import React, { useState, useEffect } from 'react'
import Web3 from "web3";
import SupplyChainABI from "/src/artifacts/SupplyChain.json"
import IoTDataJson from "/src/artifacts/TemperatureData.json";

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
    }, [])


    useEffect (() => {
        const delay = 2000;
        const timeoutId = setTimeout(() => {
            loadBlockchaindata();
        }, delay);
        return () => clearTimeout(timeoutId);

    }, [])

    const [currentaccount , setCurrentaccount ]  = useState("");
    const [loader         , setloader         ]  = useState(true);
    const [SupplyChain    , setSupplyChain    ]  = useState();


    const [Items          , setItems          ]  = useState();
    const [ItemName       , setItemName       ]  = useState();
    const [ItemOrigin     , setItemOrigin     ]  = useState();
    const [ItemDescription, setItemDescription]  = useState();
    

    const [ItemPhase      , setItemPhase      ]  = useState();
    const [SlaughterStatus, setSlaughterStatus] = useState();
    const [VerifyStatus   , setVerifyStatus   ]  = useState();
    const [MardiStatus    , setMardiStatus   ]  = useState();
    const [IoTDataState   , setIoTDataState] = useState([]);

    useEffect(() => {
        setIoTDataState(IoTDataJson.data);  // Set the IoT data when the component mounts
    }, []);
    
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
            const MardiStatus = [];
            const SlaughterStatus = [];
            const VerifyStatus = [];
            for (i = 0; i < itemsCount; i++) {
                item[i] = await supplychain.methods.ItemsInfo(i + 1).call();
                ItemPhase[i] = await supplychain.methods.Chronology(i + 1).call();
                MardiStatus[i] = await supplychain.methods.MardiStatus(i + 1).call();
                SlaughterStatus[i] = await supplychain.methods.SlaughterStatus(i + 1).call();
                VerifyStatus[i] = await supplychain.methods.HalalStatus(i + 1).call();
            }
            setItems(item);
            setItemPhase(ItemPhase);
            setMardiStatus(MardiStatus);
            setSlaughterStatus(SlaughterStatus);
            setVerifyStatus(VerifyStatus);
            setloader(false);
        }
        else {
            window.alert('The smart contract is not deployed to current network')
        }
    }


    if (loader) {
        return (
            <div className="loader" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
                <h1>Food Supply Chain System</h1>
                <l-cardio color="white" size="50" stroke="4" speed="2"></l-cardio>   
            </div>
        )

    }
    

    const redirect_to_project = () => {
      navigate('/project')
    }

    const regItemName       = (event) => {
        setItemName      (event.target.value);
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
            const receipt = await SupplyChain.methods.orderItems(
                ItemName, 
                ItemOrigin, 
                ItemDescription
                ).send({ from: currentaccount });
                
            if (receipt) {
                await loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }

    return (
        <div className="ord-main-container">

            <div className="project-menu-bar">
                <ProjectSideBar />
            </div>  


            <div className="main-section">

                <div className="ord-section-title">Product Registration</div>

                <div className="order-content">
                    <div className="ord-section">
                        <motion.form onSubmit={regItem} className="input-container" variants={variants}>

                            <motion.div variants={itemVariants}>
                                <label>Name:</label><br />
                                <input type="text" onChange={regItemName} placeholder="Name" required/><br />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label>Origin:</label><br />
                                <input type="text" onChange={regItemOrigin} placeholder="Origin" required/><br />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label>Description</label><br />
                                <input type="text" onChange={regItemDescription} placeholder="Description" required/><br />
                            </motion.div>

                            <motion.div variants={itemVariants} className="order-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onSubmit={regItem}
                                >
                                    Register
                                </motion.button>
                            </motion.div>
                        </motion.form>
                    
                       
                        <table className="order-table-container" border="1">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Origin</th>
                                    <th>Description</th>
                                    {Object.keys(Items).map(function (key) {
                                        return (
                                            <React.Fragment key={key}>
                                                {ItemPhase[key] !== "Item Registered, awaiting processing." && (
                                                    <>
                                                        <th>Timestamp</th>
                                                        <th>Temperature(°C)</th>
                                                        <th>Humidity</th>
                                                        <th>Food Status</th>
                                                    </>
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                    <th>Current Stage</th>
                                    <th>Mardi Status</th>
                                    <th>Slaughter Status</th>
                                    <th>Halal Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(Items).map(function (key) {
                                    return (
                                        <tr key={key} >
                                            <td>{Number(Items[key].id)}</td>
                                            <td>{Items[key].name}</td>
                                            <td>{Items[key].origin}</td>
                                            <td>{Items[key].nutritionInfo}</td>
                                            {ItemPhase[key] !== "Item Registered, awaiting processing." && (
                                                <>
                                                    <td>{IoTDataState[key]?.timestamp}</td>
                                                    <td>{IoTDataState[key]?.temperature}</td>
                                                    <td>{IoTDataState[key]?.humidity}</td>
                                                    <td>{IoTDataState[key]?.['food status']}</td>
                                                </>
                                            )}
                                            <td>{ItemPhase[key]}</td>
                                            <td className={MardiStatus[key] === "Your Item is Quality Complied" ? "green-text" : "red-text"}>
                                                {MardiStatus[key]}
                                            </td>

                                            <td className={SlaughterStatus[key] === "Your Item is Slaughtered" ? "green-text" : "red-text"}>
                                                {SlaughterStatus[key]}
                                            </td>

                                            <td className={VerifyStatus[key] === "Your Item is Halal Verified" ? "green-text" : "red-text"}>
                                                {VerifyStatus[key]}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        
                        
                    </div>
                    <div className="order-back-button-container">
                        <motion.div variants={itemVariants} className="order-back-button">
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
                    
                </div>

            </div>
        </div>
    );
}

export default Order;