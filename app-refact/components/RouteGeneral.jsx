import { PageHeader, Button, Dropdown, Menu, Row, Col } from "antd";
import styles from "../styles/Route.module.css";

let today = new Date();
let date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

let dateTime = date;

function handleMenuClick(e) {
  console.log("click", e);
}

export default function RouteGeneral(props) {
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item danger key={3} onClick={props.deleteAll}>
        Cancelar Ruta
      </Menu.Item>
      <Menu.Item danger key={4} onClick={props.delete}>
        Cancelar Entrega
      </Menu.Item>
    </Menu>
  );

  const getRoute = async () => {
    try {
      const result = await fetch(
        "http://localhost:3000/api/user/?idUser=DAPORP5904EL87"
      ).then((res) => res.json());
      console.log(result);
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

      {/*<div>
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
      </div>*/}
      <Row
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Col span={20}></Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
}
