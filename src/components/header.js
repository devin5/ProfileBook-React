import React from 'react'
import {Link} from 'react-router-dom'
import { Input, Layout, Menu } from 'antd';

import "./styles/_header.css";
const { Header} = Layout;
const { Search } = Input;


const Banner = () =>{
    function logOut(){

    }


    return(     
           <Layout className="layout">
                <Header id ="loginHeader">
                    <div className = "menu-parent">
                        <Menu className ="menu" theme ="" mode="horizontal" defaultSelectedKeys={['']}>
                            <Menu.Item key="1"><Link className="link" to = "/defaulthome">Profile</Link></Menu.Item>
                            <Menu.Item key="2"><Link className="link" to = "/">Timeline</Link></Menu.Item>  
                            <Menu.Item key="3"><Link className="link" to = "/defaulthome">Log Out</Link></Menu.Item>                       
                            <Menu.Item key="4"> <Link className="link" to = "/">Test</Link></Menu.Item>   
                        </Menu>
                    </div>
                    <div id = "search">
                        <Search size="default" placeholder="Search" onSearch={value => console.log(value)} enterButton />
                    </div>                   
                </Header>                
            </Layout>       
        )
}

export default Banner