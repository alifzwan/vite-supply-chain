
import './blockchaindecentralization.scss';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import React from 'react'
import BlockchainSideBar from '../blockchainsidebar/blockchainSideBar/BlockchainSideBar';

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

const BlockchainDecentralization = () => {
    const navigate = useNavigate()

    const redirect_to_blockchain = () => {
      navigate('/blockchain')
    }



    return (
        <div className="decentralized-main-container">
            <div className="project-menu-bar">
                <BlockchainSideBar />
            </div> 

            <div className="main-section">
                <div className="decentralized-section-title">Blockchain Decentralization</div>
                <div className="decentralized-content">
                    <div className="decentralized-section">
                       <p className="description">A blockchain allows the data in a database to be spread out among several network nodes—computers or devices running software for the blockchain—at various locations. This not only creates redundancy but maintains the fidelity of the data. For example, if someone tries to alter a record at one instance of the database, the other nodes would prevent it from happening. This way, no single node within the network can alter information held within it.
                       </p>
                       <p className="description">Because of this distribution—and the encrypted proof that work was done—the information and history (like the transactions in cryptocurrency) are irreversible. Such a record could be a list of transactions (such as with a cryptocurrency), but it also is possible for a blockchain to hold a variety of other information like legal contracts, state identifications, or a company’s inventory.

                       </p>
                      
                       
                    </div>
                    <div className="decentralized-back-button-container">
                        <motion.div variants={itemVariants} className="decentralized-back-button">
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={redirect_to_blockchain}
                            >
                                Back to Blockchain
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockchainDecentralization;