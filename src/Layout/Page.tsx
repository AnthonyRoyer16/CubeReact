import React, { useState }  from 'react';
import { Col, Dropdown, Input, Menu, Row, Typography } from 'antd';
import { Layout } from 'antd';
import {UserOutlined, HomeOutlined,  HeartOutlined, MessageOutlined,BellOutlined, DownOutlined, SettingOutlined} from '@ant-design/icons';
import {themeColors} from "./Theme"
import {Link} from "react-router-dom";

 
const { Header, Footer, Content } = Layout;
 
const { Title, Text } = Typography;
 
type Props = {
 children: React.ReactNode;
 header: boolean
};

//Test

const Page: React.FC<Props> = ({children, header}: Props) => {

  const menu = (
    <Menu   >
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/account">
          Mon Compte
        </Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );
 
   return (
    <Layout>
      {header ?
    <Header className="header" style={{position:"fixed",width:"100%", backgroundColor:"#05A6A6", paddingBottom:"15px"}}>
      <Row>
        <Col span={17}  style={{paddingTop:"12.5px",display:"flex",flexDirection:"column",alignItems: "flex-end"}} >
          <Input.Search className="center" size="large" style={{width: "60%", display:"block", float:"right"}} placeholder="Rechercher une ressource" />
        </Col>
        <Col span={7}  style={{paddingTop:"15px",display:"flex",flexDirection:"column",alignItems: "flex-end"}} >
        <BellOutlined className="center" style={{paddingTop:"6px",position:"absolute", right:"15%", color:"white", fontSize:"20px"}}/>
          <Dropdown className="center" overlay={menu} placement="bottomCenter" arrow>
            <SettingOutlined style={{paddingTop:"6px", color:"white", fontSize:"20px",position:"absolute", right:"5%"}}>
               <DownOutlined />
            </SettingOutlined>
        </Dropdown>
        </Col>
      </Row>
    </Header>: null}
    <Content style={{justifyContent: "center",paddingTop:"11px" ,marginLeft:"20%", marginTop: "6.1%", minHeight:"650px", width:"60%"}}>{children}</Content>
    <Footer style={{position:"fixed", width:"100%", height:"9.5%", bottom:"0", backgroundColor:"#05A6A6"}}>
       <Row justify="center">
          <Col className="center" span={3}>
            <Link className="navbar-footer" to="/">
              <HomeOutlined />
            </Link>
          </Col>
          <Col className="center" span={3}>
            <Link  className="navbar-footer" to="/">
              <HeartOutlined />
            </Link>
          </Col>
          <Col className="center" span={3}>
            <Link  className="navbar-footer" to="/">
              <UserOutlined />
            </Link>
          </Col>
          <Col className="center" span={3}>
            <Link  className="navbar-footer" to="/">
              <MessageOutlined />
            </Link>
          </Col>
       </Row>
    </Footer>
  </Layout>
   );
};
 
 
 
export { Page };