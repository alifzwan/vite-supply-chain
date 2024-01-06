import "./architecture.scss";
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

const Architecture = () => {

  const navigate = useNavigate()

  const redirect_to_project = () => {
      navigate('/project')
  }
  const redirect_to_projecthero = () => {
    navigate('/projecthero')
}


  const contractframeworks = [
  
    { name: "Solidity"     , logo: "/solidity.svg"     , link: "https://docs.soliditylang.org/en/v0.8.22/"},
    { name: "Remix"        , logo: "/remix.png"        , link: "https://remix.ethereum.org/"},
    { name: "Truffle"      , logo: "/truffle.svg"      , link: "https://trufflesuite.com/docs/truffle/"},
    { name: "Ganache"      , logo: "/ganache.svg"      , link: "https://trufflesuite.com/docs/ganache/"}
  ];
  const metamaskframeworks = [
    { name: "METAMASK"     , logo: "/metamask.svg"     , link: "https://metamask.io/"},
    { name: "Deploy"       , logo: "/arrowright.png"}
  ];
  const ethereumframeworks = [
    { name: "Ethereum"     , logo: "/ethereum.svg"     , link: "https://ethereum.org/en/developers/docs/"}
  ];

  const web3frameworks = [
    { name: "Web3 JS"       , logo: "/web3js.svg"      , link: "https://web3js.readthedocs.io/en/v1.10.0/"},
    { name: "Contract API call" , logo: "/arrowright.png"}
  ];

  const websiteframeworks = [
    { name: "Javascript"   , logo: "/javascript.png", link: "https://www.w3schools.com/js/default.asp"},
    { name: "HTML"         , logo: "/html.png"      , link: "https://www.w3schools.com/html/html_intro.asp"},
    { name: "CSS"          , logo: "/css.png"       , link: "https://www.w3schools.com/css/default.asp"},
    { name: "ReactJS"     , logo: "/react.svg"     , link: "https://react.dev/learn/installation"}
  ];
  


  return (
    <div className="architecture-main-container">
        <div className="project-menu-bar">
          <ProjectSideBar />
        </div> 

        <div className="architecture-main-section">
            <div className="architecture-section-title">Architecture</div>
            <div className="architecture-content">

                <div className="contract-section">
                    <div className="contract-container">
                        <p>Smart Contract Development</p>
                        <img src="/contract.svg" className="contract-image"/>
                        <div className="contract-grid-image">
                            {contractframeworks.map((contractframeworks, index) => (
                                <div className="contract-item" key={index}>
                                    <a href={contractframeworks.link} target="_blank" rel="noopener noreferrer">
                                        <motion.img 
                                        src={contractframeworks.logo} 
                                        alt={contractframeworks.name} 
                                        id={contractframeworks.name}
                                        whileHover={{ scale: 1.1}}
                                        whileTap={{ scale: 0.95 }}/>
                                        <p>{contractframeworks.name}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="metamask-section">
                    <div className="metamask-container">
                        <div className="metamask-grid-image">
                            {metamaskframeworks.map((metamaskframeworks, index) => (
                                <div className="metamask-item" key={index}>
                                    <a className="metamask-detail" href={metamaskframeworks.link} target="_blank" rel="noopener noreferrer">
                                        <motion.img 
                                        src={metamaskframeworks.logo} 
                                        alt={metamaskframeworks.name} 
                                        id={metamaskframeworks.name}
                                        whileHover={{ scale: 1.1}}
                                        whileTap={{ scale: 0.95 }}/>
                                        <p>{metamaskframeworks.name}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="ethereum-section">
                    <div className="ethereum-container">
                        <p>Blockchain Network</p>
                        <div className="ethereum-grid-image">
                            {ethereumframeworks.map((ethereumframeworks, index) => (
                                <div className="ethereum-item" key={index}>
                                        
                                    <a href={ethereumframeworks.link} target="_blank" rel="noopener noreferrer">
                                        <motion.img 
                                        src={ethereumframeworks.logo} 
                                        alt={ethereumframeworks.name} 
                                        id={ethereumframeworks.name}
                                        whileHover={{ scale: 1.1}}
                                        whileTap={{ scale: 0.95 }}/>
                                        <p>{ethereumframeworks.name}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="web3-section">
                    <div className="web3-container">
                        <div className="web3-grid-image">
                            {web3frameworks.map((web3frameworks, index) => (
                                <div className="web3-item" key={index}>
                                    <a className="web3-detail" href={web3frameworks.link} target="_blank" rel="noopener noreferrer">
                                        <motion.img 
                                        src={web3frameworks.logo} 
                                        alt={web3frameworks.name} 
                                        id={web3frameworks.name}
                                        whileHover={{ scale: 1.1}}
                                        whileTap={{ scale: 0.95 }}/>
                                        <p>{web3frameworks.name}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="website-section">
                    <div className="website-container">
                        <p>Website Development</p>
                        <img src="/app.png" className="website-image"/>
                        <div className="website-grid-image">
                            {websiteframeworks.map((websiteframeworks, index) => (
                                <div className="website-item" key={index}>
                                    <a href={websiteframeworks.link} target="_blank" rel="noopener noreferrer">
                                        <motion.img 
                                        src={websiteframeworks.logo} 
                                        alt={websiteframeworks.name} 
                                        id={websiteframeworks.name} 
                                        whileHover={{ scale: 1.1}}
                                        whileTap={{ scale: 0.95 }}
                                        />
                                        <p>{websiteframeworks.name}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="architecture-back-button-container">
                <motion.div className="architecture-back-button">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                             onClick={redirect_to_projecthero}
                        >
                        Project Overview
                        </motion.button>
                
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

export default Architecture;
