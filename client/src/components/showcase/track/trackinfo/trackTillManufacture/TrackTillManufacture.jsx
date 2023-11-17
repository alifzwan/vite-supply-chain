
import React from "react";
import './tracktillfarmer.scss';
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

const TrackTillManufacturer = () => {
    const navigate = useNavigate()

    const redirect_to_project = () => {
        navigate('/project')
    }
    const redirect_to_track = () => {
        navigate('/track')
    }

    const supplychains = [

        { name: "Farmer"      , image: "/farmer.svg"},
        { image: "/arrow.png"},
    
        { name: "Manufacturer", image: "/manufacturer.svg"}, 
        
      ];

      const chronologyTable = (name) => {
        switch (name) {
          case "Farmer":
            return (
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Farmer 1</td>
                  <td>Malaysia</td>
                </tr>
              </tbody>
            );
          case "Manufacturer":
            return (
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Manufacturer 1</td>
                  <td>Malaysia</td>
                </tr>
              </tbody>
            );
          default:
            return null;
        }
      };  

   
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





            
            <div className="supplychain-list">

                {supplychains.map((supplychain, index) => (
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
                                    {chronologyTable(supplychain.name)}
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
                            onClick={redirect_to_track}
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
    );
}

export default TrackTillManufacturer;