import { Col, Dropdown, Input, Menu, Row, Layout, Image } from 'antd';
import { UserOutlined, HomeOutlined,  HeartOutlined, MessageOutlined,BellOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from '../Components/resources.png';
import { Children, useEffect, useState } from 'react';
import { SEARCH } from "../Modules/Ressources/Actions";
import { useRessourcesState, useRessourcesDispatch } from "../Modules/Ressources";
 
const { Header, Footer, Content } = Layout;
 
type Props = {
 children: React.ReactNode;
 header: boolean
};


//Test

const Page: React.FC<Props> = ({children, header}: Props) => {

  const { loading, error, status, search } = useRessourcesState();
  const dispatch = useRessourcesDispatch();

  const [searchRessources, setSearch] = useState<string>("");


  const sendSearchedRessources = () => {
      searchRessources !== "" && 
      dispatch({
        type: SEARCH,
        payload: searchRessources,
      });
    }

    useEffect(() => {
      children &&
      window.location.href !== "http://localhost:3000/" &&
      dispatch({
        type: SEARCH,
        payload: "",
      })
    }, [children]);
    

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/account">
          Mon Compte
        </Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
      <Link to="/accountLogged">
          Mon Compte (Logged)
        </Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        <Link to="/signIn">
          Inscription
        </Link>
      </Menu.Item>
    </Menu>
  );
 
   return (
    <Layout>
      {header ?
      <Header className="header" style={{position:"fixed",width:"100%", backgroundColor:"#05A6A6", paddingBottom:"15px", borderWidth: "0px 0px 1px 0.5px",borderStyle: "solid", borderColor: "darkslategrey"}}>
      <Row>
        <Col span={1} style={{paddingTop:"6px",display:"flex",flexDirection:"column",alignItems: "start"}} >
          <Image onClick={() => window.location.href = "/"} width={50} src={logo} preview={false}/>
        </Col>
        <Col span={16}  style={{paddingTop:"12.5px",display:"flex",flexDirection:"column",alignItems: "flex-end"}} >
          <Input.Search value={searchRessources}  onChange={(e) => setSearch(e.target.value)} onSearch={sendSearchedRessources} className="center" size="large" style={{width: "60%", display:"block", float:"right"}} placeholder="Rechercher une ressource" />
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
    <Content style={{justifyContent: "center",paddingTop:"11px" ,marginLeft:"10%", marginTop: "6.1%", minHeight:"650px", minWidth:"60%"}}>{children}</Content>
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