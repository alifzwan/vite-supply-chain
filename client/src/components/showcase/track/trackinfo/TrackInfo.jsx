
import React from "react";
import './test.scss';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"

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

const Test = () => {
    const navigate = useNavigate()

    const redirect_to_project = () => {
        navigate('/project')
    }

    const redirect_to_tracktillOrdered = () => {
        navigate('/project')
    }

    const redirect_to_tracktillFarmer = () => {
        navigate('/project')
    }

    const redirect_to_tracktillManufacture = () => {
        navigate('/project')
    }

    const redirect_to_tracktillDistribute = () => {
        navigate('/project')
    }

    const redirect_to_tracktillRetail = () => {
        navigate('/project')
    }

    const redirect_to_tracktillSold = () => {
        navigate('/project')
    }

   

    
    const supplychains = [

        { name: "Farmer"      , image: "/farmer.svg"      , action:  redirect_to_registration},
        { image: "/arrow.png"},
    
        { name: "Manufacturer", image: "/manufacturer.svg", action:  redirect_to_ordering},
        { image: "/arrow.png"},
    
        { name: "Distributor" , image: "/distributor.svg" , action:  redirect_to_tracking},
        { image: "/arrow.png"},
    
        { name: "Retailer"    , image: "/retailer.svg"    , action:  redirect_to_information},
      ];



    

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
                                <td>1</td>
                                <td>Mister Potato</td>
                                <td>Snacks</td>
                                <td>Mamee</td>
                                <td>Malaysia</td>
                                <td>High in Protein</td>
                                <td>Ordered</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Maggi</td>
                                <td>Noodles</td>
                                <td>Mamee</td>
                                <td>Malaysia</td>
                                <td>High in Sodium</td>
                                <td>Ordered</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="chronology-info">
                {supplychains.map((supplychains, index) => (
                    <motion.div className="chronology-item">
                        key={index}

                        <motion.img src={supplychains.image} alt={supplychains.name}
                            whileHover={{ scale: 1.1}}
                            whileTap={{ scale: 0.95 }} />
                            
                            {supplychains.name && (
                                <motion.p 
                                whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.95 }}>
                                {supplychain.name}
                                    
                                </motion.p>
                            )}
                    </motion.div>
                ))}
            </div>

            <div className="chronology-track-section">

                <h2>Your Item has already ordered, Please wait</h2>

            </div>


            <div className="chronology-track-section">

                <h2>Farmer Information</h2>

                <table className="chronology-table-container" border="1" >
                         <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Based In</th>
                            </tr>
                        </thead>

                        <tbody>
                                <td>1</td>
                                <td>Farmer 1</td>
                                <td>Malaysia</td>
                        </tbody>
                </table>
            </div>

            <div className="chronology-track-info-section">
                <h2>Manufacturer Information</h2>
                <table className="chronology-table-container" border="1" >

                         <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Based In</th>
                            </tr>
                        </thead>

                        <tbody>
                                <td>1</td>
                                <td>Manufacturer 1</td>
                                <td>Malaysia</td>
                        </tbody>
                </table>
            </div>


            <div className="chronology-track-info-section">
                <h2>Distributer Information</h2>
                <table className="chronology-table-container" border="1" >

                         <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Based In</th>
                            </tr>
                        </thead>

                        <tbody>
                                <td>1</td>
                                <td>Distributer 1</td>
                                <td>Malaysia</td>
                        </tbody>
                </table>
            </div>

            <div className="chronology-track-info-section">
                <h2>Retailer Information</h2>
                <table className="chronology-table-container" border="1" >

                         <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Based In</th>
                            </tr>
                        </thead>

                        <tbody>
                                <td>1</td>
                                <td>Retailer 1</td>
                                <td>Malaysia</td>
                        </tbody>
                </table>
            </div>

            <div className="chronology-track-section">

                <h2>Your Item has been sold</h2>

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

export default Test;