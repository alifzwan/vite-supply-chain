import React from 'react'
import "./blockchainlogo.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faReact } from '@fortawesome/free-brands-svg-icons' 


const BlockchainLogo = () => {
  return (
    <div className='blockchain-logo'>
        <div className="blockchain-logo-icon">
          <FontAwesomeIcon icon={faReact} color='#00D5FF' spin/>        
        </div>
    </div>
  )
}

export default BlockchainLogo