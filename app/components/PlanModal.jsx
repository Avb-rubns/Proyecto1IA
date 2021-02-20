import ReactDOM from "react-dom";
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
} from "antd";

const { Header, Sider, Content } = Layout;
const colCounts = {};
const { Text } = Typography;

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
          <Form name="plan" layout="vertical">
            <Layout>
              <Header style={{ background: "white", paddingTop: 0 }}>
                Información de entrega
              </Header>
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
                      <Button value="large"> Cancelar</Button>
                      <Button value="large" type="primary" htmlType="submit">
                        agregar
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Content>
            </Layout>
          </Form>
          <Sider theme="light">
            <Text strong>Ant Design (strong)</Text>
            <Row>
              <Col xs={{ span: 24 }}></Col>
            </Row>
          </Sider>
        </Layout>
      </Modal>
    </>,
    document.getElementById("plan-modal-container")
  );
}
