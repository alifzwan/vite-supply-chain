import {Menu} from "antd"
import "./projectlinks.scss"
import Web3 from 'web3'; 
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'


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
    const redirect_to_project = () => {
        navigate('/project')
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

   

    const copyAccount =() => {
        navigator.clipboard.writeText(this.state.textToCopy)
        
    };

    return (
        
        <Menu className="menu-bar" theme={darkTheme ? 'dark' : 'light'} mode="inline">
            
            <Menu.Item className="account" icon={<UserOutlined />}>
                <Menu.Item onCopy= {copyAccount}> {currentaccount}</Menu.Item>
            </Menu.Item>

            <Menu.Item className="balance" icon={<DollarTwoTone />}>
                {currentbalance.toFixed(2)}
            </Menu.Item>
           
        
            <Menu.Item className="disconnect-button" onClick={handleDisconnect} icon={<ApiTwoTone />}>
                Disconnect 
            </Menu.Item>

        
            <Menu.Item onClick= {redirect_to_project} icon ={<HomeOutlined />}>
                Home
            </Menu.Item>

            <Menu.Item icon ={<AppstoreOutlined />}>
                <Link to="/projecthero">
                    Project Overview
                </Link>           
            </Menu.Item>


            <Menu.SubMenu icon={<BarsOutlined />} title ="Tasks">
                <Menu.Item>
                    <Link to="/register">Stakeholder Registration</Link>
                </Menu.Item>


                <Menu.Item>Slaughter Process</Menu.Item>
                <Menu.Item>Halal Verification</Menu.Item>

                <Menu.Item>
                    <Link to="/order">Product Registration</Link>
                </Menu.Item>

                <Menu.Item onClick={redirect_to_admin} >Product Administer</Menu.Item>
                <Menu.Item onClick={redirect_to_track} >Track Product</Menu.Item>
                <Menu.Item onClick={redirect_to_info} >Product Info</Menu.Item>
               
            </Menu.SubMenu>

        
            {/* <Menu.Item icon ={<AreaChartOutlined />}>
                Progress
            </Menu.Item>

            <Menu.Item icon ={<PayCircleOutlined />}>
                Payment
            </Menu.Item> */}

            <Menu.Item icon ={<SettingOutlined />}>
                Setting
            </Menu.Item>

            <Menu.Item onClick= {redirect_to_home} icon ={<HomeOutlined />}>
                Front Page
            </Menu.Item>
        </Menu>
        

        
        
        
    )
}

export default ProjectLinks