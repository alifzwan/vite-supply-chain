
import './track.scss';
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




const Track = () => {

    const navigate = useNavigate()

    const redirect_to_project = () => {
        navigate('/project')
    }

    const supplychainsfarmer = [

        { name: "Farmer"      , image: "/farmer.svg"      }
       
    ];

    const supplychainsmanufacturer = [

        { name: "Farmer"      , image: "/farmer.svg"      },
        { image: "/arrow.png"},
    
        { name: "Manufacturer", image: "/manufacturer.svg"}
    ];

    const supplychainsdistributor = [

        { name: "Farmer"      , image: "/farmer.svg"      },
        { image: "/arrow.png"},
    
        { name: "Manufacturer", image: "/manufacturer.svg"},
        { image: "/arrow.png"},
    
        { name: "Distributor" , image: "/distributor.svg" }
    ];

    const supplychainsretailer = [

        { name: "Farmer"      , image: "/farmer.svg"      },
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
        loadBlockchaindata();
    }, [])


    const [currentaccount, setCurrentaccount] = useState("");
    const [loader        , setloader        ] = useState(true);
    const [SupplyChain   , setSupplyChain   ] = useState();

    const [Items         , setItems         ] = useState();
    const [ItemID        , setItemID        ] = useState();
    const [ItemPhase     , setItemPhase     ] = useState();


    const [Farmer        , setFarmer        ] = useState();
    const [Manufacturer  , setManufacturer  ] = useState();
    const [Distributor   , setDistributor   ] = useState();
    const [Retailer      , setRetailer      ] = useState();
    
    
    const [TrackTillOrdered     , displayTrackTillOrdered    ] = useState(false);
    const [TrackTillRetail      , displayTrackTillRetail     ] = useState(false);
    const [TrackTillDistribute  , displayTrackTillDistribute ] = useState(false);
    const [TrackTillManufacture , displayTrackTillManufacture] = useState(false);
    const [TrackTillFarmer      , displayTrackTillFarmer     ] = useState(false);
    const [TrackTillSold        , displayTrackTillSold       ] = useState(false);



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
                item[i + 1] = await supplychain.methods.ItemsInfo(i + 1).call();
                ItemPhase[i + 1] = await supplychain.methods.Chronology(i + 1).call();
            }
            setItems(item);
            setItemPhase(ItemPhase);



            const farmerCount = await supplychain.methods.farmerCount().call();
            const farmer = {};
            for (i = 0; i < farmerCount; i++) {
                farmer[i + 1] = await supplychain.methods.farmerInfo(i + 1).call();
            }
            setFarmer(farmer);


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
            <div>
                <h1 className="wait">Loading...</h1>
            </div>
        )

    }

    if (TrackTillOrdered) {
        return (
            <div className="chronology-main-container">
            <h2 className="chronology-section-title">Information</h2>
            <div className="chronology-section">
                <h2>Item Information</h2>

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
                            <tr>
                                <td>{Number(Items[ItemID].id)}</td>
                                <td>{Items[ItemID].name}</td>
                                <td>{Items[ItemID].categories}</td>
                                <td>{Items[ItemID].brand}</td>
                                <td>{Items[ItemID].origin}</td>
                                <td>{Items[ItemID].nutritionInfo}</td>
                                <td>{ItemPhase[ItemID]}</td>
                            </tr>

    
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="chronology-track-section">
                

                <h2>Your Item has already ordered, Please wait</h2>

            </div>


            <motion.div variants={itemVariants} className="back-button">
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
        )
    }

    if (TrackTillFarmer) {
        return (
            <div className="chronology-main-container">
            <h2 className="chronology-section-title">Information</h2>
            <div className="chronology-section">
                <h2>Item Information</h2>

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
                            <tr>
                                <td>{Number(Items[ItemID].id)}</td>
                                <td>{Items[ItemID].name}</td>
                                <td>{Items[ItemID].categories}</td>
                                <td>{Items[ItemID].brand}</td>
                                <td>{Items[ItemID].origin}</td>
                                <td>{Items[ItemID].nutritionInfo}</td>
                                <td>{ItemPhase[ItemID]}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="supplychain-list">

                {supplychainsfarmer.map((supplychain, index) => (
                    <motion.div className="supplychain-item" key={index}>
                    {supplychain.name && (<>
                            
                        <motion.img src={supplychain.image} alt={supplychain.name} 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }} />

                        <motion.p 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }}>
                            {supplychain.name}
                        </motion.p>

                        <motion.div className="chronology-track-section">
                            <h2>{supplychain.name} Information</h2>
                                <table className="chronology-table-container" border="1">
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
                    </>
                    )}
                    </motion.div>
                ))}
                   
             </div>

            <motion.div variants={itemVariants} className="back-button">
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
        )
    }


    if (TrackTillManufacture) {
        return (
            <div className="chronology-main-container">
            <h2 className="chronology-section-title">Information</h2>
            <div className="chronology-section">
                <h2>Item Information</h2>

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
                            <tr>
                                <td>{Number(Items[ItemID].id)}</td>
                                <td>{Items[ItemID].name}</td>
                                <td>{Items[ItemID].categories}</td>
                                <td>{Items[ItemID].brand}</td>
                                <td>{Items[ItemID].origin}</td>
                                <td>{Items[ItemID].nutritionInfo}</td>
                                <td>{ItemPhase[ItemID]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="supplychain-list">

                {supplychainsmanufacturer.map((supplychain, index) => (
                    <motion.div className="supplychain-item" key={index}>
                    {supplychain.name && (<>
                            
                        <motion.img src={supplychain.image} alt={supplychain.name} 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }} />

                        <motion.p 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }}>
                            {supplychain.name}
                        </motion.p>

                        <motion.div className="chronology-track-section">
                            <h2>{supplychain.name} Information</h2>
                                <table className="chronology-table-container" border="1">
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
                    </>
                    )}
                    </motion.div>
                ))}
                   
             </div>

            <motion.div variants={itemVariants} className="back-button">
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
        )
    }

    if (TrackTillDistribute) {
        return (
            <div className="chronology-main-container">
            <h2 className="chronology-section-title">Information</h2>
            <div className="chronology-section">
                <h2>Item Information</h2>

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
                            <tr>
                                <td>{Number(Items[ItemID].id)}</td>
                                <td>{Items[ItemID].name}</td>
                                <td>{Items[ItemID].categories}</td>
                                <td>{Items[ItemID].brand}</td>
                                <td>{Items[ItemID].origin}</td>
                                <td>{Items[ItemID].nutritionInfo}</td>
                                <td>{ItemPhase[ItemID]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="supplychain-list">

                {supplychainsdistributor.map((supplychain, index) => (
                    <motion.div className="supplychain-item" key={index}>
                    {supplychain.name && (<>
                            
                        <motion.img src={supplychain.image} alt={supplychain.name} 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }} />

                        <motion.p 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }}>
                            {supplychain.name}
                        </motion.p>

                        <motion.div className="chronology-track-section">
                            <h2>{supplychain.name} Information</h2>
                                <table className="chronology-table-container" border="1">
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
                    </>
                    )}
                    </motion.div>
                ))}
                   
             </div>

            <motion.div variants={itemVariants} className="back-button">
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
        )
    }

    if (TrackTillRetail) {
        return (
            <div className="chronology-main-container">
            <h2 className="chronology-section-title">Information</h2>
            <div className="chronology-section">
                <h2>Item Information</h2>

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
                            <tr>
                                <td>{Number(Items[ItemID].id)}</td>
                                <td>{Items[ItemID].name}</td>
                                <td>{Items[ItemID].categories}</td>
                                <td>{Items[ItemID].brand}</td>
                                <td>{Items[ItemID].origin}</td>
                                <td>{Items[ItemID].nutritionInfo}</td>
                                <td>{ItemPhase[ItemID]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="supplychain-list">

                {supplychainsretailer.map((supplychain, index) => (
                    <motion.div className="supplychain-item" key={index}>
                    {supplychain.name && (<>
                            
                        <motion.img src={supplychain.image} alt={supplychain.name} 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }} />

                        <motion.p 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }}>
                            {supplychain.name}
                        </motion.p>

                        <motion.div className="chronology-track-section">
                            <h2>{supplychain.name} Information</h2>
                                <table className="chronology-table-container" border="1">
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
                    </>
                    )}
                    </motion.div>
                ))}
                   
             </div>

            <motion.div variants={itemVariants} className="back-button">
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
        )
    }


    if (TrackTillSold) {
        return (
            <div className="chronology-main-container">
            <h2 className="chronology-section-title">Information</h2>
            <div className="chronology-section">
                <h2>Item Information</h2>

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
                            <tr>
                                <td>{Number(Items[ItemID].id)}</td>
                                <td>{Items[ItemID].name}</td>
                                <td>{Items[ItemID].categories}</td>
                                <td>{Items[ItemID].brand}</td>
                                <td>{Items[ItemID].origin}</td>
                                <td>{Items[ItemID].nutritionInfo}</td>
                                <td>{ItemPhase[ItemID]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="supplychain-list">

                {supplychainssold.map((supplychain, index) => (
                    <motion.div className="supplychain-item" key={index}>
                    {supplychain.name && (<>
                            
                        <motion.img src={supplychain.image} alt={supplychain.name} 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }} />

                        <motion.p 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }}>
                            {supplychain.name}
                        </motion.p>

                        <motion.div className="chronology-track-section">
                            <h2>{supplychain.name} Information</h2>
                                <table className="chronology-table-container" border="1">
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

                        
                    </>
                    )}
                    </motion.div>
                    
                ))}
                <h2>Your Item is Sold already</h2>
                   
             </div>

            <motion.div variants={itemVariants} className="back-button">
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
           
            if (Items[ItemID].chronology == 5)
                displayTrackTillSold(true);
          
            else if (Items[ItemID].chronology == 4)
                displayTrackTillRetail(true);
          
            else if (Items[ItemID].chronology == 3)
                displayTrackTillDistribute(true);
            
            else if (Items[ItemID].chronology == 2)
                displayTrackTillManufacture(true);
           
            else if (Items[ItemID].chronology == 1)
                displayTrackTillFarmer(true);
            else
                displayTrackTillOrdered(true);

        }
    }

    return (
        <div className="track-main-container">
            <h2 className="track-section-title">Tracking</h2>
             <div className="current-address">
                    <label htmlFor="currentAddress">Current Address: </label>
                    <span>{currentaccount}</span>
            </div>

           
            <div className="track-section">
                <h2>Tracking</h2>

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

export default Track;