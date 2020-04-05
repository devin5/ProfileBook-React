import React from "react";
import { Link } from "react-router-dom";
import { Input, Layout, Menu } from "antd";

import "./styles/_header.css";
const { Header } = Layout;
const { Search } = Input;

const Banner = () => {
  function logOut() {
    localStorage.clear();
  }

  return (
    <Layout className="layout">
      <Header id="loginHeader">
        <div className="menu-parent">
          {/* <img src="../logo.png" /> */}
          <Menu
            className="menu"
            theme=""
            mode="horizontal"
            defaultSelectedKeys={[1]}
          >
            <Menu.Item key="1">
              <Link className="link" to="/profilebook/timeline">
                Timeline
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link className="link" to="/profilebook/profile">
                Profile
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
              {" "}
              <Link className="link" to="/test">
                Test
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link onClick={logOut} id="logout" className="link" to="/">
                Log Out
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <div id="search">
          <Search
            size="default"
            placeholder="Not Yet Supported"
            onSearch={value => console.log(value)}
            enterButton
          />
        </div>
      </Header>
    </Layout>
  );
};

export default Banner;
