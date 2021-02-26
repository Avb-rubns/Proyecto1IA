import Template from "../components/Template";
import { Layout, Menu, Col, Row, Typography } from "antd";
import { CodepenOutlined, SendOutlined } from "@ant-design/icons";
import useModal from "../hooks/useModal";
import PlanModal from "../components/PlanModal";
import Image from "next/image";
import Nav from "../components/Nav";
import HeadPlanRoute from "..//components/HeadPlanRoute";
import HeadRoute from "../components/HeadRoute";

const { Content, Sider } = Layout;
const { Title } = Typography;

export default function Home(props) {
  const { visible, showModal, handleCancel } = useModal();
  return (
    <Template title="Home">
      <Layout>
        <Nav name={props.name} exit={props.exit} />
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
            style={{ height: "100vh", borderRight: 1, background: "white" }}
          >
            {/*Aqui el header*/}
            <HeadPlanRoute showModal={showModal} />
            {/*<HeadRoute showModal={showModal} />*/}
            {/* Aqui se ponen los modulos*/}
            <div></div>
          </Content>
        </Layout>
      </Layout>
      {visible && (
        <PlanModal
          visible={visible}
          handleCancel={handleCancel}
          visible={visible}
          showModal={showModal}
        />
      )}
    </Template>
  );
}
export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
