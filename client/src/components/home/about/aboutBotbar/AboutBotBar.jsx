import Sidebar from "../../sidebar/Sidebar";
import "./aboutbotbar.scss";
import HomeLinksFramework from "../../homepage/homelinks/HomeLinkFramework";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"

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




const AboutBotBar = () => {
  const navigate = useNavigate()

  // const redirect_to_projectoverview = () => {
  //   navigate('/project')
  // }
  const redirect_to_login = () => {
    navigate('/login')
  }


  return (
    <div className="navbar">
      <Sidebar/>
      <div className="redirect-to-project-button">
          <motion.a className="project-work-button">
                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={redirect_to_login}
                >
                   See How My Project Work
                </motion.button>
          </motion.a>
          <motion.a className="framework-work-button">
                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    
                >
                   <HomeLinksFramework />
                </motion.button>
          </motion.a>
        
      </div>
    </div>
  );
};

export default AboutBotBar;
