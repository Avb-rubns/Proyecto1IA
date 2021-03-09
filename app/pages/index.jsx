import Template from "../components/Template";
import styles from "../styles/Home.module.css";
import { Layout, Menu, Col, Row } from "antd";
import Nav from "../components/Nav";
import { CodepenOutlined, SendOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

export default function Home(props) {
  return (
    <Template title="Página de Inició">
      <Layout>
        <Nav name={props.name}></Nav>
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
              <Menu.Item key="1" icon={<SendOutlined />} onClick={props.logica}>
                <strong>Lógistica de Rutas</strong>
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<CodepenOutlined />}
                onClick={props.table}
              >
                <strong>Paquetes</strong>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{ height: "100%", borderRight: 1, background: "white" }}
          >
            {/*Aqui el header*/}
            {/* Aqui se ponen los modulos*/}
            <Row style={{ height: "100vh" }}>
              <Col className={styles["container"]} span={24}></Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Template>
  );
}
