import './mardiverify.scss';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Web3 from "web3";
import "ldrs/cardio"; 
import ProjectSideBar from '../project/projectsidebar/projectSideBar/ProjectSideBar';
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

const MardiVerify = () => {

    const navigate = useNavigate()

    const redirect_to_project = () => {
        navigate('/project')
    }

    

    useEffect(() => {
        
        const delay = 2000;
        const timeoutId = setTimeout(() => {
            loadBlockchaindata();
        },delay);
        return () => clearTimeout(timeoutId);
        
    },[]);

    useEffect(() => {
        loadWeb3();
    }, [])

    const [checklistMardi, setChecklistMardi] = useState({
        AnimalHealthScreening: false,
        EquipmentSanitization: false,
        MeatInspection: false,
        DocumentationAndRecord: false,
    });


    const [currentaccount    , setCurrentaccount       ] = useState("");
    const [loader            , setloader               ] = useState(true);
    const [SupplyChain       , setSupplyChain          ] = useState();

    const [MardiVerification , displayMardiVerification] = useState(false);
    const [MardiVerified     , displayMardiVerified    ] = useState(false);
   


    const [Items             , setItems                ] = useState();
    const [ItemID            , setItemID               ] = useState();
    const [ItemPhase         , setItemPhase            ] = useState();
    const [QualityComply     , displayComply           ] = useState(false);
    const [SlaughterStatus   , setSlaughterStatus      ] = useState();
    const [VerifyStatus      , setVerifyStatus         ] = useState();
    const [MardiStatus       , setMardiStatus          ] = useState();
    const [IoTDataState      , setIoTDataState         ] = useState([]);


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


    const fetchItemInfo = async (_itemID) => {
        try {
            const itemInfo = await SupplyChain.methods.info(_itemID).call();
            if(itemInfo) {
                setItemID(_itemID);
            }
        }
        catch (err) {
            alert("An error occured!!!")
        } 
    };

    const handleRowClick = (itemId) => {
        fetchItemInfo(itemId);
    };

    const handleCheckboxChange = (checkboxName) => {
        setChecklistMardi((prevChecklist) => ({
            ...prevChecklist,
            [checkboxName]: !prevChecklist[checkboxName],
        }));
    };

    const areAllChecklistItemsTicked = () => {
        return (
            checklistMardi.AnimalHealthScreening &&
            checklistMardi.EquipmentSanitization &&
            checklistMardi.MeatInspection &&
            checklistMardi.DocumentationAndRecord
            
        );
    };

    const handleChecklistSubmit = async () => {
     
        await SupplyChain.methods.mardiTickChecklistItem(
                ItemID,
                checklistMardi.AnimalHealthScreening,
                checklistMardi.EquipmentSanitization,
                checklistMardi.MeatInspection,
                checklistMardi.DocumentationAndRecord
               
        ).send({ from: currentaccount });
                
        await loadBlockchaindata()
               
        if (areAllChecklistItemsTicked()) {
            displayMardiVerified(true);
        } else {     
            displayComply(true);
        }
    };


    if (loader) {
        return (
            <div className="loader" style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
                <h1>Food Supply Chain System</h1>
                <l-cardio color="white" size="50" stroke="4" speed="2"></l-cardio>   
            </div>
        )
    }

    if (MardiVerified) {
        return (
            <div className="mardiverified-main-container">
                <div className="project-menu-bar">
                    <ProjectSideBar />
                </div> 

                <div className="main-section">
                    <div className="mardiverified-section-title">Mardi Verification</div>
                    <div className="mardiverified-content">
                        <div className="mardiverified-section">
                            <table className="table-container" border="1">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Origin</th>
                                        <th>Description</th>
                                        <th>Timestamp</th>
                                        <th>Temperature(°C)</th>
                                        <th>Humidity</th>
                                        <th>Current Stage</th>
                                        <th>Mardi Status</th>
                                        <th>Slaughter Status</th>
                                        <th>Halal Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(Items).map(function (key) {
                                        return (
                                            <tr key={key}>
                                                <td>{Number(Items[key].id)}</td>
                                                <td>{Items[key].name}</td>
                                                <td>{Items[key].origin}</td>
                                                <td>{Items[key].nutritionInfo}</td>
                                                <td>{IoTDataState[key]?.timestamp}</td>
                                                <td>{IoTDataState[key]?.temperature}</td>
                                                <td>{IoTDataState[key]?.humidity}</td>
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
                    </div>

                    <h2 className='mardiverified-description'>Your Item is already <b>quality verified</b></h2>
                    <div className="mardiverified-back-button-container">
                        <motion.div variants={itemVariants} className="mardiverified-back-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {displayMardiVerified(false); displayMardiVerification(false);}}
                                >
                                    Verify Another Item
                                </motion.button>

                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={redirect_to_project}
                                >
                                    Back To Project 
                                </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    }

    if (QualityComply) {
        return (
            <div className="mardicomply-main-container">
                <div className="project-menu-bar">
                    <ProjectSideBar />
                </div> 

                <div className="main-section">
                    <div className="mardicomply-section-title">Mardi Verification</div>
                    <div className="mardicomply-content">
                        <div className="mardicomply-section">
                            <table className="table-container" border="1">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Origin</th>
                                        <th>Description</th>
                                        <th>Timestamp</th>
                                        <th>Temperature(°C)</th>
                                        <th>Humidity</th>
                                        <th>Food Status</th>
                                        <th>Current Stage</th>
                                        <th>Mardi Status</th>
                                        <th>Slaughter Status</th>
                                        <th>Halal Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(Items).map(function (key) {
                                        return (
                                            <tr key={key}>
                                                <td>{Number(Items[key].id)}</td>
                                                <td>{Items[key].name}</td>
                                                <td>{Items[key].origin}</td>
                                                <td>{Items[key].nutritionInfo}</td>
                                                <td>{IoTDataState[key]?.timestamp}</td>
                                                <td>{IoTDataState[key]?.temperature}</td>
                                                <td>{IoTDataState[key]?.humidity}</td>
                                                <td>{IoTDataState[key]?.['food status']}</td>
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
                    </div>

                    <h2 className='mardicomply-description'>Your Item is<b> not fully quality complied</b></h2>

                    <div className="mardicomply-back-button-container">
                        <motion.div variants={itemVariants} className="mardicomply-back-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {displayComply(false); displayMardiVerification(false);}}
                                >
                                    Verify Another Item
                                </motion.button>

                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={redirect_to_project}
                                >
                                    Back To Project 
                                </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    }




    // Item Ordered
    if (MardiVerification) {
        return (
        <div className="mardi-main-container">
            <div className="project-menu-bar">
                <ProjectSideBar />
            </div> 

            <div className="main-section">
                <div className="mardi-section-title">Mardi Verification</div>
                <div className="mardi-content">
                    <div className="mardi-section">
                        <table className="table-container" border="1">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Origin</th>
                                    <th>Description</th>
                                    <th>Timestamp</th>
                                    <th>Temperature(°C)</th>
                                    <th>Humidity</th>
                                    <th>Food Status</th>
                                    <th>Current Stage</th>
                                    <th>Mardi Status</th>
                                    <th>Slaughter Status</th>
                                    <th>Halal Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(Items).map(function (key) {
                                    return (
                                        <tr key={key}>
                                            <td>{Number(Items[key].id)}</td>
                                            <td>{Items[key].name}</td>
                                            <td>{Items[key].origin}</td>
                                            <td>{Items[key].nutritionInfo}</td>
                                            <td>{IoTDataState[key]?.timestamp}</td>
                                            <td>{IoTDataState[key]?.temperature}</td>
                                            <td>{IoTDataState[key]?.humidity}</td>
                                            <td>{IoTDataState[key]?.['food status']}</td>
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
                    <div className="mardi-checklist">
                        <div className="mardi-checklist-section">

                            <h3 className='mardi-checklist-title'>Mardi Checklist</h3>

                            <p>Please Tick</p>

                            <div className="check-box">
                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistMardi.AnimalHealthScreening}
                                    onChange={() => handleCheckboxChange('AnimalHealthScreening')}
                                    required/>
                                     Have the animals undergone proper health screening?
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistMardi.EquipmentSanitization}
                                    onChange={() => handleCheckboxChange('EquipmentSanitization')}
                                    required/>
                                    Have all equipment and tools been properly sanitized?
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistMardi.MeatInspection}
                                    onChange={() => handleCheckboxChange('MeatInspection')}
                                    required/>
                                    Is the meat free from any abnormalities or contamination?
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistMardi.DocumentationAndRecord}
                                    onChange={() => handleCheckboxChange('DocumentationAndRecord')}
                                    required/>
                                    Is there documentation of any deviations from the standard process?
                                </label>
                            </div>

                            <div className="mardi-submit">
                                <button type="submit" className="submit-button" onClick={handleChecklistSubmit}>
                                 Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="mardi-back-button-container">
                    <motion.div variants={itemVariants} className="mardi-back-button">
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => displayMardiVerification(false)}
                            >
                                Verify Another Item
                            </motion.button>

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={redirect_to_project}
                            >
                                Back To Project 
                            </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
        )
    }

    const adminID = (event) => {
        setItemID(event.target.value);
    }

    const adminMardi = async (event) => {
        event.preventDefault();
        var count = await SupplyChain.methods.itemsCount().call();
        const mardiCount = await SupplyChain.methods.mardiCount().call();
        const mardiStatus = await SupplyChain.methods.MardiStatus(ItemID).call();

        if (!((ItemID > 0) && (ItemID <= count)))  {
            alert("Please enter valid ID");
            return;
        }

        if (mardiCount > 0 && mardiCount <= count) {
            displayMardiVerification(true);
        } 

        if (mardiStatus === "Your Item is Quality Complied") {
            displayMardiVerified(true);
        } else if (mardiStatus === "Your Item is not fully quality complied") {
            displayComply(true);
        }
        
    }


    return (
        <div className="mardiverify-main-container">
            <div className="project-menu-bar">
                <ProjectSideBar />
            </div> 

            <div className="main-section">
                <div className="mardiverify-section-title">Mardi Verification</div>
                <div className="mardiverify-content">
                    <div className="mardiverify-section">
                        <table className="mardiverify-table-container" border="1">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Origin</th>
                                    <th>Description</th>
                                    <th>Timestamp</th>
                                    <th>Temperature(°C)</th>
                                    <th>Humidity</th>
                                    <th>Food Status</th>
                                    <th>Current Stage</th>
                                    <th>Mardi Status</th>
                                    <th>Slaughter Status</th>
                                    <th>Halal Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Object.keys(Items).map(function (key) {
                                
                                return (
                                    <tr key={key} onClick={() => handleRowClick(Number(Items[key].id))}>
                                            <td>{Number(Items[key].id)}</td>
                                            <td>{Items[key].name}</td>
                                            <td>{Items[key].origin}</td>
                                            <td>{Items[key].nutritionInfo}</td>
                                            <td>{IoTDataState[key]?.timestamp}</td>
                                            <td>{IoTDataState[key]?.temperature}</td>
                                            <td>{IoTDataState[key]?.humidity}</td>
                                            <td>{IoTDataState[key]?.['food status']}</td>
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
                    <motion.div className="input-container" variants={variants}>
                        <form onSubmit={adminMardi}>
                            <motion.div variants={itemVariants}>
                                <input type="text" onChange ={adminID} placeholder="Enter Item ID" required/><br />
                            </motion.div>

                            <motion.div variants={itemVariants} className="mardiverify-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onSubmit={adminMardi}
                                >
                                    Verify
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
                <div className="mardiverify-back-button-container">
                    <motion.div variants={itemVariants} className="mardiverify-back-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={redirect_to_project}
                                >
                                Back to Project 
                                </motion.button>
                    </motion.div>
                </div>
            </div>
    </div>
    )
}

export default MardiVerify