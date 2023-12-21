
import './track.scss';
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




const Track = () => {

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
    

    const supplychainsfarmer = [

        { name: "Farmer"      , image: "/farmer.svg"      },
       
       
    ];

    const supplychainsslaughterhouse = [

        { name: "Farmer"      , image: "/farmer.svg"      },
        { image: "/arrow.png"},

        { name: "Slaughterhouse", image: "/chicken.png"}
       
       
    ];

    const supplychainsverifier = [

        { name: "Farmer"      , image: "/farmer.svg"      },
        { image: "/arrow.png"},

        { name: "Slaughterhouse", image: "/chicken.png"},
        { image: "/arrow.png"},
    
        { name: "Verifier", image: "/halal.png"}
    ];

    const supplychainsmanufacturer = [

        { name: "Farmer"      , image: "/farmer.svg"      },
        { image: "/arrow.png"},

        { name: "Slaughterhouse", image: "/chicken.png"},
        { image: "/arrow.png"},
    
        { name: "Verifier", image: "/halal.png"},
        { image: "/arrow.png"},

        { name: "Manufacturer", image: "/manufacturer.svg"},
    ];

    const supplychainsdistributor = [

        { name: "Farmer"      , image: "/farmer.svg"      },
        { image: "/arrow.png"},

        { name: "Slaughterhouse", image: "/chicken.png"},
        { image: "/arrow.png"},
    
        { name: "Verifier", image: "/halal.png"},
        { image: "/arrow.png"},

        { name: "Manufacturer", image: "/manufacturer.svg"},
        { image: "/arrow.png"},

        { name: "Distributor" , image: "/distributor.svg" }

    ];

    const supplychainsretailer = [

        { name: "Farmer"      , image: "/farmer.svg"      },
        { image: "/arrow.png"},

        { name: "Slaughterhouse", image: "/chicken.png"},
        { image: "/arrow.png"},
    
        { name: "Verifier", image: "/halal.png"},
        { image: "/arrow.png"},

        { name: "Manufacturer", image: "/manufacturer.svg"},
        { image: "/arrow.png"},

        { name: "Distributor" , image: "/distributor.svg" },
        { image: "/arrow.png"},

        { name: "Retailer"    , image: "/retailer.svg"    },
    ];

    const supplychainssold = [

        { name: "Farmer"      , image: "/farmer.svg"      },
        { image: "/arrow.png"},

        { name: "Slaughterhouse", image: "/chicken.png"},
        { image: "/arrow.png"},
    
        { name: "Verifier", image: "/halal.png"},
        { image: "/arrow.png"},

        { name: "Manufacturer", image: "/manufacturer.svg"},
        { image: "/arrow.png"},

        { name: "Distributor" , image: "/distributor.svg" },
        { image: "/arrow.png"},

        { name: "Retailer"    , image: "/retailer.svg"    },
    ];

    const chronologyTableFarmer = (name) => {
        switch (name) {
            case "Farmer":
            return (
              <tbody>
                <tr>
                  <td>{Number(Farmer[Number(Items[ItemID].farmerId)].id)}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].name}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].location}</td>
                </tr>
              </tbody>
            );
          default:
            return null;
        }
    };

    const chronologyTableSlaughterhouse = (name) => {
        switch (name) {
            case "Farmer":
            return (
              <tbody>
                <tr>
                  <td>{Number(Farmer[Number(Items[ItemID].farmerId)].id)}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].name}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].location}</td>
                </tr>
              </tbody>
            );
            case "Slaughterhouse":
            return (
              <tbody>
                <tr>
                  <td>{Number(Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].id)}</td>
                  <td>{Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].name}</td>
                  <td>{Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].location}</td>
                </tr>
              </tbody>
            );
          default:
            return null;
        }
    };

    const chronologyTableVerifier = (name) => {
        switch (name) {
            case "Farmer":
            return (
              <tbody>
                <tr>
                  <td>{Number(Farmer[Number(Items[ItemID].farmerId)].id)}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].name}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].location}</td>
                </tr>
              </tbody>
            );
            case "Slaughterhouse":
                return (
                  <tbody>
                    <tr>
                      <td>{Number(Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].id)}</td>
                      <td>{Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].name}</td>
                      <td>{Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].location}</td>
                    </tr>
                  </tbody>
                );
            case "Verifier":
            return (
              <tbody>
                <tr>
                  <td>{Number(Verifier[Number(Items[ItemID].verifierId)].id)}</td>
                  <td>{Verifier[Number(Items[ItemID].verifierId)].name}</td>
                  <td>{Verifier[Number(Items[ItemID].verifierId)].location}</td>
                </tr>
              </tbody>
            );
          default:
            return null;
        }
    };
    
    const chronologyTableManufacturer = (name) => {
        switch (name) {
            case "Farmer":
            return (
              <tbody>
                <tr>
                  <td>{Number(Farmer[Number(Items[ItemID].farmerId)].id)}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].name}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].location}</td>
                </tr>
              </tbody>
            );
            case "Slaughterhouse":
                return (
                  <tbody>
                    <tr>
                      <td>{Number(Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].id)}</td>
                      <td>{Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].name}</td>
                      <td>{Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].location}</td>
                    </tr>
                  </tbody>
                );
            case "Verifier":
            return (
              <tbody>
                <tr>
                  <td>{Number(Verifier[Number(Items[ItemID].verifierId)].id)}</td>
                  <td>{Verifier[Number(Items[ItemID].verifierId)].name}</td>
                  <td>{Verifier[Number(Items[ItemID].verifierId)].location}</td>
                </tr>
              </tbody>
            );
            case "Manufacturer":
            return (
              <tbody>
                <tr>
                  <td>{Number(Manufacturer[Number(Items[ItemID].manufacturerId)].id)}</td>
                  <td>{Manufacturer[Number(Items[ItemID].manufacturerId)].name}</td>
                  <td>{Manufacturer[Number(Items[ItemID].manufacturerId)].location}</td>
                </tr>
              </tbody>
            );
          default:
            return null;
        }
      };  

    const chronologyTableDistributor = (name) => {
        switch (name) {
            case "Farmer":
            return (
              <tbody>
                <tr>
                  <td>{Number(Farmer[Number(Items[ItemID].farmerId)].id)}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].name}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].location}</td>
                </tr>
              </tbody>
            );
            case "Slaughterhouse":
                return (
                  <tbody>
                    <tr>
                      <td>{Number(Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].id)}</td>
                      <td>{Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].name}</td>
                      <td>{Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].location}</td>
                    </tr>
                  </tbody>
                );
            case "Verifier":
            return (
              <tbody>
                <tr>
                  <td>{Number(Verifier[Number(Items[ItemID].verifierId)].id)}</td>
                  <td>{Verifier[Number(Items[ItemID].verifierId)].name}</td>
                  <td>{Verifier[Number(Items[ItemID].verifierId)].location}</td>
                </tr>
              </tbody>
            );
            case "Manufacturer":
            return (
              <tbody>
                <tr>
                  <td>{Number(Manufacturer[Number(Items[ItemID].manufacturerId)].id)}</td>
                  <td>{Manufacturer[Number(Items[ItemID].manufacturerId)].name}</td>
                  <td>{Manufacturer[Number(Items[ItemID].manufacturerId)].location}</td>
                </tr>
              </tbody>
            );
            case "Distributor":
            return (
              <tbody>
                <tr>
                  <td>{Number(Distributor[Number(Items[ItemID].distributorId)].id)}</td>
                  <td>{Distributor[Number(Items[ItemID].distributorId)].name}</td>
                  <td>{Distributor[Number(Items[ItemID].distributorId)].location}</td>
                </tr>
              </tbody>
            );
          default:
            return null;
        }
      };  

    const chronologyTableRetail = (name) => {
        switch (name) {
            case "Farmer":
            return (
              <tbody>
                <tr>
                  <td>{Number(Farmer[Number(Items[ItemID].farmerId)].id)}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].name}</td>
                  <td>{Farmer[Number(Items[ItemID].farmerId)].location}</td>
                </tr>
              </tbody>
            );
            case "Slaughterhouse":
                return (
                  <tbody>
                    <tr>
                      <td>{Number(Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].id)}</td>
                      <td>{Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].name}</td>
                      <td>{Slaughterhouse[Number(Items[ItemID].slaughterhouseId)].location}</td>
                    </tr>
                  </tbody>
                );
            case "Verifier":
            return (
              <tbody>
                <tr>
                  <td>{Number(Verifier[Number(Items[ItemID].verifierId)].id)}</td>
                  <td>{Verifier[Number(Items[ItemID].verifierId)].name}</td>
                  <td>{Verifier[Number(Items[ItemID].verifierId)].location}</td>
                </tr>
              </tbody>
            );
            case "Manufacturer":
            return (
              <tbody>
                <tr>
                  <td>{Number(Manufacturer[Number(Items[ItemID].manufacturerId)].id)}</td>
                  <td>{Manufacturer[Number(Items[ItemID].manufacturerId)].name}</td>
                  <td>{Manufacturer[Number(Items[ItemID].manufacturerId)].location}</td>
                </tr>
              </tbody>
            );
            case "Distributor":
            return (
              <tbody>
                <tr>
                  <td>{Number(Distributor[Number(Items[ItemID].distributorId)].id)}</td>
                  <td>{Distributor[Number(Items[ItemID].distributorId)].name}</td>
                  <td>{Distributor[Number(Items[ItemID].distributorId)].location}</td>
                </tr>
              </tbody>
            );
            case "Retailer":
            return (
              <tbody>
                <tr>
                  <td>{Number(Retailer[Number(Items[ItemID].retailerId)].id)}</td>
                  <td>{Retailer[Number(Items[ItemID].retailerId)].name}</td>
                  <td>{Retailer[Number(Items[ItemID].retailerId)].location}</td>
                </tr>
              </tbody>
            );
          default:
            return null;
        }
    };

    useEffect(() => {
        loadWeb3();
    }, [])


    const [currentaccount, setCurrentaccount] = useState("");
    const [loader        , setloader        ] = useState(true);
    const [SupplyChain   , setSupplyChain   ] = useState();

    const [Items         , setItems         ] = useState();
    const [ItemID        , setItemID        ] = useState();
    const [ItemPhase     , setItemPhase     ] = useState();
    const [SlaughterStatus, setSlaughterStatus] = useState();
    const [VerifyStatus    , setVerifyStatus  ] = useState();


    const [Farmer        , setFarmer        ] = useState();
    const [Slaughterhouse, setSlaughterhouse] = useState();
    const [Verifier      , setVerifier      ] = useState();
    const [Manufacturer  , setManufacturer  ] = useState();
    const [Distributor   , setDistributor   ] = useState();
    const [Retailer      , setRetailer      ] = useState();
    
    
    const [TrackTillOrdered       , displayTrackTillOrdered       ] = useState(false);
    const [TrackTillFarmer        , displayTrackTillFarmer        ] = useState(false);
    const [TrackTillSlaughterhouse, displayTrackTillSlaughterhouse] = useState(false);
    const [TrackTillVerify        , displayTrackTillVerify        ] = useState(false);
    const [TrackTillManufacture   , displayTrackTillManufacture   ] = useState(false);
    const [TrackTillDistribute    , displayTrackTillDistribute    ] = useState(false);
    const [TrackTillRetail        , displayTrackTillRetail        ] = useState(false);
    const [TrackTillSold          , displayTrackTillSold          ] = useState(false);



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
                item[i + 1] = await supplychain.methods.ItemsInfo(i + 1).call();
                ItemPhase[i + 1] = await supplychain.methods.Chronology(i + 1).call();
                SlaughterStatus[i + 1] = await supplychain.methods.SlaughterStatus(i + 1).call();
                VerifyStatus[i + 1] = await supplychain.methods.HalalStatus(i + 1).call();
            }
            setItems(item);
            setItemPhase(ItemPhase);
            setSlaughterStatus(SlaughterStatus);
            setVerifyStatus(VerifyStatus);



            const farmerCount = await supplychain.methods.farmerCount().call();
            const farmer = {};
            for (i = 0; i < farmerCount; i++) {
                farmer[i + 1] = await supplychain.methods.farmerInfo(i + 1).call();
            }
            setFarmer(farmer);


            const slaughterhouseCount = await supplychain.methods.slaughterhouseCount().call();
            const slaughterhouse = {};
            for (i = 0; i < slaughterhouseCount; i++) {
                slaughterhouse[i + 1] = await supplychain.methods.slaughterhouseInfo(i + 1).call();
            }
            setSlaughterhouse(slaughterhouse);


            const verifierCount = await supplychain.methods.verifierCount().call();
            const verifier = {};
            for (i = 0; i < verifierCount; i++) {
                verifier[i + 1] = await supplychain.methods.verifierInfo(i + 1).call();
            }
            setVerifier(verifier);


            const manufacturerCount = await supplychain.methods.manufacturerCount().call();
            const manufacture = {};
            for (i = 0; i < manufacturerCount; i++) {
                manufacture[i + 1] = await supplychain.methods.manufacturerInfo(i + 1).call();
            }
            setManufacturer(manufacture);



            const distributorCount = await supplychain.methods.distributorCount().call();
            const distribute = {};
            for (i = 0; i < distributorCount; i++) {
                distribute[i + 1] = await supplychain.methods.distributorInfo(i + 1).call();
            }
            setDistributor(distribute);



            const retailerCount = await supplychain.methods.retailerCount().call();
            const retailer = {};
            for (i = 0; i < retailerCount; i++) {
                retailer[i + 1] = await supplychain.methods.retailerInfo(i + 1).call();
            }
            setRetailer(retailer);
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

