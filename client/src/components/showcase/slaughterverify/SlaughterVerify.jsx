import './slaughterverify.scss';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Web3 from "web3";
import "ldrs/cardio"; 
import ProjectSideBar from '../project/projectsidebar/projectSideBar/ProjectSideBar';
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




const SlaughterVerify = () => {

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

    const [checklistSlaughter, setChecklistSlaughter] = useState({
        isPracticingMuslim: false,
        isInvocationCorrect: false,
        isCorrectSlaughterMethod: false,
        isBloodDrained: false,
        isPreventionOfContamination: false,
    });


    const [currentaccount, setCurrentaccount] = useState("");
    const [loader        , setloader        ] = useState(true);
    const [SupplyChain   , setSupplyChain   ] = useState();


    const [Items             , setItems          ] = useState();
    const [ItemID            , setItemID         ] = useState();
    const [ItemPhase         , setItemPhase      ] = useState();
    const [SlaughterStatus   , setSlaughterStatus] = useState();
    const [VerifyStatus      , setVerifyStatus   ] = useState();


    const [SlaughterVerification, displaySlaughterVerification] = useState(false);
    const [Slaughtered          , displaySlaughtered          ] = useState(false);



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
            const SlaughterStatus = [];
            const VerifyStatus = [];

            for (i = 0; i < itemsCount; i++) {
                item[i] = await supplychain.methods.ItemsInfo(i + 1).call();
                ItemPhase[i] = await supplychain.methods.Chronology(i + 1).call();
                SlaughterStatus[i] = await supplychain.methods.SlaughterStatus(i + 1).call();
                VerifyStatus[i] = await supplychain.methods.HalalStatus(i + 1).call();

            }
            setItems(item);
            setItemPhase(ItemPhase);
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
        setChecklistSlaughter((prevChecklist) => ({
            ...prevChecklist,
            [checkboxName]: !prevChecklist[checkboxName],
        }));
    };

    const handleChecklistSubmit = async () => {
        try {

            // const verificationStatus = halalVerify(checklist);
            if (Object.values(checklistSlaughter).every((item) => item === true)) {
                // If verification succeeds, send the transaction
                await SupplyChain.methods
                    .slaughterTickChecklistItem(
                        ItemID,
                        checklistSlaughter.isPracticingMuslim,
                        checklistSlaughter.isInvocationCorrect,
                        checklistSlaughter.isCorrectSlaughterMethod,
                        checklistSlaughter.isBloodDrained,
                        checklistSlaughter.isPreventionOfContamination,
                    )
                    .send({ from: currentaccount });
                // console.log("Transaction successful"); 
                // console.log("Items before:", Items);
                // console.log("ItemPhase before:", ItemPhase);
                // console.log("SlaughterStatus before:", SlaughterStatus);

                await loadBlockchaindata()
                
                // Log the current status after the transaction
                // const updatedStatus = await SupplyChain.methods.SlaughterStatus(ItemID).call();

                // console.log("Updated Status:", updatedStatus);
                // console.log("Items after:", Items);
                // console.log("ItemPhase after:", ItemPhase);
                // console.log("SlaughterStatus after:", SlaughterStatus);

                displaySlaughtered(true);
            
            } else {
                // Handle the case where verification fails
                alert('Please make sure you tick all the checklist');
            }
        } catch (error) {
            // Handle the error, display a message, or perform other actions
            
            console.log(error)
            alert('Please make sure you tick all the checklist');
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

    if (Slaughtered) {
        return (
            <div className="slaughtered-main-container">
                <div className="project-menu-bar">
                    <ProjectSideBar />
                </div> 

                <div className="main-section">
                    <div className="slaughtered-section-title">Slaughter Verification</div>
                    <div className="slaughtered-content">
                        <div className="slaughtered-section">
                            <table className="table-container" border="1">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Based In</th>
                                        <th>Description</th>
                                        <th>Current Stage</th>
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
                                                <td>{ItemPhase[key]}</td>
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

                    <h2 className='slaughtered-description'>Your Item is already <b>slaughtered</b></h2>
                    <div className="Slaughter-back-button-container">
                        <motion.div variants={itemVariants} className="Slaughter-back-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {displaySlaughtered(false); displaySlaughterVerification(false);}}
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
    if (SlaughterVerification) {
        return (
        <div className="Slaughter-main-container">
            <div className="project-menu-bar">
                <ProjectSideBar />
            </div> 

            <div className="main-section">
                <div className="Slaughter-section-title">Slaughterhouse Verification</div>
                <div className="Slaughter-content">
                    <div className="Slaughter-section">
                        <table className="table-container" border="1">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Based In</th>
                                    <th>Description</th>
                                    <th>Current Stage</th>
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
                                            <td>{ItemPhase[key]} </td>
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
                    <div className="Slaughter-checklist">
                        <div className="Slaughter-checklist-section">

                            <h3 className='Slaughter-checklist-title'>Slaughterhouse Checklist</h3>

                            <p>Please Tick</p>

                            <div className="check-box">
                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistSlaughter.isPracticingMuslim}
                                    onChange={() => handleCheckboxChange('isPracticingMuslim')}
                                    required/>
                                    Is the slaughterer a practicing Muslim of sound mind?
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistSlaughter.isInvocationCorrect}
                                    onChange={() => handleCheckboxChange('isInvocationCorrect')}
                                    required/>
                                    Was Allah's name invoked (Bismillah and Allahu Akbar) during the slaughter?
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistSlaughter.isCorrectSlaughterMethod}
                                    onChange={() => handleCheckboxChange('isCorrectSlaughterMethod')}
                                    required/>
                                    Was the correct method of slaughter followed, cutting the throat and blood vessels without severing the spinal cord? 
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistSlaughter.isBloodDrained}
                                    onChange={() => handleCheckboxChange('isBloodDrained')}
                                    required/>
                                    Was the blood thoroughly drained from the carcass after slaughter?
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistSlaughter.isPreventionOfContamination}
                                    onChange={() => handleCheckboxChange('isPreventionOfContamination')}
                                    required/>
                                    Are strict measures in place to prevent cross-contamination between halal and non-halal products?
                                </label>
                            </div>

                            <div className="Slaughter-submit">
                                <button type="submit" className="submit-button" onClick={handleChecklistSubmit}>
                                 Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="Slaughter-back-button-container">
                    <motion.div variants={itemVariants} className="Slaughter-back-button">
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => displaySlaughterVerification(false)}
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

    const adminSlaughter = async (event) => {
        event.preventDefault();

        var count = await SupplyChain.methods.itemsCount().call();
        const slaughterhouseCount = await SupplyChain.methods.slaughterhouseCount().call();
        const slaughterStatus = await SupplyChain.methods.SlaughterStatus(ItemID).call();

        if (!((ItemID > 0) && (ItemID <= count))){
            alert("Please enter valid Item ID");
            return;
        }

        if ((slaughterhouseCount > 0) && (slaughterhouseCount <= count)){
            displaySlaughterVerification(true);
        }else
            return "There's no Verifier registered"
       
        if (slaughterStatus === "Your Item is Slaughtered"){
            displaySlaughtered(true)
        }
        
    }

    return (
        <div className="slaughterhouse-main-container">
            <div className="project-menu-bar">
                <ProjectSideBar />
            </div> 

            <div className="main-section">
                <div className="slaughterhouse-section-title">Slaughter Verification</div>
                <div className="slaughterhouse-content">
                    <div className="slaughterhouse-section">
                        <table className="slaughterhouse-table-container" border="1">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Based In</th>
                                    <th>Description</th>
                                    <th>Current Stage</th>
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
                                            <td>{ItemPhase[key]}</td>
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
                        <form onSubmit={adminSlaughter}>
                            <motion.div variants={itemVariants}>
                                <input type="text" onChange ={adminID} placeholder="Enter ID" required/><br />
                            </motion.div>

                            <motion.div variants={itemVariants} className="slaughterhouse-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onSubmit={adminSlaughter}
                                >
                                    Verify
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
                <div className="slaughterhouse-back-button-container">
                    <motion.div variants={itemVariants} className="slaughterhouse-back-button">
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

export default SlaughterVerify