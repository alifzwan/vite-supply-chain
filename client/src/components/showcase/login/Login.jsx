
import './login.scss';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import Web3 from "web3";

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Login = () => {
    const navigate = useNavigate()

    const redirect_to_home = () => {
        navigate('/');
    };
    const redirect_to_project = () => {
      navigate('/project')
    }

    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const loadWeb3 = async () => {
        if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
            setWeb3(window.web3);
        } else {
            window.alert(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
        };

        loadWeb3();
        
    }, []);


    const handleConnect = async (e) => {
        e.preventDefault();
        try {
        await window.ethereum.request({
            method: "wallet_requestPermissions",
            params: [{ eth_accounts: {} }],
        });
        const address = await window.ethereum.request({
            method: "eth_requestAccounts",
            params: [{}],
        });
        let ad = window.web3.utils.toChecksumAddress(address[0]);
        setAccounts([ad]);
        } catch (error) {
        console.error("Error connecting:", error);
        }
    };

    if (accounts.length > 0) {
        return redirect_to_project();
    }

    return (
        <div className="login-main-container">
            <div className="login-section">
                <div className="login">
                    <h2 className="login-title">Login</h2>
                    <div className="login-icon">
                        <img width="60" height="60" src={"/metamask.png"} alt="" />
                        <p>- - - - - - -</p>
                        <img width="60" height="60" src={"/app.png"} alt="" />
                    </div>
                    <p className="login-message">Login with Metamask</p>
                    <div className="flex-login-container">
                        <button onClick={handleConnect}>Connect Metamask</button>
                        <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                        Add Metamask To Chrome
                    </a>
                    </div>
                </div>
            </div>
            
            <motion.div variants={itemVariants} className="back-button">
                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={redirect_to_home}
                        >
                            Back to Front Page
                        </motion.button>
            </motion.div>
        </div>
    );
}

export default Login;