import React from "react";
import "./project.scss";
import { motion } from "framer-motion";
import ProjectLinksReg from "./projectlinks/ProjectLinksReg"
import ProjectLinksOrd from "./projectlinks/ProjectLinksOrd"
import ProjectLinksInfo from "./projectlinks/ProjectLinksInfo"
import ProjectLinksTrack from "./projectlinks/ProjectLinksTrack"
import ProjectLinksAdmin from "./projectlinks/ProjectLinksAdmin"

const Variants = {
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
};


const Project = () => {
  const supplychains = [
    { name: "Farmer"      , image: "/farmer.svg"      , action:  <ProjectLinksReg />},
    { image: "/arrow.png"},

    { name: "Manufacturer", image: "/manufacturer.svg", action:  <ProjectLinksOrd /> },
    { image: "/arrow.png"},

    { name: "Distributor" , image: "/distributor.svg" , action:  <ProjectLinksTrack />},
    { image: "/arrow.png"},

    { name: "Retailer"    , image: "/retailer.svg"    , action:  <ProjectLinksInfo />},
  ];

  return (
    <motion.div className="supplychain"
          variants={Variants} 
          initial="initial"
          animate="animate" >

      <h2 className="section-title">Supply Chain Flow</h2>


      <div className="supplychain-list">
        {supplychains.map((supplychain, index) => (

        <motion.div className="supplychain-item" 
          key={index}>

          <motion.img src={supplychain.image} alt={supplychain.name} 
            whileHover={{ scale: 1.1}}
             whileTap={{ scale: 0.95 }}/>

        
            
          {supplychain.name && (
            <motion.p 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}>
                {supplychain.name}
            </motion.p>

          )}

          {supplychain.name && (
            <motion.div className="supplychain-button">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {supplychain.action}
                </motion.button>
            </motion.div>
              
            )}
        </motion.div>
        
        ))}
      </div>

      <motion.div className="adminsupplychain-button">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ProjectLinksAdmin />
                </motion.button>
      </motion.div>

      <p className="project-description">
        <b>Only</b> 
        <a href="https://coinsbench.com/understanding-contract-ownership-in-solidity-and-access-control-patterns-1a04116042ce#:~:text=Contract%20ownership%20refers%20to%20the,transferred%20dynamically%20using%20specific%20functions."> Owner </a> 
        <b>can register the supply chain. Owner is the the person who deployed the smart contract on the blockchain</b>
      </p>

    </motion.div>
  );
};

export default Project;
