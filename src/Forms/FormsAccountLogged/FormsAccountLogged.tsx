import '../../App.css';
import {Row, Col, Typography, Form, Input, Button} from "antd";

function FormsAccountLogged() {

    const { Title } = Typography;

    const onFinish = (values: any) => {
        console.log(values);
      };

   return (
    <Row style={{width:"60%", marginLeft:"17%"}}>
        <Col span={24}><Title style={{textAlign:"center"}}>Mon compte</Title></Col>
        <Col span={24}>
        <Form onFinish={onFinish} layout={"vertical"}>
            <Row style={{width:'100%'}}>
                <Col xs={24} sm={24} lg={12} style={{paddingRight:'12px'}}>
                    <Form.Item label={"Nom"} name="lastName">
                        <Input type={"text"} className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    <Form.Item label={"Prenom"} name="firstName">
                        <Input type={"text"} className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12} style={{paddingRight:'12px'}}>
                    <Form.Item label={"Pseudo"} name="pseudo">
                        <Input type={"text"} className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    <Form.Item label={"Email"} name="email">
                        <Input type={"email"} className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12} style={{paddingRight:'12px'}}>
                    <Form.Item label={"Mot de passe"} name="password1">
                        <Input type={"text"} className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    <Form.Item label={"Confirmer mot de passe"} name="password2">
                        <Input placeholder="Veuillez ressaisir le mot de passe" type={"email"} className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={8} style={{paddingRight:'12px'}}>
                    <Form.Item label={"Date de naissance"} name="date">
                        <Input type={"date"} className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={8} style={{paddingRight:'12px'}}>
                    <Form.Item label={"Ville"} name="city">
                        <Input type={"text"} className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={8}>
                    <Form.Item label={"Code Postal"} name="code">
                        <Input type={"text"} className="login-input"/>
                    </Form.Item>
                </Col>
                <Col span={24} style={{textAlign:"center", marginBottom:"30%"}}>
                    <Button type="primary" size="large" htmlType="submit">
                        S'inscrire
                    </Button>
                </Col>
            </Row>
            </Form>
        </Col>
    </Row>
   );
};
 
 
 
export { FormsAccountLogged };