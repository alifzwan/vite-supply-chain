import {Menu} from "antd"
import "./projectlinks.scss"
import Web3 from 'web3'; 
import { useNavigate } from "react-router-dom"

// import Home from "./components/home/Home"
// import Project from "./components/showcase/project/Project";
import ProjectHero from "../../projectHero/ProjectHero";
// import Register from "./components/showcase/register/Register";
// import Order from "./components/showcase/order/Order";
// import Admin from "./components/showcase/admin/Admin";
// import Track from "./components/showcase/track/Track";
// import Info from "./components/showcase/info/Info";

import React, { useEffect, useState } from 'react';

import {
    HomeOutlined, 
    AppstoreOutlined, 
    AreaChartOutlined, 
    PayCircleOutlined, 
    SettingOutlined, 
    BarsOutlined, 
    ApiTwoTone, 
    DollarTwoTone,
    UserOutlined} from "@ant-design/icons"

const ProjectLinks = ({darkTheme}) => {
    const navigate = useNavigate()

    const redirect_to_home = () => {
        navigate('/')
    }
    const redirect_to_projecthero = () => {
        navigate('/projecthero')
    }
    const redirect_to_register = () => {
        navigate('/register')
    }
    const redirect_to_order = () => {
        navigate('/order')
    }
    const redirect_to_admin = () => {
        navigate('/admin')
    }
    const redirect_to_track = () => {
        navigate('/track')
    }
    const redirect_to_info = () => {
        navigate('/info')
    }
    

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
        
            <Menu className="menu-bar" theme={darkTheme ? 'dark' : 'light'} mode="inline">
            
            
            <Menu.Item className="account" icon={<UserOutlined />}>
                {currentaccount}
            </Menu.Item>

            <Menu.Item className="balance" icon={<DollarTwoTone />}>
                {currentbalance.toFixed(2)}
            </Menu.Item>
           
        
            <Menu.Item className="disconnect-button" onClick={handleDisconnect} icon={<ApiTwoTone />}>
                Disconnect 
            </Menu.Item>

           

            <Menu.Item onClick= {redirect_to_home} key="home" icon ={<HomeOutlined />}>
                Home
            </Menu.Item>

            <Menu.Item onClick={redirect_to_projecthero} icon ={<AppstoreOutlined />}>
                Project Overview
            </Menu.Item>


            <Menu.SubMenu icon={<BarsOutlined />} title ="Tasks">
                <Menu.Item onClick={redirect_to_register}>Stakeholder Registration</Menu.Item>
                <Menu.Item>Slaughter Process</Menu.Item>
                <Menu.Item>Halal Verification</Menu.Item>
                <Menu.Item onClick={redirect_to_order} >Product Registration</Menu.Item>
                <Menu.Item onClick={redirect_to_admin} >Product Administer</Menu.Item>
                <Menu.Item onClick={redirect_to_track} >Track Product</Menu.Item>
                <Menu.Item onClick={redirect_to_info} >Product Info</Menu.Item>
               
            </Menu.SubMenu>

        
            <Menu.Item key="progress" icon ={<AreaChartOutlined />}>
                Progress
            </Menu.Item>

            <Menu.Item key="payment" icon ={<PayCircleOutlined />}>
                Payment
            </Menu.Item>

            <Menu.Item key="setting" icon ={<SettingOutlined />}>
                Setting
            </Menu.Item>
        </Menu>
        

        
        
        
    )
}

export default ProjectLinks