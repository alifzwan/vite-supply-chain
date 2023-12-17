import React, { useState } from "react";
import { Layout, Button, theme } from "antd";
import "./projectsidebar.scss";
import Logo from "../logo/Logo";
import ProjectLinks from "../projectlinks/ProjectLinks";
import ProjectToggleButton from "../projectToggleButton/ProjectToggleButton";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Sider } = Layout;

function ProjectSideBar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="project-navbar"
      >
        <Logo darkTheme={darkTheme}/>
        <ProjectLinks darkTheme={darkTheme}/>
        <ProjectToggleButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            type="text"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined />
              ) : (
                <MenuFoldOutlined />
              )
            }
          />
        </Header>
      </Layout>
    </Layout>
  );
}

export default ProjectSideBar;
