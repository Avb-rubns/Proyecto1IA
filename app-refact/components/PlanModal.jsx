import ReactDOM from "react-dom";
import styles from "../styles/PlanModal.module.css";
import {
  Modal,
  Form,
  Row,
  Col,
  Input,
  Typography,
  Button,
  Divider,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

export default function PlanModal(props) {
  return ReactDOM.createPortal(
    <>
      <Modal
        title={props.title}
        visible={props.visible}
        footer={null}
        destroyOnClose={true}
        onCancel={props.handleCancel}
        width={"100vh"}
      >
        <div>
          <Row>
            <Col span={16}>
              <Form
                name="Entrega"
                initialValues={{ remember: true }}
                layout="vertical"
              >
                <Row gutter={[48, 8]}>
                  <Col className="gutter-row" span={12}>
                    <Form.Item
                      label="Nombre del Cliente"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "¡Por favor ingrese el nombre del cliente",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese nombre del cliente"
                        name="username"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Form.Item
                      label="Apellidos"
                      name="lastname"
                      rules={[
                        {
                          required: true,
                          message:
                            "¡Por favor ingrese los apellidos del cliente",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese los apellidos"
                        name="last"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Form.Item
                      label="Nombre de la Calle"
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: "¡Por favor ingrese el nombre de la calle",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese el nombre de la calle"
                        name="address"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Form.Item
                      label="Colonia/Municipio"
                      name="colonia"
                      rules={[
                        {
                          required: true,
                          message: "¡Por favor ingrese la colonia o municipio!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese el nombre de la colonia o municipio"
                        name="colonia"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Form.Item
                      label="Número interior o exterior"
                      name="numhouse"
                      tooltip={{
                        title: "Si no tiene numero deje vacio esta casilla",
                        icon: <InfoCircleOutlined />,
                      }}
                    >
                      <Input
                        placeholder="S/N"
                        name="address"
                        style={{ width: "48px" }}
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Form.Item
                      label="Código Postal"
                      name="postalcode"
                      rules={[
                        {
                          required: true,
                          message: "¡Por favor ingrese el código postal!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="00000"
                        name="postal"
                        style={{ width: "64px" }}
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Form.Item label="Ciudad" name="city">
                      <Input
                        placeholder="Ingrese el nombre de la ciudad"
                        name="postal"
                      ></Input>
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Form.Item
                      label="Estado"
                      name="state"
                      rules={[
                        {
                          required: true,
                          message: "¡Por favor ingrese el nombre del estado!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Ingrese el estado"
                        name="state"
                      ></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <div className={styles["container-btn-form"]}>
                  <Button danger>Cancelar</Button>
                  <Button type="primary">Guardar</Button>
                </div>
              </Form>
            </Col>
            <Col span={8}>
              <Row gutter={[8, 16]}>
                <Col className="gutter-row" span={24}></Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Modal>
    </>,
    document.getElementById("modal-container")
  );
}