/* The Flow of the Supply Chain is going to be like this:

    Item Ordered  =>  Farmer  =>  Manufacturer  =>  Distributor  =>  Retailer  =>  Item Sold

         0              1              2                 3              4              5


*/


// Item Ordered
    if (TrackTillOrdered) {
        return (
        <div className="chronology-ordered-main-container">
            <div className="project-menu-bar">
                <ProjectSideBar />
            </div> 

            <div className="main-section">
                <div className="chronology-ordered-section-title">Track Information</div>
                <div className="chronology-ordered-content">
                    <div className="chronology-ordered-section">
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
                                <tr>
                                    <td>{Number(Items[ItemID].id)}</td>
                                    <td>{Items[ItemID].name}</td>
                                    <td>{Items[ItemID].origin}</td>
                                    <td>{Items[ItemID].nutritionInfo}</td>
                                    <td>{ItemPhase[ItemID]}</td>
                                    <td>{SlaughterStatus[ItemID]}</td>
                                    <td>{VerifyStatus[ItemID]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2 className="ordered-info">Your Item has already <b>ordered</b>, Please wait</h2>
                <div className="chronology-ordered-back-button-container">
                    <motion.div variants={itemVariants} className="chronology-ordered-back-button">
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => displayTrackTillOrdered(false)}
                            >
                                Track Another Item
                            </motion.button>

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={redirect_to_project}
                            >
                                Back To Project Overview
                            </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
        )
    }



