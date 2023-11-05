import "./hero.scss";
import { motion } from "framer-motion";
import HomeLinksProject from "../homelinks/HomeLinkProject";
import HomeLinksAbout from "../homelinks/HomeLinkAbout";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imageVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "5%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 5,
    },
  },
};


const Hero = () => {

  

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Muhammad Alif Zakwan Bin Mohd As'ad
            </motion.h2>

          <motion.h1 variants={textVariants}>
            Innovating Food Supply Chain: Smart Contract and Consensus Algorithm in Blockchain
          </motion.h1>

          <motion.div variants={textVariants} className="hero-buttons">


            <motion.button 
            variants={textVariants} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>

            <HomeLinksProject />
            </motion.button>


            <motion.button 
            variants={textVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>

            <HomeLinksAbout />
            </motion.button>
          </motion.div>


          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      <motion.div className="imageContainer" 
        variants={imageVariants}  
        initial="initial"
        animate="animate">

        <img src="/blockchain.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
