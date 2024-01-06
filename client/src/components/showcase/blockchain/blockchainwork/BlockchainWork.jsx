
import './blockchainwork.scss';
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

const BlockchainWork = () => {
    const navigate = useNavigate()

    const redirect_to_blockchain = () => {
      navigate('/blockchain')
    }



    return (
        <div className="work-main-container">
            <div className="project-menu-bar">
                <BlockchainSideBar />
            </div> 

            <div className="main-section">
                <div className="work-section-title">How Does a Blockchain Work?</div>
                <div className="work-content">
                    <div className="work-section">
                       <p className="description">A blockchain is <b>composed of data sets consists of a chain of data package (blocks)</b>, with each block carrying multiple transactions. <b>It expanded with each of new block</b> and thus represent a comprehensive ledger of transaction history. All the blocks then will be validated using cryptographic method. In addition to the transaction data, <b>each block within a blockchain also contains a timestamp, the hash value of the preceding block, and a nonce</b>   - an arbitrary numerical value utilised to authenticate the hash.

                       </p>
                       <img src="/blockchainarch.png"/>
                       <span className="reference"> Figure 1:  Example of a blockchain  
                            <a href="https://www.henrylab.net/wp-content/uploads/2017/10/blockchain.pdf" className='work-link' target="_blank" rel="noopener noreferrer"> 
                             (Zheng et al. 2016)
                            </a>
                       </span>
                    </div>
                    <div className="work-back-button-container">
                        <motion.div variants={itemVariants} className="work-back-button">
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

export default BlockchainWork;