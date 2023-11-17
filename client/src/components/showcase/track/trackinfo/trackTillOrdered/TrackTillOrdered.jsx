
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

const TrackTillOrdered = () => {
    const navigate = useNavigate()

    const redirect_to_project = () => {
        navigate('/project')
    }
    const redirect_to_track = () => {
        navigate('/track')
    }
    
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

export default TrackTillOrdered;