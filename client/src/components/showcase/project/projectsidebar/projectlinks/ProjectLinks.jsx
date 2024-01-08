import {Menu} from "antd"
import "./projectlinks.scss"
import Web3 from 'web3'; 
import { Link } from 'react-router-dom'


import React, { useEffect, useState } from 'react';

import {
    HomeOutlined, 
    AppstoreOutlined,
    SettingOutlined, 
    BarsOutlined, 
    DeploymentUnitOutlined, 
    ApiTwoTone, 
    DollarTwoTone,
    ContainerOutlined,
    ReadOutlined,
    UserOutlined} from "@ant-design/icons"

const ProjectLinks = ({darkTheme}) => {
    
    useEffect(() => {
        loadWeb3();
        loadBlockchaindata();
    }, []);


    const [currentaccount , setCurrentaccount ]  = useState("");
    const [currentbalance, setBalance] = useState(0); 


    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.eth_requestAccounts;
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    };
    
    
    const loadBlockchaindata = async () => {
      try {
    
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setCurrentaccount(account);
    
    
        const bal = await web3.eth.getBalance(account);
        const ethBalance = web3.utils.fromWei(bal, 'ether');
        
        setBalance(Number(ethBalance));
    
    
      } catch (error) {
        console.error('Error loading blockchain data:', error);
      }
    };
    loadBlockchaindata();
    
    
    const handleDisconnect = () => {
        localStorage.removeItem('cacheKey')
        localStorage.removeItem('cacheNID')
        window.location.href = "/login"
    };

   

   

    return (
        
        <Menu className="project-menu-bar" theme={darkTheme ? 'dark' : 'light'} mode="inline">
            
            <Menu.Item className="account" icon={<UserOutlined />}>
                {currentaccount}
            </Menu.Item>

            <Menu.Item className="balance" icon={<DollarTwoTone />}>
                {currentbalance.toFixed(2)} ETH
            </Menu.Item>
           
        
            <Menu.Item className="disconnect-button" onClick={handleDisconnect} icon={<ApiTwoTone />}>
                Disconnect 
            </Menu.Item>

            
            <Menu.Item id="home" icon ={<HomeOutlined />}>
                <Link to="/project">
                    Front Page
                </Link>
            </Menu.Item>


            <Menu.Item icon ={<DeploymentUnitOutlined />}>
                <Link to="/architecture">
                    Architecture
                </Link>
            </Menu.Item>


            <Menu.Item icon ={<AppstoreOutlined />}>
                <Link to="/projecthero">
                    Project Overview
                </Link>           
            </Menu.Item>


            <Menu.SubMenu icon={<BarsOutlined />} title ="Tasks">
                <Menu.Item>
                    <Link to="/register">Punch In</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to="/order">Registration</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to="/admin">Administration</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to="/slaughterhouse">Slaughter Verification</Link>
                </Menu.Item>
                
                <Menu.Item>
                    <Link to="/verify">Halal Verification</Link>
                </Menu.Item>

        
                <Menu.Item>
                    <Link to="/track">Track Product</Link>
                </Menu.Item>
                
                <Menu.Item>
                    <Link to="/info">Product Info</Link>
                </Menu.Item>
               
            </Menu.SubMenu>

            <Menu.Item icon ={<ReadOutlined />}>
                <Link to="/chronology">Description</Link>
            </Menu.Item>

            


            <Menu.SubMenu icon={<ContainerOutlined />} title ="Frameworks"> 
                <Menu.Item>
                    <Link to="/backend">Back-End</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/frontend">Front-End</Link>
                </Menu.Item>
            </Menu.SubMenu>
            
        
            <Menu.Item icon ={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
        </Menu>
    
    )
}

export default ProjectLinks