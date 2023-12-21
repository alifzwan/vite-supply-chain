import "./architecture.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"

import ProjectSideBar from "../project/projectsidebar/projectSideBar/ProjectSideBar";

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

const Architecture = () => {

  const navigate = useNavigate()

  const redirect_to_project = () => {
      navigate('/project')
  }


  return (
    <div className="architecture-main-container">
        <div className="project-menu-bar">
          <ProjectSideBar />
        </div> 

        <div className="architecture-main-section">
            <div className="architecture-section-title">Blockchain</div>
        
            <div className="architecture-content">
                <div className="architecture-section">
                    <p className="description"><b>Blockchain</b> is a decentralized and distributed digital ledger technology that allows multiple parties to record and verify transactions in a secure manner without the need for the central certifying authority</p>
                </div>  

                <div className="architecture-back-button-container">
                        <motion.div variants={itemVariants} className="architecture-back-button">
                                <motion.button className="started"
                                    variants={itemVariants}
                                   
                                    onClick={redirect_to_project}
                                >
                                    Get Started
                                </motion.button>

                                <motion.button className="learn"
                                    variants={itemVariants}
                                    
                                    onClick={redirect_to_project}
                                >
                                    Learn Blockchain
                                </motion.button>
                        </motion.div>
                    </div>
            </div>
        </div>

        
    </div>
  );
}

export default Architecture;
