import ReactDOM from "react-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "../styles/planear.module.css";
import {
  Modal,
  Form,
  Row,
  Col,
  Input,
  Layout,
  Typography,
  InputNumber,
  Button,
  Divider,
} from "antd";

const { Header, Sider, Content } = Layout;
const colCounts = {};
const { Title, Text } = Typography;

export default function PlanModal(props) {
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
                      <Input placeholder="Ingrese el nombre del cliente" />
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
                      <Input placeholder="Ingrese el o los apellidos del cliente" />
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
                      <Input placeholder="Ingrese el nombre de la calle" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Colonia o municipio"
                      name="municipio"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese la colonia o municipio!",
                        },
                      ]}
                    >
                      <Input placeholder="Ingrese el la colonia o municipio" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Número exterio o interior"
                      name="numhouse"
                      rules={[
                        {
                          required: true,
                          message:
                            "¡Porfavor ingrese número exteriro o interior!",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Código postal"
                      name="postalcode"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese el código postal!",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Ciudad"
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese la ciudad!",
                        },
                      ]}
                    >
                      <Input placeholder="Ingrese el nombre de la ciudad" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item
                      label="Estado"
                      name="state"
                      rules={[
                        {
                          required: true,
                          message: "¡Porfavor ingrese el estado!",
                        },
                      ]}
                    >
                      <Input placeholder="Ingrese el estado" />
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Form.Item>
                      <div className={styles["btn-space"]}>
                        <Button value="small" onClick={props.handleCancel}>
                          {" "}
                          Cancelar
                        </Button>
                        <Button value="large" type="primary" htmlType="submit">
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
                <Col span={20}>
                  <div style={{ paddingTop: "7px", paddingBottom: "7px" }}>
                    <Text strong style={{ paddingRight: "1rem" }}>
                      DPTA-6231-AX21
                    </Text>
                    <Text>5 Km</Text>
                  </div>
                  <Text>Avenida las flores</Text>
                </Col>
                <Col span={4}>
                  <Button type="text" icon={<EditOutlined />}></Button>
                  <Button type="text" danger icon={<DeleteOutlined />}></Button>
                </Col>
                <Divider style={{ margin: 0 }} />
              </Row>
            </Sider>
          </Layout>
        </Layout>
      </Modal>
    </>,
    document.getElementById("modal-container")
  );
}
