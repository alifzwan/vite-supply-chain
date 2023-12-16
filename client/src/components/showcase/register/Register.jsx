import './register.scss';
import { motion } from "framer-motion";
import ProjectSideBar from '../project/projectsidebar/projectSideBar/ProjectSideBar';
import "ldrs/cardio"; 
import SupplyChainABI from "/src/artifacts/SupplyChain.json"
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Web3 from "web3";

/* React Hook

    - React Hooks are functions that let you use state and other React features in functional components.

    Most Common Hook:

      useEffect 
      useState 


    --> useState

      - a Hook that allows you to add state to your functional components. 

      It takes an initial state as an argument and returns an array with two elements: 
       - current state value  
       - a function that lets you update it.  


       For example:

        import React, { useState } from 'react';

        const Counter = () => {

            // Declare a state variable named "count" with an initial value of 0
            const [count, setCount] = useState(0);

            return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
            );
        };

    --> useEffect
        
        - Hook that performs side effects in your components.

        For example:

        import React, { useState, useEffect } from 'react';

        const ExampleComponent = () => {
            const [data, setData] = useState(null);

            useEffect(() => {
                // This code will run after the component mounts
                // and whenever 'data' changes

                // Example: Fetch data from an API

                fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => setData(data));

                // Cleanup function (runs before the component unmounts or before the effect runs again)
                return () => {
                    
                // Cleanup logic here
                };
            }, [data]);  // Dependency array: this effect will run whenever 'data' changes
        };
*/ 



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

