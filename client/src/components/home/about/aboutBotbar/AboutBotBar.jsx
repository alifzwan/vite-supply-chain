import Sidebar from "../../sidebar/Sidebar";
import "./aboutbotbar.scss";
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

  const redirect_to_projectoverview = () => {
    navigate('/project')
  }


  return (
    <div className="navbar">
      <Sidebar/>
      <div className="redirect-to-project-button">
          <motion.a>
                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={redirect_to_projectoverview}
                >
                   See How My Project Work
                </motion.button>
          </motion.a>
        
      </div>
    </div>
  );
};

export default AboutBotBar;
