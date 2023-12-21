import {Menu} from "antd"
import "./blockchainlinks.scss"
import { Link } from 'react-router-dom'

import {HomeOutlined, 
        AreaChartOutlined, 
        PayCircleOutlined, 
        SettingOutlined, 
        BarsOutlined
        } from "@ant-design/icons"

const BlockchainLinks = ({darkTheme}) => {

    return (
        
        <Menu className="blockchain-menu-bar" theme={darkTheme ? 'dark' : 'light'} mode="inline">
            
            <Menu.Item id="home" icon ={<HomeOutlined />}>
                <Link to="/project">Home</Link>
            </Menu.Item>
            
             <Menu.Item icon ={<AreaChartOutlined />}>
                Progress
            </Menu.Item>

            <Menu.Item icon ={<PayCircleOutlined />}>
                Payment
            </Menu.Item> 

            <Menu.Item icon ={<SettingOutlined />}>
                Setting
            </Menu.Item>

        </Menu>
        

    )
}

export default BlockchainLinks