const Register = () => {

    const navigate = useNavigate()

    useEffect(() => {
        loadWeb3();
    }, [])

    useEffect(() => {
        const delay = 2000;
        const timeoutId = setTimeout(() => {
            loadBlockchaindata();
        }, delay);
            return () => clearTimeout(timeoutId);
    },[])

    
    const [currentaccount     , setCurrentaccount     ]   = useState("");
    const [loader             , setloader             ]   = useState(true);
    const [SupplyChain        , setSupplyChain        ]   = useState();

    
    const [FarmerName         , setFarmerName         ]   = useState();
    const [ManufacturerName   , setManufacturerName   ]   = useState();
    const [DistributorName    , setDistributorName    ]   = useState();
    const [RetailerName       , setRetailerName       ]   = useState();


    const [FarmerOrigin       , setFarmerOrigin       ]   = useState();
    const [ManufacturerOrigin , setManufacturerOrigin ]   = useState();
    const [DistributorOrigin  , setDistributorOrigin  ]   = useState();
    const [RetailerOrigin     , setRetailerOrigin     ]   = useState();


    const [FarmerAddress      , setFarmerAddress      ]   = useState();
    const [ManufacturerAddress, setManufacturerAddress]   = useState();
    const [DistributorAddress , setDistributorAddress ]   = useState();
    const [RetailerAddress    , setRetailerAddress    ]   = useState();


    const [Farmer             , setFarmer             ]   = useState();
    const [Manufacturer       , setManufacturer       ]   = useState();
    const [Distributor        , setDistributor        ]   = useState();
    const [Retailer           , setRetailer           ]   = useState();

    const loadWeb3 = async () => {
        if (window.web3) {
            window.web3 = new Web3(window.ethereum);
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


            const farmerCount = await supplychain.methods.farmerCount().call();  
            const farmer = {}; 
            for (i = 0; i < farmerCount; i++) {  
                farmer[i] = await supplychain.methods.farmerInfo(i + 1).call();
            }
            setFarmer(farmer);


            const manufacturerCount = await supplychain.methods.manufacturerCount().call();
            const manufacture = {};
            for (i = 0; i < manufacturerCount; i++) {
                manufacture[i] = await supplychain.methods.manufacturerInfo(i + 1).call();
            }
            setManufacturer(manufacture);



            const distributorCount = await supplychain.methods.distributorCount().call();
            const distribute = {};
            for (i = 0; i < distributorCount; i++) {
                distribute[i] = await supplychain.methods.distributorInfo(i + 1).call();
            }
            setDistributor(distribute);



            const retailerCount = await supplychain.methods.retailerCount().call();
            const retailer = {};
            for (i = 0; i < retailerCount; i++) {
                retailer[i] = await supplychain.methods.retailerInfo(i + 1).call();
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

    const redirect_to_project = () => {
        navigate('/project')
    }

    const adminAddressFarmer = (event) => {
        setFarmerAddress(event.target.value);
    }
    const adminOriginFarmer = (event) => {
        setFarmerOrigin(event.target.value);
    }
    const adminNameFarmer = (event) => {
        setFarmerName(event.target.value);
    }


    const adminAddressManufacturer = (event) => {
        setManufacturerAddress(event.target.value);
    }
    const adminOriginManufacturer = (event) => {
        setManufacturerOrigin(event.target.value);
    }
    const adminNameManufacturer = (event) => {
        setManufacturerName(event.target.value);
    }


    const adminAddressDistributor = (event) => {
        setDistributorAddress(event.target.value);
    }
    const adminOriginDistributor = (event) => {
        setDistributorOrigin(event.target.value);
    }
    const adminNameDistributor = (event) => {
        setDistributorName(event.target.value);
    }

    const adminAddressRetailer = (event) => {
        setRetailerAddress(event.target.value);
    }
    const adminOriginRetailer = (event) => {
        setRetailerOrigin(event.target.value);
    }
    const adminNameRetailer = (event) => {
        setRetailerName(event.target.value);
    }


    const adminRegFarmer = async (event) => {
        event.preventDefault();
        try {
            var receipt = await SupplyChain.methods.regFarmer(FarmerAddress, FarmerName, FarmerOrigin).send({ from: currentaccount });
            if (receipt) {
                await loadBlockchaindata();
            }
        }
        catch (err) {
            console.error("Error during registration: ", err)
            alert("An error occured!!!")
        }
    }

    const adminRegManufacturer = async (event) => {
        event.preventDefault();
        try {
            var receipt = await SupplyChain.methods.regManufacturer(ManufacturerAddress, ManufacturerName, ManufacturerOrigin).send({ from: currentaccount });
            if (receipt) {
                await loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }

    const adminRegDistributor = async (event) => {
        event.preventDefault();
        try {
            var receipt = await SupplyChain.methods.regDistributor(DistributorAddress, DistributorName, DistributorOrigin).send({ from: currentaccount });
            if (receipt) {
                await loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }

    const adminRegRetailer = async (event) => {
        event.preventDefault();
        try {
            var receipt = await SupplyChain.methods.regRetailer(RetailerAddress, RetailerName, RetailerOrigin).send({ from: currentaccount });
            if (receipt) {
                await loadBlockchaindata();
            }
        }
        catch (err) {
            alert("An error occured!!!")
        }
    }


    
    return (
        <div className="reg-main-container">

                <div className="menu-bar">
                    <ProjectSideBar />
                </div>  

                

                <div className="main-section">
                   
                    
                    <div className="reg-section-title">Registration</div>

                    <div className="register-content">


                        <div className="stakeholder-section">
                            <h2>Farmer</h2>
                            <form onSubmit={adminRegFarmer}>
                            <motion.div className="input-container" variants={variants}>
                                <motion.div variants={itemVariants}>
                                    <label >Ethereum Address:</label><br />
                                    <input type="text" onChange={adminAddressFarmer} placeholder="Ethereum Address" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label>Farmer Name:</label><br />
                                    <input type="text" onChange={adminNameFarmer} placeholder="Farmer Name" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label>Based In:</label><br />
                                    <input type="text" onChange={adminOriginFarmer} placeholder="Based In" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants} className="register-button">
                                    <motion.button
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onSubmit={adminRegFarmer}
                                    >
                                        Register
                                    </motion.button>
                                </motion.div>
                            </motion.div>

                            </form>
                            
                            <table className="reg-table-container" border="1" >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Based In</th>
                                            <th>Contract Address</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Object.keys(Farmer).map(function (key) {
                                            return (
                                                <tr key={key}>
                                                    <td>{Number(Farmer[key].id)}</td>
                                                    <td>{Farmer[key].name}</td>
                                                    <td>{Farmer[key].location}</td>
                                                    <td>{Farmer[key].addr}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>

                            </table>

                        </div>


                        <div className="stakeholder-section">
                            <h2>Manufacturer</h2>
                            <form onSubmit={adminRegManufacturer}>
                                <motion.div className="input-container" variants={variants}>
                                <motion.div variants={itemVariants}>
                                    <label>Ethereum Address:</label><br />
                                    <input type="text" onChange={adminAddressManufacturer} placeholder="Ethereum Address" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label >Manufacturer Name:</label><br />
                                    <input type="text" onChange={adminNameManufacturer} placeholder="Manufacturer Name" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label>Based In:</label><br />
                                    <input type="text" onChange={adminOriginManufacturer} placeholder="Based In" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants} className="register-button">
                                    <motion.button
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onSubmit={adminRegManufacturer}
                                    >
                                        Register
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                            </form>
                            

                            <table className="reg-table-container" border="1" >

                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Based In</th>
                                            <th>Contract Address</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Object.keys(Manufacturer).map(function (key) {
                                            return (
                                                <tr key={key}>
                                                    <td>{Number(Manufacturer[key].id)}</td>
                                                    <td>{Manufacturer[key].name}</td>
                                                    <td>{Manufacturer[key].location}</td>
                                                    <td>{Manufacturer[key].addr}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>

                            </table>

                        </div>


                        <div className="stakeholder-section">
                            <h2>Distributor</h2>
                            <form onSubmit={adminRegDistributor}>
                                <motion.div className="input-container" variants={variants}>

                                <motion.div variants={itemVariants}>
                                    <label>Ethereum Address:</label><br />
                                    <input type="text" onChange={adminAddressDistributor} placeholder="Ethereum Address" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label>Distributor Name:</label><br />
                                    <input type="text" onChange={adminNameDistributor} placeholder="Distributor Name" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label>Based In:</label><br />
                                    <input type="text"  onChange={adminOriginDistributor} placeholder="Based In" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants} className="register-button">
                                    <motion.button
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onSubmit={adminRegDistributor}
                                    >
                                        Register
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                            </form>
                            

                                <table className="reg-table-container" border="1" >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Based In</th>
                                            <th>Contract Address</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Object.keys(Distributor).map(function (key) {
                                            return (
                                                <tr key={key}>
                                                    <td>{Number(Distributor[key].id)}</td>
                                                    <td>{Distributor[key].name}</td>
                                                    <td>{Distributor[key].location}</td>
                                                    <td>{Distributor[key].addr}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                        </div>


                        <div className="stakeholder-section">
                            <h2>Retailer</h2>
                            <form onSubmit={adminRegRetailer}>
                                <motion.div className="input-container" variants={variants}>
                                <motion.div variants={itemVariants}>
                                    <label>Ethereum Address:</label><br />
                                    <input type="text" onChange={adminAddressRetailer} placeholder="Ethereum Address" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label>Retailer Name:</label><br />
                                    <input type="text" onChange={adminNameRetailer} placeholder="Retailer Name" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label>Based In:</label><br />
                                    <input type="text" onChange={adminOriginRetailer} placeholder="Based In" required/><br />
                                </motion.div>

                                <motion.div variants={itemVariants} className="register-button">
                                    <motion.button
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onSubmit={adminRegRetailer}
                                    >
                                        Register
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                            </form>
                            

                        
                            <table className="reg-table-container" border="1" >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Based In</th>
                                        <th>Contract Address</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {Object.keys(Retailer).map(function (key) {
                                        return (
                                            <tr key={key}>
                                                <td>{Number(Retailer[key].id)}</td>
                                                <td>{Retailer[key].name}</td>
                                                <td>{Retailer[key].location}</td>
                                                <td>{Retailer[key].addr}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                     

                        <div className="reg-back-button-container">
                                <motion.div variants={itemVariants} className="reg-back-button">
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

export default Register;