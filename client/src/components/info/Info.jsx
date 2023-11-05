
import './info.scss';
import { motion } from "framer-motion";
import InfoLinks from "./infoLinks/InfoLinks";


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

const Info = () => {
    return (
        <div className="info-main-container">
            <h2 className="info-section-title">Information</h2>
            <div className="info-section">
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

                <motion.div className="input-container" variants={variants}>
                    <motion.div variants={itemVariants} className="info-button">
                        <motion.button 
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                             <InfoLinks />
                        </motion.button>

                    </motion.div>
                    
                </motion.div>
            </div>
        </div>
    );
}

export default Info;