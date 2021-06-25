import { Col, message, Row, Form, Input, Button } from 'antd';
import Logo from "./resources.png";
import { Image } from 'antd';
import {ArrowRightOutlined} from "@ant-design/icons"

function AccountComponent() {
    

      const sleep = (time: number) => {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      const onFinish = (values: any) => {
        message.success('Connecter !');
        localStorage.setItem("logged", "true");
        sleep(1000).then(() => {
            window.location.href = "/"
        });
        
      };
    
      const onFinishFailed = (errorInfo: any) => {
      };
      

   return (
    <>
        <Row style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%", minHeight:"600px"}}>
            <Col span={14}>
                <Row style={{width:"100%",height:"100%"}}>
                    <Col className="form-login" span={24} style={{ display:"flex", transform: "translateX(30%)", alignItems: "center" }}>
                        <Form
                            layout="vertical"
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            >
                            <Form.Item
                                label="Email"
                                name="email"
                                style={{width: '320px'}}
                                rules={[{ required: true, message: 'Veuillez rentrer vôtre email!' }]}
                            >
                                <Input type="email" className="login-input" />
                            </Form.Item>

                            <Form.Item
                                label="Mote de passe"
                                name="password"
                                style={{width: '320px'}}
                                rules={[
                                    {required: true, message: "Veuillez rentrer un mot de passe"},
                                    {
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{12,})/gm,
                                        message: "Le mot de passe n'est pas correcte",
                                      },]}>
                                <Input.Password className="login-input" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                Se connecter ! <ArrowRightOutlined />
                                </Button>
                            </Form.Item>
                            <Row>
                                <Col>
                                    <a className="forget" href="/">Mot de passe oublié ?</a>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Col>
            <Col className="logo-log-in" span={10} style={{backgroundColor:"#75BFBF"}}>
                <Row style={{display:"block", marginLeft:"35%", marginTop:"40%"}}>
                    <Image
                        width={200}
                        src={Logo}
                        preview={false}
                    />
                </Row>
            </Col>
        </Row>
    </>
   );
};
 
 
export { AccountComponent };