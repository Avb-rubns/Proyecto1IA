import Template from "../components/Template";
import { CodepenOutlined, SendOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Content, Sider } = Layout;

export default function Table(props) {
  return (
    <Template title="Table">
      <Layout>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              style={{
                height: "100%",
                borderRight: 1,
                paddingTop: "1.22rem",
                background: "white",
              }}
            >
              <Menu.Item key="1" icon={<SendOutlined />}>
                <strong>Lógistica de Rutas</strong>
              </Menu.Item>
              <Menu.Item key="2" icon={<CodepenOutlined />}>
                <strong>Paquetes</strong>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{ height: "100%", borderRight: 1, background: "white" }}
          >
            {/*contenido
             */}
          </Content>
        </Layout>
      </Layout>
    </Template>
  );
}
