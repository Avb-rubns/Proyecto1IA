import { PageHeader, Button, Dropdown, Menu, Row, Col } from "antd";
import { useState } from "react";
import styles from "../styles/PlanModal.module.css";
import { RouteDeliveries } from "./RouteDeliveries";

let today = new Date();
let date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

let dateTime = date;
let numDeliveries = NaN;
let visible = false;
let distance = "0 km";
let duration = "0 min";
function handleMenuClick(e) {
  console.log("click", e);
}

export default function RouteGeneral(props) {
  const [RouteD, setDeliveries] = useState([]);
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item danger onClick={props.deleteAll}>
        Cancelar Ruta
      </Menu.Item>
      <Menu.Item danger onClick={props.delete}>
        Cancelar Entrega
      </Menu.Item>
    </Menu>
  );

  const getRoute = async () => {
    try {
      const result = await fetch(
        "http://localhost:3000/api/planDeliveries/?idUser=RIPEJPBQWV"
      ).then((res) => res.json());
      numDeliveries = result.route.length;
      distance = result.distance;
      duration = result.duration;
      visible = true;
      setDeliveries(result.route);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PageHeader
        ghost={false}
        title={"Ruta de entrega: " + dateTime}
        extra={[
          <Button type="primary" onClick={getRoute}>
            Iniciar Entregas
          </Button>,
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button danger>Cancelar</Button>
          </Dropdown>,
          <Button onClick={props.showModal}>Planear Ruta</Button>,
        ]}
      ></PageHeader>

      {visible && (
        <div>
          <div className={styles["div-route"]}>
            <div>
              <strong>Tiempo aproximado de ruta</strong>
              <p>{duration}</p>
            </div>
            <div>
              <strong>Distancia a recorrer</strong>
              <p>{distance}</p>
            </div>
          </div>
        </div>
      )}
      <Row
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        {visible &&
          ((<Col span={19}></Col>),
          (
            <Col span={5}>
              <div className={styles["container-btn-form"]}>
                <strong>Entregas</strong>
                <p>{numDeliveries}</p>
              </div>
              <RouteDeliveries deliveries={RouteD} />
            </Col>
          ))}
      </Row>
    </>
  );
}
