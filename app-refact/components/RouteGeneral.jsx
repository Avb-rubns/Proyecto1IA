import { PageHeader, Button, Dropdown, Menu, Row, Col } from "antd";
import { set } from "mongoose";
import { useState } from "react";
import styles from "../styles/PlanModal.module.css";
import { RouteDeliveries } from "./RouteDeliveries";

let today = new Date();
let date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

let dateTime = date;
let numDeliveries = NaN;
let distance = "0 km";
let duration = "0 min";
function handleMenuClick(e) {
  console.log("click", e);
}

export default function RouteGeneral(props) {
  const [plan, setPlan] = useState();
  const [RouteD, setDeliveries] = useState([]);
  const [visible, setVisible] = useState(false);
  const idUser = props.idUser;
  //setPlan(props.plan);
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item danger onClick={canceleRoute}>
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
      setVisible(true);
      setDeliveries(result.route);
    } catch (error) {
      console.log(error);
    }
  };
  const canceleRoute = async () => {
    try {
      const result = await fetch("http://localhost:3000/api/planDeliveries/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idUser: idUser }),
      }).then((res) => res.json());
      setVisible(false);
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
        {visible && (
          <div className={styles["div-map-de"]}>
            <Col span={19}></Col>
            <Col span={5}>
              <div className={styles["container-btn-form"]}>
                <strong>Entregas</strong>
                <p>{numDeliveries}</p>
              </div>
              {RouteD && <RouteDeliveries deliveries={RouteD} />}
            </Col>
          </div>
        )}
      </Row>
    </>
  );
}
