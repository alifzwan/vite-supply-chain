import React, { useState } from "react";
import { Layout, Button, theme } from "antd";
import "./blockchainsidebar.scss";
import BlockchainLogo from "../blockchainlogo/BlockchainLogo";
import BlockchainLinks from "../blockchainlinks/BlockchainLinks";
import BlockchainToggleButton from "../blockchainToggleButton/BlockchainToggleButton";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Sider } = Layout;

function BlockchainSideBar() {
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
        className="blockchain-navbar"
      >
        <BlockchainLogo />
        <BlockchainLinks darkTheme={darkTheme}/>
        <BlockchainToggleButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
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

export default BlockchainSideBar;
