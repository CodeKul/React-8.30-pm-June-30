import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        setCollapsed(!collapsed);
    }; 

    return (
        <div>

            <Sider 
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            style={{zIndex:1000}}>


                <div className="logo"/>

                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="1" icon={<DashboardOutlined/>}>
                        <Link to="/">
                        Home Page
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<CustomerServiceOutlined/>}>
                        <Link to="/customer">
                        Customer
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="24" icon={<UserOutlined/>}>
                        <Link to="/selectcustomer">
                        Custom Select Customer
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="21" icon={<FileTextOutlined/>}>
                        <Link to="/lead">
                        Lead
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="3" icon={<FileSyncOutlined/>}>
                        <Link to="/product">
                        Product
                        </Link>
                    </Menu.Item>


                    <Menu.Item key="31" icon={<TeamOutlined/>}>
                        <Link to="/admin">
                        Admins Management
                        </Link>
                    </Menu.Item>


                    <Menu.Item key="32" icon={<SettingsOutlined/>}>
                        <Link to="/settings">
                        Settings
                        </Link>
                    </Menu.Item>

                    
                </Menu>
                

            </Sider>
            
        </div>
    )
}
