import './register.scss';
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

const Register = () => {
    return (
        <div className="reg-main-container">
            <h2 className="reg-section-title">Registration</h2>
             <div className="current-address">
                    <label htmlFor="currentAddress">Current Address:</label>
                    <span>Your Current Address Here</span>
            </div>

            <div className="reg-section">
                <h2>Farmer</h2>
                <form action="">
                <motion.div className="input-container" variants={variants}>
                    <motion.div variants={itemVariants}>
                        <label htmlFor="ethAddress1">Ethereum Address:</label><br />
                        <input type="text" id="ethAddress1" name="ethAddress1" placeholder="Ethereum Address" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="farmerName1">Farmer Name:</label><br />
                        <input type="text" id="farmerName1" name="farmerName1" placeholder="Farmer Name" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="basedIn1">Based In:</label><br />
                        <input type="text" id="basedIn1" name="basedIn1" placeholder="Based In" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants} className="register-button">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register
                        </motion.button>
                    </motion.div>
                </motion.div>

                </form>
               
                <table className="reg-table-container" border="1" >

                         <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Based In</th>
                                <th scope="col">Contract Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                        </tbody>

                </table>

            </div>


            <div className="reg-section">
                <h2>Manufacturer</h2>
                <motion.div className="input-container" variants={variants}>
                    <motion.div variants={itemVariants}>
                        <label htmlFor="ethAddress1">Ethereum Address:</label><br />
                        <input type="text" id="ethAddress1" name="ethAddress1" placeholder="Ethereum Address" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="farmerName1">Farmer Name:</label><br />
                        <input type="text" id="farmerName1" name="farmerName1" placeholder="Farmer Name" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="basedIn1">Based In:</label><br />
                        <input type="text" id="basedIn1" name="basedIn1" placeholder="Based In" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants} className="register-button">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register
                        </motion.button>
                    </motion.div>
                </motion.div>

                <table className="table-container" border="1" >

                         <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Based In</th>
                                <th scope="col">Contract Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                        </tbody>

                </table>

            </div>


            <div className="reg-section">
                <h2>Distributor</h2>
                <motion.div className="input-container" variants={variants}>
                    <motion.div variants={itemVariants}>
                        <label htmlFor="ethAddress1">Ethereum Address:</label><br />
                        <input type="text" id="ethAddress1" name="ethAddress1" placeholder="Ethereum Address" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="farmerName1">Farmer Name:</label><br />
                        <input type="text" id="farmerName1" name="farmerName1" placeholder="Farmer Name" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="basedIn1">Based In:</label><br />
                        <input type="text" id="basedIn1" name="basedIn1" placeholder="Based In" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants} className="register-button">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register
                        </motion.button>
                    </motion.div>
                </motion.div>

                  <table className="table-container" border="1" >

                         <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Based In</th>
                                <th scope="col">Contract Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                        </tbody>

                </table>


            </div>


            <div className="reg-section">
                <h2>Retailer</h2>
                <motion.div className="input-container" variants={variants}>
                    <motion.div variants={itemVariants}>
                        <label htmlFor="ethAddress1">Ethereum Address:</label><br />
                        <input type="text" id="ethAddress1" name="ethAddress1" placeholder="Ethereum Address" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="farmerName1">Farmer Name:</label><br />
                        <input type="text" id="farmerName1" name="farmerName1" placeholder="Farmer Name" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="basedIn1">Based In:</label><br />
                        <input type="text" id="basedIn1" name="basedIn1" placeholder="Based In" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants} className="register-button">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register
                        </motion.button>
                    </motion.div>
                </motion.div>

                <table className="table-container" border="1" >

                         <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Based In</th>
                                <th scope="col">Contract Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jambu</td>
                                <td>Kedah</td>
                                <td>0xbDB51099d4201D7c7d5d3aE51657eAe12DF6A381</td>
                            </tr>
                        </tbody>

                </table>

            </div>
        </div>
    );
}

export default Register;