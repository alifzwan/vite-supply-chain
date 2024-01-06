import "./blockchain.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"

import BlockchainSideBar from "./blockchainsidebar/blockchainSideBar/BlockchainSideBar"

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

const Blockchain = () => {

  const navigate = useNavigate()

  const redirect_to_project = () => {
      navigate('/project')
  }
  const redirect_to_blockchainwork = () => {
    navigate('/blockchainwork')
}


  return (
    <div className="blockchain-main-container">
        <div className="menu-bar">
          <BlockchainSideBar />
        </div> 

        <div className="blockchain-main-section">
            <div className="blockchain-section-title">Blockchain</div>
        
            <div className="blockchain-content">
                <div className="blockchain-section">
                    <p className="description"><b>Blockchain</b> is a decentralized and distributed digital ledger technology that allows multiple parties to record and verify transactions in a secure manner without the need for the central certifying authority</p>
                </div>  

                <div className="blockchain-back-button-container">
                        <motion.div variants={itemVariants} className="blockchain-back-button">
                                <motion.button className="started"
                                    variants={itemVariants}
                                   
                                    onClick={redirect_to_blockchainwork}
                                >
                                    How it works?
                                </motion.button>

                                <motion.button className="learn"
                                    variants={itemVariants}
                                    
                                    onClick={redirect_to_project}
                                >
                                    Back to Home
                                </motion.button>
                        </motion.div>
                    </div>
            </div>
        </div>

        
    </div>
  );
}

export default Blockchain;
