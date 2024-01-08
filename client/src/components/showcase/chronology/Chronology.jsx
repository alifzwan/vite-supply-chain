import "./chronology.scss";
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

const Chronology = () => {

  const navigate = useNavigate()

  const redirect_to_project = () => {
      navigate('/project')
  }

  return (
    <div className="flow-main-container">
        <div className="project-menu-bar">
          <ProjectSideBar />
        </div> 

        <div className="flow-main-section">
            <div className="flow-section-title">Tasks Description</div>
            <div className="flow-content">
                <ul className="tasklist">
                    <a href="/register"><li>Punch In: <p>NGO/GLC register every Stakeholders</p></li></a>
                    <a href="/order"><li>Registration: <p>NGO/GLC Register the Product</p></li></a>
                    <a href="/admin"><li>Administration: <p>NGO/GLC will change the PHASE of the product (E.g. from Poultry to Slaughterhouse)</p></li></a>
                    <a href="/slaughterhouse"><li>Slaughter Verification: <p>Slaughterhouse conduct slaughter verification</p></li></a>
                    <a href="/verify"><li>Halal Verification: <p>Halal Verifier (JAKIM) verify the Halal Status</p></li></a>
                    <a href="/track"><li>Track Product: <p>Tracking the Product PHASE</p></li></a>
                    <a href="/info"><li>Product Info: <p>Retrieve the Product information</p></li></a>
                </ul>
            </div>
            <div className="flow-back-button-container">
                <motion.div className="flow-back-button">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={redirect_to_project}
                        >
                        Back to Project
                        </motion.button>
                </motion.div>
            </div>
        </div>
    </div>
  );
}

export default Chronology;
