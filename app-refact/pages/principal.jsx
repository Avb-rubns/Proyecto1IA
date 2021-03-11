import Template from "../components/Template";
import Header from "../components/Header";
import PlanModal from "../components/PlanModal";
import useModal from "../hooks/useModal";
import styles from "../styles/Principal.module.css";
import { Row, Col, Menu, PageHeader, Button } from "antd";
import { CodepenOutlined, SendOutlined } from "@ant-design/icons";

export default function Principal(props) {
  const { visible, showModal, handleCancel } = useModal();
  return (
    <Template title="Principal">
      <Header name={props.name} exit={props.exit} />
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
            >
              <Menu.Item key="1" icon={<SendOutlined />}>
                <strong>Lógistica de Rutas</strong>
              </Menu.Item>
              <Menu.Item key="2" icon={<CodepenOutlined />}>
                <strong>Paquetes</strong>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={20}>
            <div
              style={{
                height: "100%",
                borderRight: 1,
                paddingTop: "1.22rem",
                background: "white",
              }}
            >
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
