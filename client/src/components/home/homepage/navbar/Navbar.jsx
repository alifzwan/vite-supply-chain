import Sidebar from "../../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";



import GitHubIcon from '@mui/icons-material/GitHub';


const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Final Year Project
        </motion.span>
        <div className="social">
          <a href="https://github.com/alifzwan/React-Supply-Chain" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{fontSize: 30}}></GitHubIcon>
          </a> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
