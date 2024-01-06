
import './blockchainsecure.scss';
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

const BlockchainSecure = () => {
    const navigate = useNavigate()

    const redirect_to_blockchain = () => {
      navigate('/blockchain')
    }



    return (
        <div className="secure-main-container">
            <div className="project-menu-bar">
                <BlockchainSideBar />
            </div> 

            <div className="main-section">
                <div className="secure-section-title">Is Blockchain Secure?</div>
                <div className="secure-content">
                    <div className="secure-section">

                       <p className="description">
                            Blockchain technology achieves decentralized security and trust in several ways. To begin with, new blocks are always stored linearly and chronologically. That is, they are always added to the “end” of the blockchain. After a block has been added to the end of the blockchain, previous blocks cannot be changed. 
                       </p>
                       <p className="description">
                            A change in any data changes the hash of the block it was in. Because each block contains the previous block's hash, a change in one would change the following blocks. The network would reject an altered block because the hashes would not match.
                       </p>

                       <p className="description">
                            For instance, imagine that a hacker runs a node on a blockchain network and wants to alter a blockchain and steal cryptocurrency from everyone else. If they were to change their copy, they would have to convince the other nodes that their copy was the valid one.
                       </p>
                      
                        <p className="description">
                            They would need to control a majority of the network to do this and insert it at just the right moment. This is known as a 51% attack because you need to control more than 50% of the network to attempt it.
                        </p>

                        <p className="description">
                            Timing would be everything in this type of attack—by the time the hacker takes any action, the network is likely to have moved past the blocks they were trying to alter. This is because the rate at which these networks hash is exceptionally fast—the Bitcoin network hashed at 348.1 exahashes per second (18 zeros) on April 21, 2023 . 
                        </p>
                       
                    </div>
                    <div className="secure-back-button-container">
                        <motion.div variants={itemVariants} className="secure-back-button">
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

export default BlockchainSecure;