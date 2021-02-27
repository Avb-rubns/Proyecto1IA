import { Modal, Typography, Form, Input, Row, Col, Space, Button } from "antd";
import ReactDOM from "react-dom";
import { useState } from "react";
import styles from "../styles/acceso.module.css";

const { Text } = Typography;

export default function RegisterModal(props) {
  const [formR, setForm] = useState({
    name: "",
    lastname: "",
    cell: "",
    password: "",
    nameaddress: "",
    colonia: "",
    numhouse: "",
    codepostal: "",
    city: "",
    country: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...formR, [name]: value });
  };
  const onKeyPressEvent = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!new RegExp("[0-9]").test(keyValue)) event.preventDefault();
    return;
  };
  return ReactDOM.createPortal(
    <>
      <Modal
        title="Registro"
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
          onFinish={props.handleOk}
        >
          {/* Info basic*/}
          <Row gutter={[40, 15]}>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Nombre"
                name="name"
                rules={[
                  { required: true, message: "¡Porfavor ingrese su nombre!" },
                ]}
              >
                <Input
                  placeholder="Ingrese su nombre"
                  name="name"
                  value={formR.name}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Apellidos"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "¡Porfavor ingrese sus apellidos!",
                  },
                ]}
              >
                <Input
                  placeholder="Ingrese sus apellidos"
                  name="lastname"
                  value={formR.lastname}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Telefono"
                name="cell"
                rules={[
                  {
                    required: true,
                    message: "¡Porfavor ingrese sus número de telefono!",
                  },
                ]}
              >
                <Input
                  placeholder="Ingrese sus telefono"
                  name="cell"
                  value={formR.cell}
                  onChange={handleChange}
                  onKeyPress={onKeyPressEvent}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Correo"
                name="email"
                rules={[
                  { required: true, message: "¡Porfavor ingrese su Correo!" },
                ]}
              >
                <Input
                  placeholder="Ingrese su correo"
                  name="email"
                  value={formR.email}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "¡Porfavor ingrese su contraseña!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Ingrese su contraseña"
                  name="password"
                  value={formR.password}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
          </Row>
          {/* address */}
          <Space>
            <Text strong>Direccón</Text>
          </Space>
          <Row gutter={[40, 15]}>
            <Col className="gutter-row" span={8}>
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
                  name="nameaddress"
                  value={formR.nameaddress}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Cólonia"
                name="colonia"
                rules={[
                  {
                    message: "¡Porfavor ingrese el nombre de la cólonia!",
                  },
                ]}
              >
                <Input
                  placeholder="Ingrese el nombre de la cólonia"
                  name="colonia"
                  value={formR.colonia}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={5}>
              <Form.Item
                label="Número exterio o interior"
                name="numhouse"
                rules={[
                  {
                    message: "¡Porfavor ingrese el número de su hogar!",
                  },
                ]}
              >
                <Input
                  name="numhouse"
                  value={formR.numhouse}
                  onChange={handleChange}
                  onKeyPress={onKeyPressEvent}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={5}>
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
                  value={formR.codepostal}
                  onChange={handleChange}
                  onKeyPress={onKeyPressEvent}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Ciudad o Municipio"
                name="city"
                rules={[
                  {
                    required: true,
                    message:
                      "¡Porfavor ingrese el nombre de la ciudad o municipio!",
                  },
                ]}
              >
                <Input
                  placeholder="Ingrese el nombre de la ciudad o municipio"
                  value={formR.city}
                  name="city"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Pais"
                name="country"
                rules={[
                  {
                    required: true,
                    message: "¡Porfavor ingrese el pais!",
                  },
                ]}
              >
                <Input
                  placeholder="Ingrese el nombre del pais"
                  value={formR.country}
                  name="country"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col className={"gutter-row"} span={24}>
              <Form.Item>
                <div className={styles["btn-space"]}>
                  <Button value="large" onClick={props.handleCancel}>
                    {" "}
                    Cancelar
                  </Button>
                  <Button value="large" type="primary" htmlType="submit">
                    Registrarse
                  </Button>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>,
    document.getElementById("modal-container")
  );
}
