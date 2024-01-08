import "./frontend.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"

import ProjectSideBar from "../project/projectsidebar/projectSideBar/ProjectSideBar";


const Frontend = () => {

  const navigate = useNavigate()

  const redirect_to_project = () => {
      navigate('/project')
  }
 


  const frontendframeworks = [
    { name: "React JS"      , logo: "/react.svg"     , link: "https://react.dev/learn/installation"},
    { name: "Vite"         , logo: "/vite.svg"      , link: "https://vitejs.dev/guide/"},
    { name: "Web3.js"      , logo: "/web3js.svg"       , link: "https://web3js.readthedocs.io/en/v1.10.0/"},
    { name: "Sass"         , logo: "/sass.svg"         , link: "https://sass-lang.com/documentation/"},
    { name: "Node.js"      , logo: "/nodejs.svg"       , link: "https://www.w3schools.com/nodejs/nodejs_intro.asp"},
  ]; 

  const frameworksDescriptions = [
  
   
    { description: "Open-source JavaScript library for building user interfaces (UIs) or user interface components, suitable for single-page applications (SPAs) and multi-page applications (MPAs) where user interactions are dynamic and frequent"},
    { description: "A fast, opinionated web development build tool that aims to provide a more efficient and optimized development experience, particularly for modern web applications."},
    { description: "JavaScript library that provides an interface for interacting with the Ethereum blockchain. It allows developers to build decentralized applications (DApps) that can interact with smart contracts, query blockchain data, and send transactions."},
    { description: "Stands for Syntactically Awesome Stylesheets, is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS)."},
    { description: "Open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server side."},

    
  ];
  
  


  return (
    <div className="frontend-main-container">
        <div className="project-menu-bar">
          <ProjectSideBar />
        </div> 

        <div className="frontend-main-section">


            <div className="frontend-section-title">Web Application <b>(Frontend)</b></div>


            <div className="frontend-content">
              <div className="tools-section">
                <div className="tools-container">
                    <p>Frameworks</p>
                    <div className="grid-items">
                      <div className="tools-grid-image">
                          {frontendframeworks.map((frontendframeworks, index) => (
                              <div className="tools-item" key={index}>
                                  <a href={frontendframeworks.link} target="_blank" rel="noopener noreferrer">
                                      <motion.img 
                                      src={frontendframeworks.logo} 
                                      alt={frontendframeworks.name} 
                                      id={frontendframeworks.name}
                                      whileHover={{ scale: 1.1}}
                                      whileTap={{ scale: 0.95 }}/>
                                      
                                      <p>{frontendframeworks.name}</p>
                                    
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

            <div className="frontend-back-button-container">
                <motion.div className="frontend-back-button">
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

export default Frontend;
