import Template from "../components/Template";
import { Layout, Form, Typography, Input, Button } from "antd";
import { blue } from "@ant-design/colors";

const { Sider, Content } = Layout;
const { Title } = Typography;

export default function Login() {
  return (
    <Template title="Acceso">
      <Layout>
        <Content></Content>
        <Sider style={{ background: blue[0] }}>
          <Form>
            <Title style={{ textAlign: "center" }}>dLine</Title>
            <Form.Item
              label="Correo"
              name="email"
              rules={[
                { required: true, message: "¡Por favor ingrese su correo!" },
              ]}
            >
              <Input placeholder="Ingrese su correo" value={0} name="email" />
            </Form.Item>
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                {
                  required: true,
                  message: "¡Por favor ingrese su contraseña!",
                },
              ]}
            >
              <Input.Password
                placeholder="Ingrese su contraseña"
                value={0}
                name="password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Entrar</Button>
            </Form.Item>
          </Form>
        </Sider>
      </Layout>
    </Template>
  );
}
