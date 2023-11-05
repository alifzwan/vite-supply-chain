
import './track.scss';
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

const Track = () => {
    return (
        <div className="track-main-container">
            <h2 className="track-section-title">Tracking</h2>
             <div className="current-address">
                    <label htmlFor="currentAddress">Current Address: </label>
                    <span>Your Current Address Here</span>
            </div>

           
            <div className="track-section">
                <h2>Tracking</h2>

                <div className="table-container">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Based In</th>
                                <th>Current Stage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mister Potato</td>
                                <td>Malaysia</td>
                                <td>Ordered</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Maggi</td>
                                <td>Malaysia</td>
                                <td>Ordered</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <motion.div className="input-container" variants={variants}>
                    <motion.div variants={itemVariants}>
                        <input type="text" id="ethAddress1" name="ethAddress1" placeholder="Enter ID" /><br />
                    </motion.div>

                    <motion.div variants={itemVariants} className="track-button">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Track
                        </motion.button>
                    </motion.div>
                    
                </motion.div>
            </div>
        </div>
    );
}

export default Track;