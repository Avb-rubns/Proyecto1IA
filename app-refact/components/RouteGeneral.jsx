import { PageHeader, Button, Row, Col, Popconfirm } from "antd";
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

export default function RouteGeneral({ info, showModal, setInfo }) {
  const [RouteD, setDeliveries] = useState(info.route);

  const text =
    "Si ingresa nuevos paquetes," +
    "\n" +
    "cuando tiene una ruta planeada esta se cancelara, " +
    "\n" +
    "¿Desea continuar?";

  function handleMenuClick(e) {
    console.log("click", e);
    switch (e.key) {
      case "1":
        //cancelar ruta
        break;
      case "2":
        //cancelar entrega
        break;
      default:
        console.log("ni idea");
        break;
    }
  }

  useEffect(async () => {
    if (info.plan) {
      console.log("plan", info.plan);
      initMap();
      await getRoute();
    }
  }, []);
  const getRoute = async () => {
    try {
      const result = await fetch(
        "http://localhost:3000/api/planDeliveries/?idUser=" + info.idUser
      ).then((res) => res.json());
      numDeliveries = result.route.length;
      distance = result.distance;
      duration = result.duration;
      setDeliveries(result.route);
      setInfo({ ...info, plan: true });
    } catch (error) {
      console.log(error);
    }
  };
  const canceleRoute = async () => {
    try {
      const result = await fetch("http://localhost:3000/api/user/?option=2", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idUser: iduser }),
      }).then((res) => res.json());
      console.log(result);
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
            Planear Ruta
          </Button>,
          <Popconfirm
            title={"Si cancela la ruta se eliminara de su cuenta"}
            okText="Si"
            onConfirm={canceleRoute}
            cancelText="No"
            placement="bottomRight"
          >
            <Button danger>Cancelar Ruta</Button>,
          </Popconfirm>,
          <Popconfirm
            title={text}
            onConfirm={showModal}
            okText="Si"
            cancelText="No"
            placement="bottomRight"
          >
            <Button>Ingreasar Entregas</Button>
          </Popconfirm>,
        ]}
      ></PageHeader>
      {!info.plan && (
        <div>
          <div className={styles["div-route"]}>
            <div>
              <strong>No tiene una ruta planeada</strong>
            </div>
          </div>
          <div className={styles["div-map-de"]}>
            <Col span={19}></Col>
            <Col span={5}>
              <div className={styles["container-btn-form"]}>
                <strong>Entregas</strong>
                <p>{info.route ? info.route.length : 0}</p>
              </div>
              {info.route && <RouteDeliveries deliveries={info.route} />}
            </Col>
          </div>
        </div>
      )}
      {info.plan && (
        <>
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
          <Row
            style={{
              height: "100%",
              width: "100%",
            }}
          >
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
          </Row>
        </>
      )}
    </>
  );
}
