import {Layout, Button, theme, Menu} from "antd"
import "./project.scss"
import Logo from "./projectsidebar/logo/Logo"
import ProjectLinks from "./projectsidebar/projectlinks/ProjectLinks"  
import ProjectToggleButton from './projectsidebar/projectToggleButton/ProjectToggleButton' 

import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons"
import React, { useState } from 'react';

const {Header, Sider} = Layout


function Project() {

  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(false) 


  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }


  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <Layout>
      
      <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className='project-navbar'>
        <Logo />
        <ProjectLinks darkTheme={darkTheme}/>
        <ProjectToggleButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
      </Sider>


      <Layout>
        <Header style={{padding:0, background:colorBgContainer}}>
          <Button className="toggle" onClick={()=>setCollapsed(!collapsed)} type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
        </Header>
      </Layout>


    
    </Layout>
  )
}

export default Project
