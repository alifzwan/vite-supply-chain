import Sidebar from "../../sidebar/Sidebar";
import "./aboutnavbar.scss";
import { motion } from "framer-motion";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/Github";

const variants ={
  initial:{ 
    opacity: 0, scale: 0.5 
  },
  animate:{ 
    opacity: 1, scale: 1 
  },
  transition:{ 
    duration: 0.5 
  }
}

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




const AboutNavbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">

        <motion.span 
        variants = {variants} 
        initial  = "initial"
        animate  = "animate"
        transition = "transition"
        >
          About Me
        </motion.span>

        <div className="social">
          <a href="https://github.com/alifzwan">
            <GithubIcon style={{fontSize: 30}}></GithubIcon>
          </a>
          <a href="https://open.spotify.com/user/alifzwan?si=b4ddb3a5803e4954">
            <img src="/spotify.svg" alt="" />
          </a>
          <a href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRmTNmrvgjlGHhNSPWcSzqXSTrDZMzcXRCFrKHNbWPVLPBSGXdGXhnxTgvZfHVgwBfldHtl">
            <EmailRoundedIcon style={{fontSize: 30}}></EmailRoundedIcon>
          </a>
          <a href="https://www.linkedin.com/in/alif-zakwan-965066257/">
            <LinkedInIcon style={{fontSize: 30}}></LinkedInIcon>
          </a>

          <motion.a href="Alif Zakwan CV.pdf" download>
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download CV
                        </motion.button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default AboutNavbar;
