import { Button } from 'antd'
import React from 'react'
import "./blockchaintogglebutton.scss"
import {HiOutlineSun, HiOutlineMoon} from "react-icons/hi"

const BlockchainToggleButton = ({darkTheme, toggleTheme}) => {
  return (
    <div className='toggle-theme-btn'>
        <Button onClick={toggleTheme}>
            {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon/>}
        </Button>
    </div>
  )
}

export default BlockchainToggleButton