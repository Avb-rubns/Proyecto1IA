import Template from "../components/Template";
import { Layout, Menu, Typography, Row, Col } from "antd";
import { CodepenOutlined, SendOutlined } from "@ant-design/icons";
import useModal from "../hooks/useModal";
import PlanModal from "../components/PlanModal";
import Image from "next/image";
import Nav from "../components/Nav";
import HeadPlanRoute from "..//components/HeadPlanRoute";
import HeadRoute from "../components/HeadRoute";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const { Content, Sider } = Layout;
const { Title, Text } = Typography;

export default function Home(props) {
  const [listDeliveries, setDeliveries] = useState([]);
  const { visible, showModal, handleCancel } = useModal();

  const getDeliveries = async () => {
    try {
      const result = await fetch(
        "http://localhost:3000/api/users?id="
      ).then((res) => res.json());
      setDeliveries(...listDeliveries, result);
      console.log(listDeliveries);
      console.log("De");
      creatRoute(listDeliveries);
    } catch (error) {
      console.log(error);
    }
  };
  const creatRoute = async (data) => {
    try {
      let listOrder = NaN;
      console.log(data);
      listOrder = await fetch(
        "http://localhost:3000/api/direction?info=true&",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      ).then((res) => res.json());
    } catch (error) {
      console.log(error);
    }
  };

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
            {/*<HeadPlanRoute showModal={showModal} />*/}
            <HeadRoute showModal={showModal} list={getDeliveries} />
            {/* Aqui se ponen los modulos*/}
            <div>
              <div className={styles["div-route"]}>
                <div>
                  <strong>Tiempo aproximado de ruta</strong>
                  <p>3 h 21m</p>
                </div>
                <div>
                  <strong>Distancia a recorrer</strong>
                  <p>3Km</p>
                </div>
              </div>
              <div>
                <Row>
                  <Col span={18}>{/*aqui va el mapa*/}</Col>
                  <Col span={6}>
                    <Row gutter={16} className={styles["div-route"]}>
                      <div>
                        <strong>Entregas</strong>
                      </div>
                      <Col>
                        <div
                          style={{
                            paddingTop: "7px",
                            paddingBottom: "7px",
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Text strong style={{ paddingRight: "1rem" }}>
                            RIPE-GO1-VEBD
                          </Text>
                          <Text style={{ fontSize: "12px" }}>Entregado</Text>
                        </div>
                        <Text style={{ fontSize: "12px" }}>
                          Calle del Doctor Gómez Ulla,Farmacia - Calle Doctor
                          Gómez Ulla 6,6,Madrid,28028,España
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
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
/*export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}*/