// Item Arrived at Farmer
    if (TrackTillFarmer) {
        return (
            <div className="chronology-farmer-main-container">
                <div className="project-menu-bar">
                    <ProjectSideBar />
                </div> 

                <div className="main-section">
                    <div className="chronology-farmer-section-title">Track Information</div>
                    <div className="chronology-farmer-content">
                        <div className="chronology-farmer-section">
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
                                    <tr>
                                        <td>{Number(Items[ItemID].id)}</td>
                                        <td>{Items[ItemID].name}</td>
                                        <td>{Items[ItemID].origin}</td>
                                        <td>{Items[ItemID].nutritionInfo}</td>
                                        <td>{ItemPhase[ItemID]}</td>
                                        <td>{SlaughterStatus[ItemID]}</td>
                                        <td>{VerifyStatus[ItemID]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="supplychain-farmer-section">
                            {supplychainsfarmer.map((supplychain, index) => (
                                <motion.div className="supplychain-farmer-item" 
                                key={index}>
                            
                                    <motion.img src={supplychain.image} alt={supplychain.name} id={supplychain.name}
                                        whileHover={{ scale: 1.1 }} 
                                        whileTap={{ scale: 0.95 }} />

                                    {supplychain.name && (
                                    <motion.div className="supplychain-farmer-track-section">
                                        <p>{supplychain.name} Information</p>
                                            <table className="table-container" border="1">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Based In</th>
                                                    </tr>
                                                </thead>
                                                {chronologyTableFarmer(supplychain.name)}
                                            </table>
                                    </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="chronology-farmer-back-button-container">
                        <motion.div variants={itemVariants} className="chronology-farmer-back-button">
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => displayTrackTillFarmer(false)}
                            >
                            Track Another Item
                            </motion.button>

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={redirect_to_project}
                            >
                                Back To Project Overview
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    }


// Item Arrived at Farmer
if (TrackTillSlaughterhouse) {
    return (
        <div className="chronology-slaughterhouse-main-container">
            <div className="project-menu-bar">
                <ProjectSideBar />
            </div> 

            <div className="main-section">
                <div className="chronology-slaughterhouse-section-title">Track Information</div>
                <div className="chronology-slaughterhouse-content">
                    <div className="chronology-slaughterhouse-section">
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
                                <tr>
                                    <td>{Number(Items[ItemID].id)}</td>
                                    <td>{Items[ItemID].name}</td>
                                    <td>{Items[ItemID].origin}</td>
                                    <td>{Items[ItemID].nutritionInfo}</td>
                                    <td>{ItemPhase[ItemID]}</td>
                                    <td>{SlaughterStatus[ItemID]}</td>
                                    <td>{VerifyStatus[ItemID]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="supplychain-slaughterhouse-section">
                        {supplychainsslaughterhouse.map((supplychain, index) => (
                            <motion.div className="supplychain-slaughterhouse-item" 
                            key={index}>
                        
                                <motion.img src={supplychain.image} alt={supplychain.name} id={supplychain.name}
                                    whileHover={{ scale: 1.1 }} 
                                    whileTap={{ scale: 0.95 }} />

                                {supplychain.name && (
                                <motion.div className="supplychain-slaughterhouse-track-section">
                                    <p>{supplychain.name} Information</p>
                                        <table className="table-container" border="1">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Based In</th>
                                                </tr>
                                            </thead>
                                            {chronologyTableSlaughterhouse(supplychain.name)}
                                        </table>
                                </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="chronology-slaughterhouse-back-button-container">
                    <motion.div variants={itemVariants} className="chronology-slaughterhouse-back-button">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => displayTrackTillSlaughterhouse(false)}
                        >
                        Track Another Item
                        </motion.button>

                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={redirect_to_project}
                        >
                            Back To Project Overview
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}


// Item Arrived at Verifier
    if(TrackTillVerify) {
        return (
            <div className="chronology-verifier-main-container">
                <div className="project-menu-bar">
                    <ProjectSideBar />
                </div> 

                <div className="main-section">
                    <div className="chronology-verifier-section-title">Track Information</div>
                    <div className="chronology-verifier-content">
                        <div className="chronology-verifier-section">
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
                                    <tr>
                                        <td>{Number(Items[ItemID].id)}</td>
                                        <td>{Items[ItemID].name}</td>
                                        <td>{Items[ItemID].origin}</td>
                                        <td>{Items[ItemID].nutritionInfo}</td>
                                        <td>{ItemPhase[ItemID]}</td>
                                        <td>{SlaughterStatus[ItemID]}</td>
                                        <td>{VerifyStatus[ItemID]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="supplychain-verifier-section">
                            {supplychainsverifier.map((supplychain, index) => (
                                <motion.div className="supplychain-verifier-item" 
                                key={index}>
                            
                                    <motion.img src={supplychain.image} alt={supplychain.name} id={supplychain.name}
                                        whileHover={{ scale: 1.1 }} 
                                        whileTap={{ scale: 0.95 }} />

                                    {supplychain.name && (
                                    <motion.div className="supplychain-verifier-track-section">
                                        <p>{supplychain.name} Information</p>
                                            <table className="table-container" border="1">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Based In</th>
                                                    </tr>
                                                </thead>
                                                {chronologyTableVerifier(supplychain.name)}
                                            </table>
                                    </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="chronology-verifier-back-button-container">
                        <motion.div variants={itemVariants} className="chronology-verifier-back-button">
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => displayTrackTillVerify(false)}
                            >
                            Track Another Item
                            </motion.button>

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={redirect_to_project}
                            >
                                Back To Project Overview
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    }




// Item being manufactured
    if (TrackTillManufacture) {
        return (
            <div className="chronology-manufacturer-main-container">
                 <div className="project-menu-bar">
                    <ProjectSideBar />
                </div> 

                <div className="main-section">
                    <div className="chronology-manufacturer-section-title">Track Information</div>
                    <div className="chronology-manufacturer-content">
                        <div className="chronology-manufacturer-section">
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
                                    <tr>
                                        <td>{Number(Items[ItemID].id)}</td>
                                        <td>{Items[ItemID].name}</td>
                                        <td>{Items[ItemID].origin}</td>
                                        <td>{Items[ItemID].nutritionInfo}</td>
                                        <td>{ItemPhase[ItemID]}</td>
                                        <td>{SlaughterStatus[ItemID]}</td>
                                        <td>{VerifyStatus[ItemID]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="supplychain-manufacturer-section">
                            {supplychainsmanufacturer.map((supplychain, index) => (
                                <motion.div className="supplychain-manufacturer-item" 
                                    key={index}>
                                    <motion.img src={supplychain.image} alt={supplychain.name} id={supplychain.name}
                                        whileHover={{ scale: 1.1 }} 
                                        whileTap={{ scale: 0.95 }} />

                            
                                    {supplychain.name && (
                                        <motion.div className="supplychain-manufacturer-track-section">
                                            <p>{supplychain.name} Information</p>
                                                <table className="table-container" border="1">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Name</th>
                                                            <th>Based In</th>
                                                        </tr>
                                                    </thead>
                                                    {chronologyTableManufacturer(supplychain.name)}
                                                </table>
                                        </motion.div>
                                    )}
                            
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="chronology-manufacturer-back-button-container">
                        <motion.div variants={itemVariants} className="chronology-manufacturer-back-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => displayTrackTillManufacture(false)}
                                >
                                    Track Another Item
                                </motion.button>

                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={redirect_to_project}
                                >
                                    Back To Project Overview
                                </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    }



// Item being distribute
    if (TrackTillDistribute) {
        return (
            <div className="chronology-distributor-main-container">
                <div className="project-menu-bar">
                    <ProjectSideBar />
                </div> 
                <div className="main-section">
                    <div className="chronology-distributor-section-title">Track Information</div>
                    <div className="chronology-distributor-content">
                        <div className="chronology-distributor-section">
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
                                    <tr>
                                        <td>{Number(Items[ItemID].id)}</td>
                                        <td>{Items[ItemID].name}</td>
                                        <td>{Items[ItemID].origin}</td>
                                        <td>{Items[ItemID].nutritionInfo}</td>
                                        <td>{ItemPhase[ItemID]}</td>
                                        <td>{SlaughterStatus[ItemID]}</td>
                                        <td>{VerifyStatus[ItemID]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="supplychain-distributor-section">
                            {supplychainsdistributor.map((supplychain, index) => (
                                <motion.div className="supplychain-distributor-item" 
                                    key={index}>
                                    <motion.img src={supplychain.image} alt={supplychain.name} id={supplychain.name}
                                        whileHover={{ scale: 1.1 }} 
                                        whileTap={{ scale: 0.95 }} />
                                    

                                    {supplychain.name && (
                                    <motion.div className="supplychain-distributor-track-section">
                                        <p>{supplychain.name} Information</p>
                                            <table className="table-container" border="1">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Based In</th>
                                                    </tr>
                                                </thead>
                                                {chronologyTableDistributor(supplychain.name)}
                                            </table>
                                    </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="chronology-distributor-back-button-container">
                        <motion.div variants={itemVariants} className="chronology-distributor-back-button">
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => displayTrackTillDistribute(false)}
                            >
                                Track Another Item
                            </motion.button>

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={redirect_to_project}
                            >
                                Back To Project Overview
                            </motion.button>
                        </motion.div>
                    </div>                          
                </div>
            </div>
        )
    }


    // Item safely arrived at retail
    if (TrackTillRetail) {
        return (
        <div className="chronology-retailer-main-container">
            <div className="project-menu-bar">
                    <ProjectSideBar />
            </div> 
            <div className="main-section">
                <div className="chronology-retailer-section-title">Track Information</div>
                <div className="chronology-retailer-content">
                    <div className="chronology-retailer-section">
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
                                <tr>
                                    <td>{Number(Items[ItemID].id)}</td>
                                    <td>{Items[ItemID].name}</td>
                                    <td>{Items[ItemID].origin}</td>
                                    <td>{Items[ItemID].nutritionInfo}</td>
                                    <td>{ItemPhase[ItemID]}</td>
                                    <td>{SlaughterStatus[ItemID]}</td>
                                    <td>{VerifyStatus[ItemID]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="supplychain-retailer-section">
                        {supplychainsretailer.map((supplychain, index) => (
                            <motion.div className="supplychain-retailer-item" 
                                key={index}>
                        
                                <motion.img src={supplychain.image} alt={supplychain.name} id={supplychain.name}
                                    whileHover={{ scale: 1.1 }} 
                                    whileTap={{ scale: 0.95 }} />

                                
                                {supplychain.name && (
                                    <motion.div className="supplychain-retailer-track-section">
                                        <p>{supplychain.name} Information</p>
                                            <table className="table-container" border="1">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Based In</th>
                                                    </tr>
                                                </thead>
                                                {chronologyTableRetail(supplychain.name)}
                                            </table>
                                    </motion.div>
                                )}
                            
                            </motion.div>
                        ))}
                   
                    </div>
                </div>
                <div className="chronology-retailer-back-button-container">
                    <motion.div variants={itemVariants} className="chronology-retailer-back-button">
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => displayTrackTillRetail(false)}
                            >
                                Track Another Item
                            </motion.button>

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={redirect_to_project}
                            >
                                Back To Project Overview
                            </motion.button>
                    </motion.div>
                </div>             
            </div>
        </div>
        )
    }

    // Item is Sold
    if (TrackTillSold) {
        return (
            <div className="chronology-sold-main-container">
                <div className="project-menu-bar">
                    <ProjectSideBar />
                </div> 
                <div className="main-section">
                    <div className="chronology-sold-section-title">Track Information</div>
                    <div className="chronology-sold-content">
                        <div className="chronology-sold-section">
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
                                    <tr>
                                        <td>{Number(Items[ItemID].id)}</td>
                                        <td>{Items[ItemID].name}</td>
                                        <td>{Items[ItemID].origin}</td>
                                        <td>{Items[ItemID].nutritionInfo}</td>
                                        <td>{ItemPhase[ItemID]}</td>
                                        <td>{SlaughterStatus[ItemID]}</td>
                                        <td>{VerifyStatus[ItemID]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="supplychain-sold-section">
                            {supplychainssold.map((supplychain, index) => (
                                <motion.div className="supplychain-sold-item" key={index} id={supplychain.name}>
                            
                                        
                                    <motion.img src={supplychain.image} alt={supplychain.name} 
                                        whileHover={{ scale: 1.1 }} 
                                        whileTap={{ scale: 0.95 }} />

                                    
                                    {supplychain.name && (
                                        <motion.div className="supplychain-sold-track-section" >
                                            <p>{supplychain.name} Information</p>
                                                <table className="table-container" border="1">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Name</th>
                                                            <th>Based In</th>
                                                        </tr>
                                                    </thead>
                                                    {chronologyTableRetail(supplychain.name)}
                                                </table>
                                        </motion.div>
                                    )}

                                </motion.div>
                            ))}  
                        </div>
                    </div>
                    <h2 className="sold-info">Your Item is <b>Sold</b> already</h2>
                
                    <div className="chronology-sold-back-button-container">
                        <motion.div variants={itemVariants} className="chronology-sold-back-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => displayTrackTillSold(false)}
                                >
                                    Track Another Item
                                </motion.button>

                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={redirect_to_project}
                                >
                                    Back To Project Overview
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
        if (!((ItemID > 0) && (ItemID <= count)))
            alert("Please enter valid ID");
        else {
           
            if (Items[ItemID].chronology == 7)
                displayTrackTillSold(true);
          
            else if (Items[ItemID].chronology == 6)
                displayTrackTillRetail(true);
          
            else if (Items[ItemID].chronology == 5)
                displayTrackTillDistribute(true);
            
            else if (Items[ItemID].chronology == 4)
                displayTrackTillManufacture(true);

            else if (Items[ItemID].chronology == 3)
                displayTrackTillVerify(true);
            
            else if (Items[ItemID].chronology == 2)
                displayTrackTillSlaughterhouse(true);
           
            else if (Items[ItemID].chronology == 1)
                displayTrackTillFarmer(true);

            else
                displayTrackTillOrdered(true);

        }
    }

    return (

        <div className="track-main-container">
            <div className="project-menu-bar">
                <ProjectSideBar />
            </div> 

            <div className="main-section">
                <div className="track-section-title">Tracking</div>
                <div className="track-content">
                    <div className="track-section">
                        <table className="track-table-container" border="1">
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
                    <motion.div className="input-container" variants={variants}>
                        <form onSubmit={adminRegister}>
                            <motion.div variants={itemVariants}>
                                <input type="text" onChange ={adminID} placeholder="Enter ID" required/><br />
                            </motion.div>

                            <motion.div variants={itemVariants} className="track-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onSubmit={adminRegister}
                                >
                                    Track
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
                <div className="track-back-button-container">
                    <motion.div variants={itemVariants} className="track-back-button">
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
    );
}

export default Track;