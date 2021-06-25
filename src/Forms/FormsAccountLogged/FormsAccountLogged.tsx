import '../../App.css';
import {Row, Col, Typography, Form, Input, Button} from "antd";

import { UPDATE } from "../../Modules/User/Actions";
import { /*useUserState,*/ useUserDispatch } from "../../Modules//User";

function FormsAccountLogged() {

    const { Title } = Typography;

   // const { } = useUserState();
    const dispatch = useUserDispatch();


    const onFinish = (values: any) => {
        dispatch({
            type: UPDATE,
            payload: values,
          });
      };

   return (
    <Row style={{width:"60%", marginLeft:"17%"}}>
        <Col span={24}><Title style={{textAlign:"center", textDecoration: "underline", textDecorationColor: "rgb(5, 166, 166)"}}>Mon compte</Title></Col>
        <Col span={24}>
        <Form onFinish={onFinish} layout={"vertical"}>
            <Row style={{width:'100%'}}>
                <Col xs={24} sm={24} lg={12} style={{paddingRight:'12px'}}>
                    <Form.Item label={"Nom"} name="lastName" 
                    rules={[
                        {required: true, message: "Veuillez rentrer votre nom"},
                        {
                        pattern: /^(?=.*[A-Za-z])(?!.*[0-9])/,
                        message: "Le nom rentré n'est pas valide",
                      },]}>
                        <Input type={"text"} placeholder="Nom" className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    <Form.Item label="Prénom" name="firstName"
                    rules={[
                        { required: true, message: "Veuillez rentrer votre prénom" },
                        {
                          pattern: /^(?=.*[A-Za-z])(?!.*[0-9])/,
                          message: "Le prénom rentré n'est pas valide",
                        },  
                      ]}
                    >
                        <Input type={"text"} placeholder="Prenom" className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12} style={{paddingRight:'12px'}}>
                    <Form.Item label={"Pseudo"} name="pseudo"
                    rules={[{required: true, message: "Veuillez rentrer votre pseudo"}]}>
                        <Input type={"text"} placeholder="Pseudo" className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    <Form.Item label={"Email"} name="email"
                    rules={[{required: true, message: "Veuillez rentrer votre email"}]}>
                        <Input type={"email"} placeholder="Email" className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12} style={{paddingRight:'12px'}}>
                    <Form.Item label={"Mot de passe"} name="password1"
                    rules={[
                        {required: true, message: "Veuillez rentrer un nouveau mot de passe"},
                        {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{12,})/gm,
                            message: "Le mot de passe n'est pas correcte",
                          },]}>
                        <Input type={"password"} placeholder="mot de passe" className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12}>
                    <Form.Item label={"Confirmer mot de passe"} name="password2"
                    rules={[
                        {required: true, message: "Veuillez confirmer votre nouveau mot de passe"},
                        {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{12,})/gm,
                            message: "Le mot de passe n'est pas correcte",
                          },]}>
                        <Input placeholder="Veuillez ressaisir le mot de passe" type={"password"} className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={8} style={{paddingRight:'12px'}}>
                    <Form.Item label={"Date de naissance"} name="date"
                    rules={[{required: true, message: "Veuillez rentrer votre date de naissance"}]}>
                        <Input type={"date"} placeholder="Date de naissance" className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={8} style={{paddingRight:'12px'}}>
                    <Form.Item label={"Ville"} name="city"
                     rules={[
                        {
                          required: true,
                          message: "Veuillez rentrer votre ville",
                        },
                        {
                          pattern: /^(?!.*[0-9])(?=.*[A-Za-z])(?=.{2,}$).*/,
                          message: "La ville rentré n'est pas correcte",
                        },
                      ]}
                    >
                        <Input type={"text"} placeholder="Ville" className="login-input"/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={8}>
                    <Form.Item label={"Code Postal"} name="code"
                    rules={[
                        { required: true, message: "Veuillez rentrer votre code postal" },
                        {
                          pattern: /^(?=.*[0-9])(?!.*[a-z])(?!.*[A-Z])(?=.{5,5}$).*/,
                          message: "Le code postal rentrer n'est pas correct",
                        },
                      ]}>
                        <Input type={"number"} placeholder="Code postal" className="login-input"/>
                    </Form.Item>
                </Col>
                <Col span={24} style={{textAlign:"center", marginBottom:"34%"}}>
                    <Button type="primary" size="large" htmlType="submit">
                        Modifier mon compte
                    </Button>
                </Col>
            </Row>
            </Form>
        </Col>
    </Row>
   );
};
 
 
 
export { FormsAccountLogged };