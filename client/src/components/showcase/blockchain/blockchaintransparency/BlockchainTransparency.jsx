
import './blockchaintransparency.scss';
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

const BlockchainTransparency = () => {
    const navigate = useNavigate()

    const redirect_to_blockchain = () => {
      navigate('/blockchain')
    }



    return (
        <div className="transparency-main-container">
            <div className="project-menu-bar">
                <BlockchainSideBar />
            </div> 

            <div className="main-section">
                <div className="transparency-section-title">Transparency</div>
                <div className="transparency-content">
                    <div className="transparency-section">
                       <p className="description">Because of the decentralized nature of the Bitcoin blockchain, all transactions can be transparently viewed by either having a personal node or using <a href="https://etherscan.io/">blockchain explorers</a> that allow anyone to see transactions occurring live. Each node has its own copy of the chain that gets updated as fresh blocks are confirmed and added. This means that if you wanted to, you could track a bitcoin wherever it goes. 
                       </p>
                       <p className="description">For example, exchanges have been hacked in the past, resulting in the loss of large amounts of cryptocurrency. While the hackers may have been anonymous—except for their wallet address—the crypto they extracted are easily traceable because the wallet addresses are published on the blockchain.

                       </p>

                       <p className="description">Of course, the records stored in the Bitcoin blockchain (as well as most others) are encrypted. This means that only the person assigned an address can reveal their identity. As a result, blockchain users can remain anonymous while preserving transparency.</p>
                      
                       
                    </div>
                    <div className="transparency-back-button-container">
                        <motion.div variants={itemVariants} className="transparency-back-button">
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

export default BlockchainTransparency;