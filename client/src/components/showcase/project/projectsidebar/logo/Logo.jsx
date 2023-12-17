import React from 'react'
import "./logo.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faReact } from '@fortawesome/free-brands-svg-icons' 

const Logo = () => {
  return (
    <div className={`logo `}>
        <div className="logo-icon" >
          <FontAwesomeIcon  icon={faReact} color='#00D5FF' spin/>        
        </div>
    </div>
  )
}

export default Logo