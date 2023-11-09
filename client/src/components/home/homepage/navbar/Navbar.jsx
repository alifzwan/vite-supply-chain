import Sidebar from "../../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";


import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/Github";


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
          <a href="https://github.com/alifzwan">
            <GithubIcon style={{fontSize: 30}}></GithubIcon>
          </a> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
