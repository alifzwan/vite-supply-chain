import "./project.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"

import ProjectSideBar from "./projectsidebar/projectSideBar/ProjectSideBar"

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

const Project = () => {

  const navigate = useNavigate()

  const redirect_to_architecture = () => {
      navigate('/architecture')
  }
  const redirect_to_blockchain = () => {
    navigate('/blockchain')
}


  return (
    <div className="project-main-container">
        <div className="project-menu-bar">
          <ProjectSideBar />
        </div> 

        <div className="project-main-section">
            <div className="project-section-title">Food Supply Chain Management</div>
        
            <div className="project-content">
                <div className="project-section">
                    <p className="description">
                        <b>Food supply chain</b> is the process that all food products go through, 
                        from production all the way through to consumption. The food supply chain is, thus,
                        a hugely important step in how you safely consume and understand the food you eat. 
                    </p>
                </div>  

                <div className="project-back-button-container">
                        <motion.div variants={itemVariants} className="project-back-button">
                                <motion.button className="started"
                                    variants={itemVariants}
                                   
                                    onClick={redirect_to_architecture}
                                >
                                    Get Started
                                </motion.button>

                                <motion.button className="learn"
                                    variants={itemVariants}
                                    
                                    onClick={redirect_to_blockchain}
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

export default Project;
