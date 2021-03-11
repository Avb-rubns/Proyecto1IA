import ReactDOM from "react-dom";
import { Modal, Form, Row, Col, Input, Space, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import styles from "../styles/Login.module.css";

export default function RegisterModal(props) {
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
        <Form
          name="register"
          initialValues={{ remember: true }}
          layout="vertical"
        >
          <Row gutter={[40, 15]}>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Nombre"
                name="username"
                rules={[
                  { required: true, message: "¡Por favor ingrese su nombre" },
                ]}
              >
                <Input placeholder="Ingrese su nombre" name="username"></Input>
              </Form.Item>
            </Col>

            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Apellidos"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "¡Por favor ingrese sus apellidos",
                  },
                ]}
              >
                <Input
                  placeholder="Ingrese sus apellidos"
                  name="lastname"
                ></Input>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Telefono"
                name="cell"
                rules={[
                  {
                    required: true,
                    message: "¡Por favor ingrese su número de telefono!",
                  },
                ]}
              >
                <Input placeholder="Ingrese su telefono" name="cell"></Input>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Correo"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su correo electronico",
                  },
                ]}
              >
                <Input
                  placeholder="Ingrese su correo electronico"
                  name="email"
                ></Input>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "¡Por favor ingrese una contraseña!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Ingrese una contraseña"
                  name="password"
                ></Input.Password>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Confirmar contraseña"
                name="passwordC"
                rules={[
                  {
                    required: true,
                    message: "¡Por favor ingrese una contraseña!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Ingrese una contraseña"
                  name="passwordC"
                ></Input.Password>
              </Form.Item>
            </Col>
            <Space></Space>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Nombre de la calle"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "¡Por favor ingrese el nombre de la calle!",
                  },
                ]}
              >
                <Input
                  placeholder="Ingrese el nombre de la calle"
                  name="address"
                ></Input>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
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
            <Col className="gutter-row" span={8}>
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
            <Col className="gutter-row" span={8}>
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
            <Col className="gutter-row" span={8}>
              <Form.Item label="Ciudad" name="city">
                <Input
                  placeholder="Ingrese el nombre de la ciudad"
                  name="postal"
                ></Input>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
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
                <Input placeholder="Ingrese el estado" name="state"></Input>
              </Form.Item>
            </Col>
          </Row>
          <div className={styles["container-btn-register"]}>
            <Button onClick={props.handleCancel}>Cancelar</Button>
            <Button type="primary" htmlType="submit">
              Registrarse
            </Button>
          </div>
        </Form>
      </Modal>
    </>,
    document.getElementById("modal-container")
  );
}
