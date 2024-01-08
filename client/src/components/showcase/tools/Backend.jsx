import "./backend.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"

import ProjectSideBar from "../project/projectsidebar/projectSideBar/ProjectSideBar";


const Backend = () => {

  const navigate = useNavigate()

  const redirect_to_project = () => {
      navigate('/project')
  }
  


  const backendframeworks = [
  
    { name: "Solidity"     , logo: "/solidity.svg"     , link: "https://docs.soliditylang.org/en/v0.8.22/"},
    { name: "Remix"        , logo: "/remix.png"        , link: "https://remix.ethereum.org/"} ,
    { name: "Truffle"      , logo: "/truffle.svg"      , link: "https://trufflesuite.com/docs/truffle/"},
    { name: "Ganache"      , logo: "/ganache.svg"      , link: "https://trufflesuite.com/docs/ganache/"},
    { name: "Metamask"     , logo: "/metamask.svg"     , link: "https://metamask.io/"},
  ];

  const frameworksDescriptions = [
  
    { description: "A programming language designed specifically for developing smart contracts on blockchain platforms, with a primary focus on the Ethereum blockchain. " },
    { description: "A powerful and user-friendly web-based integrated development environment (IDE) specifically designed for Ethereum smart contract development. " } ,
    { description: "Comprehensive development framework for Ethereum that simplifies the process of building, testing, and deploying decentralized applications (DApps) and smart contracts."},
    { description: "A personal blockchain emulator and development tool designed to facilitate Ethereum development by providing a local and controlled blockchain environment for testing and debugging smart contracts."},
    { description: "Popular cryptocurrency wallet and browser extension that enables users to interact with decentralized applications (DApps) on the Ethereum blockchain. "},
  ];
  
  


  return (
    <div className="backend-main-container">
        <div className="project-menu-bar">
          <ProjectSideBar />
        </div> 

        <div className="backend-main-section">


            <div className="backend-section-title">Smart Contract <b>(Backend)</b></div>


            <div className="backend-content">
              <div className="tools-section">
                <div className="tools-container">
                    <p>Frameworks</p>
                    <div className="grid-items">
                      <div className="tools-grid-image">
                          {backendframeworks.map((backendframeworks, index) => (
                              <div className="tools-item" key={index}>
                                  <a href={backendframeworks.link} target="_blank" rel="noopener noreferrer">
                                      <motion.img 
                                      src={backendframeworks.logo} 
                                      alt={backendframeworks.name} 
                                      id={backendframeworks.name}
                                      whileHover={{ scale: 1.1}}
                                      whileTap={{ scale: 0.95 }}/>
                                      
                                      <p>{backendframeworks.name}</p>
                                    
                                  </a>
                              </div>
                          ))}
                      </div>
                      <div className="tools-grid-description">
                        {frameworksDescriptions.map((frameworksDescriptions, index) => (
                            <div className="tools-description" key={index}>   
                              <p>{frameworksDescriptions.description}</p>
                            </div>
                        ))}
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="backend-back-button-container">
                <motion.div className="backend-back-button">
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

export default Backend;
