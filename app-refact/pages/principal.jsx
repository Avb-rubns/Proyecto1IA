import Template from "../components/Template";
import Header from "../components/Header";
import TablePackages from "../components/TablePackages";
import PlanRoute from "../components/PlanRoute";
import RouteGeneral from "../components/RouteGeneral";
import { useState } from "react";
import PlanModal from "../components/PlanModal";
import useModal from "../hooks/useModal";
import styles from "../styles/Principal.module.css";
import { Row, Col, Menu } from "antd";
import { CodepenOutlined, SendOutlined } from "@ant-design/icons";

export default function Principal(data) {
  const { visible, showModal, handleCancel } = useModal();
  const [visiblePlan, setVisibleP] = useState();
  const [visibleRoute, setVisibleR] = useState();
  const [visibleTable, setVisibleT] = useState();

  const getPackages = async () => {
    try {
      const result = await fetch(
        "http://localhost:3000/api/user/?idUser=RIPEJPBQWV"
      ).then((res) => res.json());
      console.log(result.packages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    console.log("click ", e.key);
    switch (e.key) {
      case "1":
        console.log("Logistica");
        setVisibleT(false);
        setVisibleR(true);
        break;
      case "2":
        console.log("Paquetes");
        setVisibleT(true);
        setVisibleR(false);
        break;

      default:
        break;
    }
  };

  return (
    <Template title="Principal">
      <Header name={data.name} exit={data.exit} />
      <div className={styles["container"]}>
        <Row
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Col span={4}>
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
              onClick={handleClick}
            >
              <Menu.Item key="1" icon={<SendOutlined />}>
                <strong>Lógistica de Rutas</strong>
              </Menu.Item>
              <Menu.Item key="2" icon={<CodepenOutlined />}>
                <strong>Paquetes</strong>
              </Menu.Item>
            </Menu>
          </Col>
          {/* Main */}
          <Col span={20}>
            <div className={styles["container-main"]}>
              {visibleTable && <TablePackages />}
              {/*<PlanRoute showModal={showModal} />*/}
              {visibleRoute && <RouteGeneral showModal={showModal} />}
            </div>
          </Col>
        </Row>
      </div>
      {visible && (
        <PlanModal
          visible={visible}
          showModal={showModal}
          handleCancel={handleCancel}
          title={"Crear Entregas"}
        />
      )}
    </Template>
  );
}
