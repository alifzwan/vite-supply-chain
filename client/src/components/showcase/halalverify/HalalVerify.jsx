import './halalverify.scss';
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




const HalalVerify = () => {

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

    const [checklistVerifier, setChecklistVerifier] = useState({
        RawMaterialsHalalCompliant: false,
        SupplierHasHalalCertification: false,
        EquipmentFreeFromContamination: false,
        CorrectSlaughteringMethods: false,
        LabelingAndPackagingMeetsHalalStandards: false,
        StaffProperlyTrainedInHalalProcedures: false,
    });


    const [currentaccount    , setCurrentaccount       ] = useState("");
    const [loader            , setloader               ] = useState(true);
    const [SupplyChain       , setSupplyChain          ] = useState();

    const [HalalVerification , displayHalalVerification] = useState(false);
    const [Verified          , displayVerified         ] = useState(false);
   


    const [Items             , setItems                ] = useState();
    const [ItemID            , setItemID               ] = useState();
    const [ItemPhase         , setItemPhase            ] = useState();
    const [SlaughterStatus   , setSlaughterStatus      ] = useState();
    const [VerifyStatus      , setVerifyStatus         ] = useState();



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
        setChecklistVerifier((prevChecklist) => ({
            ...prevChecklist,
            [checkboxName]: !prevChecklist[checkboxName],
        }));
    };

    const handleChecklistSubmit = async () => {
        try {

            if (Object.values(checklistVerifier).every((item) => item === true)) {
                // If verification succeeds, send the transaction
                await SupplyChain.methods
                    .verifyTickChecklistItem(
                        ItemID,
                        checklistVerifier.RawMaterialsHalalCompliant,
                        checklistVerifier.SupplierHasHalalCertification,
                        checklistVerifier.EquipmentFreeFromContamination,
                        checklistVerifier.CorrectSlaughteringMethods,
                        checklistVerifier.LabelingAndPackagingMeetsHalalStandards,
                        checklistVerifier.StaffProperlyTrainedInHalalProcedures
                    )
                    .send({ from: currentaccount });
                console.log("Transaction successful"); 

                console.log("Items before:", Items);
                console.log("ItemPhase before:", ItemPhase);
                console.log("VerifyStatus before:", VerifyStatus);

                await loadBlockchaindata()
                
                    // Log the current status after the transaction
                const updatedStatus = await SupplyChain.methods.HalalStatus(ItemID).call();

                console.log("Updated Status:", updatedStatus);
                console.log("Items after:", Items);
                console.log("ItemPhase after:", ItemPhase);
                console.log("VerifyStatus after:", VerifyStatus);

                displayVerified(true);
                // After successful verification and transaction, you can update the UI or perform other actions
                // For example, you might want to display a success message

                
                
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

    if (Verified) {
        return (
            <div className="verified-main-container">
                <div className="project-menu-bar">
                    <ProjectSideBar />
                </div> 

                <div className="main-section">
                    <div className="verified-section-title">Halal Verification</div>
                    <div className="verified-content">
                        <div className="verified-section">
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
                                                <td>{SlaughterStatus[key]}</td>
                                                <td>{VerifyStatus[key]}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2 className='verified-description'>Your Item is already <b>halal verified</b></h2>
                    <div className="halal-back-button-container">
                        <motion.div variants={itemVariants} className="halal-back-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {displayVerified(false); displayHalalVerification(false);}}
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
    if (HalalVerification) {
        return (
        <div className="halal-main-container">
            <div className="project-menu-bar">
                <ProjectSideBar />
            </div> 

            <div className="main-section">
                <div className="halal-section-title">Halal Verification</div>
                <div className="halal-content">
                    <div className="halal-section">
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
                                            <td>{SlaughterStatus[key]}</td>
                                            <td>{VerifyStatus[key]}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="halal-checklist">
                        <div className="halal-checklist-section">

                            <h3 className='halal-checklist-title'>Halal Checklist</h3>

                            <p>Please Tick</p>

                            <div className="check-box">
                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistVerifier.RawMaterialsHalalCompliant}
                                    onChange={() => handleCheckboxChange('RawMaterialsHalalCompliant')}
                                    required/>
                                    Does all raw materials used are halal compliant ?
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistVerifier.SupplierHasHalalCertification}
                                    onChange={() => handleCheckboxChange('SupplierHasHalalCertification')}
                                    required/>
                                    Does the supplier have halal certification ?
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistVerifier.EquipmentFreeFromContamination}
                                    onChange={() => handleCheckboxChange('EquipmentFreeFromContamination')}
                                    required/>
                                    Does all equipment used in production is free from contamination 
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistVerifier.CorrectSlaughteringMethods}
                                    onChange={() => handleCheckboxChange('CorrectSlaughteringMethods')}
                                    required/>
                                    Does the product does the correct slaughtering methods?
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistVerifier.LabelingAndPackagingMeetsHalalStandards}
                                    onChange={() => handleCheckboxChange('LabelingAndPackagingMeetsHalalStandards')}
                                    required/>
                                    Does the labeling and packaging of products to ensure they meet halal standards?
                                </label>

                                <label>
                                    <input 
                                    className="verify-checkbox" 
                                    type="checkbox" 
                                    checked={checklistVerifier.StaffProperlyTrainedInHalalProcedures}
                                    onChange={() => handleCheckboxChange('StaffProperlyTrainedInHalalProcedures')}
                                    required/>
                                    Does all staff involved are properly trained in halal procedures ?
                                </label>
                            </div>

                            <div className="halal-submit">
                                <button type="submit" className="submit-button" onClick={handleChecklistSubmit}>
                                 Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="halal-back-button-container">
                    <motion.div variants={itemVariants} className="halal-back-button">
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => displayHalalVerification(false)}
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

    const adminRegister = async (event) => {
        event.preventDefault();
        var count = await SupplyChain.methods.itemsCount().call();
        const verifierCount = await SupplyChain.methods.verifierCount().call();

        if (!((ItemID > 0) && (ItemID <= count)))
            alert("Please enter valid ID");
        else {
            if ((verifierCount > 0) && (verifierCount <= count))
                displayHalalVerification(true);
            else
                return "There's no Verifier registered"
        }
        
    }


    return (
        <div className="verify-main-container">
            <div className="project-menu-bar">
                <ProjectSideBar />
            </div> 

            <div className="main-section">
                <div className="verify-section-title">Halal Verification</div>
                <div className="verify-content">
                    <div className="verify-section">
                        <table className="verify-table-container" border="1">
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
                                            <td>{ SlaughterStatus[key]}</td>
                                            <td>{VerifyStatus[key]}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                    <motion.div className="input-container" variants={variants}>
                        <form onSubmit={adminRegister}>
                            <motion.div variants={itemVariants}>
                                <input type="text" onChange ={adminID} placeholder="Enter ID" required/><br />
                            </motion.div>

                            <motion.div variants={itemVariants} className="verify-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onSubmit={adminRegister}
                                >
                                    Verify
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
                <div className="verify-back-button-container">
                    <motion.div variants={itemVariants} className="verify-back-button">
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

export default HalalVerify