import {
  PageHeader,
  Button,
  Dropdown,
  Menu,
  Row,
  Col,
  message,
  Popconfirm,
} from "antd";
import { useEffect, useState } from "react";
import styles from "../styles/PlanModal.module.css";
import { RouteDeliveries } from "./RouteDeliveries";

let today = new Date();
let date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

let dateTime = date;
let numDeliveries = NaN;
let distance = "0 km";
let duration = "0 min";

export default function RouteGeneral(props) {
  const [plan, setPlan] = useState(props.plan);
  const [RouteD, setDeliveries] = useState([]);
  const [visible, setVisible] = useState(false);
  const [iduser, setID] = useState(props.idUser);
  const [route, setRoute] = useState(props.route);

  const text =
    "Si ingresa nuevos paquetes, cuando tiene una ruta planeada esta se cancelara,¿Desea continuar?";

  function handleMenuClick(e) {
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item danger>Cancelar Ruta</Menu.Item>
      <Menu.Item danger>Cancelar Entrega</Menu.Item>
    </Menu>
  );

  useEffect(async () => {
    if (plan) {
      console.log("plan", plan);
      await getRoute();
    }
  }, []);

  const verifi = () => {};
  const getRoute = async () => {
    try {
      const result = await fetch(
        "http://localhost:3000/api/planDeliveries/?idUser=" + iduser
      ).then((res) => res.json());
      numDeliveries = result.route.length;
      distance = result.distance;
      duration = result.duration;
      setVisible(true);
      setPlan(true);
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
        title={"Logistica de Ruta: " + dateTime}
        extra={[
          <Button type="primary" onClick={getRoute}>
            Iniciar Entregas
          </Button>,
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button danger>Cancelar</Button>
          </Dropdown>,
          <Popconfirm
            title={text}
            onConfirm={props.showModal}
            okText="Si"
            cancelText="No"
            placement="bottomRight"
          >
            <Button>Ingreasar Entregas</Button>
          </Popconfirm>,
        ]}
      ></PageHeader>
      {plan && (
        <div>
          <div className={styles["div-route"]}>
            <div>
              <strong>Tiempo aproximado de ruta</strong>
              <p>{duration ? duration : "Cargando"}</p>
            </div>
            <div>
              <strong>Distancia a recorrer</strong>
              <p>{distance ? distance : "Cargando"}</p>
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
        {plan && (
          <div className={styles["div-map-de"]}>
            <Col span={19}></Col>
            <Col span={5}>
              <div className={styles["container-btn-form"]}>
                <strong>Entregas</strong>
                <p>{numDeliveries ? numDeliveries : "Cargando"}</p>
              </div>
              {RouteD && <RouteDeliveries deliveries={RouteD} />}
            </Col>
          </div>
        )}
      </Row>
    </>
  );
}
