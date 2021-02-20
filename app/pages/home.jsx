import Template from "../components/Template";
import {
  Layout,
  Menu,
  Button,
  PageHeader,
  Col,
  Row,
  Typography,
  Image,
} from "antd";
import { CodepenOutlined, SendOutlined } from "@ant-design/icons";
import { blue } from "@ant-design/colors";
import styles from "../styles/planear.module.css";
import usePlan from "../hooks/usePlan";
import PlanModal from "../components/PlanModal";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export default function Home(props) {
  const { modalText, visible, showModal, handleCancel } = usePlan();
  return (
    <Template title="Home">
      <Layout>
        <Header style={{ background: blue[5], alignItems: "center" }}>
          <i src="/logo.png"></i>
          <Title level={5}>Dline</Title>
        </Header>
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
            {/*Aqui el header*/}
            <PageHeader
              ghost={false}
              title="Planea una ruta"
              extra={[
                <Button
                  key="1"
                  value="default"
                  type="primary"
                  onClick={showModal}
                >
                  Planear Ruta
                </Button>,
              ]}
            ></PageHeader>
            {/* Aqui se ponen los modulos*/}
            <Row style={{ height: "100vh" }}>
              <Col className={styles["container"]} span={24}>
                <Title level={4}>
                  Aun no tienes una ruta planeada de entrega , Puedes crear una
                  😁
                </Title>
                <Image
                  className={styles["image-container"]}
                  src="/images/wait.png"
                />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
      {visible && (
        <PlanModal
          visible={visible}
          handleCancel={handleCancel}
          modalText={modalText}
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
