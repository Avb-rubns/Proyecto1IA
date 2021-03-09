import ReactDOM from "react-dom";
import { useState } from "react";
import styles from "../styles/planear.module.css";
import {
  Modal,
  Form,
  Row,
  Col,
  Input,
  Layout,
  Typography,
  Button,
  Divider,
} from "antd";
import { DeliveryList } from "./DeliveryList";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default function PlanModal(props) {
  const [entrega, setForm] = useState({
    username: "",
    lastname: "",
    nameaddress: "",
    colonia: "",
    numhouse: "",
    codepostal: "",
    city: "",
    country: "",
  });
  const [listDeliveries, setDeliveries] = useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...entrega, [name]: value });
  };
  const onKeyPressEvent = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!new RegExp("[0-9]").test(keyValue)) event.preventDefault();
    return;
  };

  const onSubmitAdd = async () => {
    try {
      const result = await fetch("http://localhost:3000/api/direction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ entrega }),
      }).then((res) => res.json());
      const info = await getDistance(result);
      console.log(info);
      const insert = await insertDB({ ...entrega, ...info, ...result });
      console.log(insert);
      setDeliveries([...listDeliveries, { ...entrega, ...info, ...result }]);
    } catch (error) {
      console.log(error);
    }
  };
  const getDistance = async (data) => {
    try {
      const result = await fetch(
        "http://localhost:3000/api/direction?lat=" +
          data["lat"] +
          "&lon=" +
          data["lon"]
      ).then((res) => res.json());
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const insertDB = async (data) => {
    try {
      const result = await fetch("http://localhost:3000/api/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }).then((res) => res.json());
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return ReactDOM.createPortal(
    <>
      <Modal
        title="Planear Ruta"
        footer={null}
        onCancel={props.handleCancel}
        visible={props.visible}
        width={"90%"}
        style={{ paddingTop: 0 }}
      >
        <Layout>
          <Header
            style={{
              background: "white",
              paddingTop: 0,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Title level={4}>Información de la entrega</Title>
            <Divider type="vertical" />
            <Title level={4}>Entregas</Title>
          </Header>
          <Layout>
            <Form name="plan" layout="vertical">
              <Content style={{ background: "white", paddingTop: 0 }}>
                <Row className={styles["container-info"]} gutter={(48, 8)}>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Nombre del Cliente"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese el nombre del cliente!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese el nombre del cliente"
                        onChange={handleChange}
                        name="username"
                        value={entrega.username}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Apellido"
                      name="lastname"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese el apellido del cliente!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese el o los apellidos del cliente"
                        onChange={handleChange}
                        name="lastname"
                        value={entrega.lastname}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Nombre de la calle"
                      name="nameaddress"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese el nombre de la calle!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese el nombre de la calle"
                        onChange={handleChange}
                        name="nameaddress"
                        value={entrega.nameaddress}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Colonia"
                      name="colonia"
                      rules={[
                        {
                          required: false,
                          message: "¡Porfavor ingrese la colonia!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese el la colonia"
                        onChange={handleChange}
                        name="colonia"
                        value={entrega.colonia}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Número exterio o interior"
                      name="numhouse"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese el número de su hogar!",
                        },
                      ]}
                    >
                      <Input
                        name="numhouse"
                        value={entrega.numhouse}
                        onChange={handleChange}
                        onKeyPress={onKeyPressEvent}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Código Postal"
                      name="codepostal"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese el código postal!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="0000"
                        name="codepostal"
                        value={entrega.codepostal}
                        onChange={handleChange}
                        onKeyPress={onKeyPressEvent}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Ciudad o municipio"
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese la ciudad o municipio!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese la ciudad o municipio"
                        onChange={handleChange}
                        name="city"
                        value={entrega.city}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Pais"
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese el estado!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese el pais"
                        name="country"
                        value={entrega.state}
                        onChange={handleChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item>
                      <div className={styles["btn-space"]}>
                        <Button value="small" onClick={props.handleCancel}>
                          {" "}
                          Cancelar
                        </Button>
                        <Button
                          value="large"
                          type="primary"
                          htmlType="submit"
                          onClick={onSubmitAdd}
                        >
                          agregar
                        </Button>
                      </div>
                    </Form.Item>
                  </Col>
                </Row>
              </Content>
            </Form>
            <Sider theme="light">
              <Row gutter={[8, 16]} style={{ textAlign: "justify-all" }}>
                {/* se insertan las tarjetas*/}
                <Divider style={{ margin: 0 }} />
                <DeliveryList deliveries={listDeliveries} />
              </Row>
            </Sider>
          </Layout>
        </Layout>
      </Modal>
    </>,
    document.getElementById("modal-container")
  );
}
