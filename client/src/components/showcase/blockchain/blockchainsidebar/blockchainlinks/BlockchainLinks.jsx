import {Menu} from "antd"
import "./blockchainlinks.scss"
import { Link } from 'react-router-dom'

import {HomeOutlined, 
        GitlabOutlined, 
        CodepenOutlined,
        GatewayOutlined,
        DingdingOutlined 
        } from "@ant-design/icons"

const BlockchainLinks = ({darkTheme}) => {

    return (
        
        <Menu className="blockchain-menu-bar" theme={darkTheme ? 'dark' : 'light'} mode="inline">
            
            <Menu.Item id="home" icon ={<HomeOutlined />}>
                <Link to="/project">Home</Link>
            </Menu.Item>

            <Menu.SubMenu icon={<CodepenOutlined />} title ="Blockchain">

                <Menu.Item>
                    <Link to="/blockchainwork">How it work</Link>
                </Menu.Item>

            </Menu.SubMenu>


            <Menu.SubMenu icon={<CodepenOutlined />} title ="Smart Contract">

                <Menu.Item>
                    <Link to="/blockchainwork">How it work</Link>
                </Menu.Item>

            </Menu.SubMenu>

            <Menu.SubMenu icon={<CodepenOutlined />} title ="Consensus Algorithm">

                <Menu.Item>
                    <Link to="/blockchainwork">How it work</Link>
                </Menu.Item>

            </Menu.SubMenu>
            
            
            

            <Menu.Item icon ={<GitlabOutlined />}>
                <Link to="/blockchaindecentralization">Decentralization</Link>
            </Menu.Item> 

            <Menu.Item icon ={<GatewayOutlined/>}>
                <Link to="/blockchaintransparency">Transparency</Link>
            </Menu.Item>

            <Menu.Item icon ={<DingdingOutlined />}>
                <Link to="/blockchainsecure"></Link>Is Blockchain Secure?
            </Menu.Item>

        </Menu>
        

    )
}

export default BlockchainLinks