import { Button } from 'antd'
import React from 'react'
import "./projecttogglebutton.scss"
import {HiOutlineSun, HiOutlineMoon} from "react-icons/hi"

const ProjectToggleButton = ({darkTheme, toggleTheme}) => {
  return (
    <div className='toggle-theme-btn'>
        <Button onClick={toggleTheme}>
            {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon/>}
        </Button>
    </div>
  )
}

export default ProjectToggleButton