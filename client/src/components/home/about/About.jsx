import React from "react";
import "./about.scss";
import { motion } from "framer-motion";


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


const About = () => {
    const one = (
      <p>
        I am currently a <b>Final Year Computer Network Student</b> at{" "}

        <a href="https://www.upm.edu.my/" target="_blank" rel="noopener noreferrer">University Putra Malaysia, Serdang</a>. I am undertaking a

        full-time <b> Bachelor of Computer Science</b> in <b>Computer Network. </b>
      </p>
    );


    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        new frameworks and technologies.
      </p>
    );

    const tech_stack = [
      "Javascript ES6+",
      "Typescript",
      "React JS",
      "Next JS",
      "HTML & CSS",
      "Vite",
      "Node JS",
      "Tailwind",
      "Sass",
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (

      <div id="about">

          <div className="about-content">
            <motion.div 
            className="about-description" 
            variants={Variants}
            initial="initial"
            animate="animate">

            <h2 className="section-title">Muhammad Alif Zakwan Bin Mohd As'ad</h2>

              {[one]}

              <p>Here are some technologies I am interested with:</p>
            

              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {

                  return (
                   
                      <li>{tech_item}</li>
                  
                  );
                })}

              </ul>

              {[two]}

            </motion.div>


            <motion.div className="about-image" 
            variants={Variants} 
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.95 }}
           >
        
              <img src = "/me.jpg"/>
            </motion.div>

          </div>

      </div>
    );
  }

export default About;