
import './order.scss';
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

const Order = () => {
    return (
        <div className="ord-main-container">
            <h2 className="ord-section-title">Ordering</h2>
             <div className="current-address">
                    <label htmlFor="currentAddress">Current Address: </label>
                    <span>Your Current Address Here</span>
            </div>

           
            <div className="ord-section">
                <h2>Ordering</h2>
            
                <motion.div className="input-container" variants={variants}>
                    <motion.div variants={itemVariants}>
                        <label htmlFor="ethAddress1">Name:</label><br />
                        <input type="text" id="ethAddress1" name="ethAddress1" placeholder="Name" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="farmerName1">Categories:</label><br />
                        <input type="text" id="farmerName1" name="farmerName1" placeholder="Categories" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="basedIn1">Brand:</label><br />
                        <input type="text" id="basedIn1" name="basedIn1" placeholder="Brand" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="basedIn1">Based In:</label><br />
                        <input type="text" id="basedIn1" name="basedIn1" placeholder="Based In" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="basedIn1">Description</label><br />
                        <input type="text" id="basedIn1" name="basedIn1" placeholder="Description" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants} className="order-button">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Order
                        </motion.button>
                    </motion.div>
                </motion.div>

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
        </div>
    );
}

export default Order;