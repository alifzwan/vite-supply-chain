import React from "react";
import "./projecthero.scss";
import ProjectSideBar from "../projectsidebar/projectSideBar/ProjectSideBar"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"


const ProjectHero = () => {
  const navigate = useNavigate()

  const redirect_to_project = () => {
      navigate('/project')
  }

    
  const supplychains = [
    { name: "Farmer"      , image: "/farmer.svg"},
    { image: "/arrow.png"},

    { name: "Slaughterhouse", image: "/chicken.png"},
    { image: "/arrow.png"},

    { name: "Halal Verify", image: "/halal.png"},
    { image: "/arrow.png"},

    { name: "Manufacturer", image: "/manufacturer.svg"},
    { image: "/arrow.png"},

    { name: "Distributor" , image: "/distributor.svg"},
    { image: "/arrow.png"},

    { name: "Retailer"    , image: "/retailer.svg"},
  ];

  return (
    <div className="supplychain-main-container" >

        <div className="menu-bar">
          <ProjectSideBar />
        </div>   


        <div className="content">
              <div className="supplychain">
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

                                    <p className="name">{supplychain.name}</p >
                                </motion.p>

                              )}

                        </motion.div>
                  
                      ))}
                  </div>

              </div>

              <p className="project-description">
                  <b>Only </b> 
                  <a href="https://coinsbench.com/understanding-contract-ownership-in-solidity-and-access-control-patterns-1a04116042ce#:~:text=Contract%20ownership%20refers%20to%20the,transferred%20dynamically%20using%20specific%20functions." target="_blank" rel="noopener noreferrer"> 
                    Owner 
                  </a> 
                  <b> can register the supply chain. Owner is the the person who deployed the smart contract on the blockchain</b>
              </p>


              <motion.div className="projecthero-back-button">
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
   
  );
};

export default ProjectHero;
