import "./admin.scss";
import { motion } from "framer-motion";


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



const Admin = () => {
return(
<div className="admin-main-container">
            <h2 className="admin-section-title">Administer</h2>

             <div className="current-address">
                    <label htmlFor="currentAddress">Current Address:</label>
                    <span>Your Current Address Here</span>
            </div>

            <table className="table-container" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Categories</th>
                        <th>Brand</th>
                        <th>Based In</th>
                        <th>Description</th>
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
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Maggi</td>
                        <td>Noodles</td>
                        <td>Mamee</td>
                        <td>Malaysia</td>
                        <td>High in Sodium</td>
                    </tr>
                </tbody>
            </table>
            

          
                <div className="admin-grid">
                    <div className="admin-section">
                        <h2>Farmer</h2>
                        <motion.div className="input-container" variants={variants}>

                            <motion.div variants={itemVariants}>
                                <input type="text" id="ethAddress1" name="ethAddress1" placeholder="Enter ID" /><br />
                            </motion.div>

                            <motion.div variants={itemVariants} className="admin-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Plug In
                                </motion.button>
                            </motion.div>
                    
                        </motion.div>


                    </div>

                    <div className="admin-section">
                        <h2>Manufacturer</h2>
                        <motion.div className="input-container" variants={variants}>
                            <motion.div variants={itemVariants}>
                                <input type="text" id="ethAddress1" name="ethAddress1" placeholder="Enter ID" /><br />
                            </motion.div>

                            <motion.div variants={itemVariants} className="admin-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Plug In
                                </motion.button>
                            </motion.div>
                    
                        </motion.div>


                    </div>
            
                    <div className="admin-section">
                        <h2>Distributor</h2>

                        <motion.div className="input-container" variants={variants}>
                            <motion.div variants={itemVariants}>
                                <input type="text" id="ethAddress1" name="ethAddress1" placeholder="Enter ID" /><br />
                            </motion.div>

                            <motion.div variants={itemVariants} className="admin-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Plug In
                                </motion.button>
                            </motion.div>
                    
                        </motion.div>
                    </div>

                    <div className="admin-section">
                    <h2>Retailer</h2>
                    <motion.div className="input-container" variants={variants}>
                            <motion.div variants={itemVariants}>
                                <input type="text" id="ethAddress1" name="ethAddress1" placeholder="Enter ID" /><br />
                            </motion.div>

                            <motion.div variants={itemVariants} className="admin-button">
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Plug In
                                </motion.button>
                            </motion.div>
                    
                        </motion.div>

                    </div>
                    </div>
                    </div>
            )
        }
    
export default Admin