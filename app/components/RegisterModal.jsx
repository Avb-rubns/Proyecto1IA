import {
  Modal,
  Typography,
  Form,
  Input,
  Row,
  Col,
  Space,
  InputNumber,
} from "antd";
import ReactDOM from "react-dom";

const { Text } = Typography;

export default function RegisterModal(props) {
  return ReactDOM.createPortal(
    <>
      <Modal
        title="Registro"
        visible={props.visible}
        okText="Registrar"
        onOk={props.handleOk}
        confirmLoading={props.confirmLoading}
        onCancel={props.handleCancel}
        width={"100vh"}
      >
        <Form name="register" layout="vertical">
          {/* Info basic*/}
          <Row gutter={[40, 15]}>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Nombre"
                name="username"
                rules={[
                  { required: true, message: "¡Porfavor ingrese su nombre!" },
                ]}
              >
                <Input placeholder="Ingrese su nombre" />
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
                <Input placeholder="Ingrese sus apellidos" />
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
                <Input placeholder="Ingrese sus apellidos" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Correo"
                name="username"
                rules={[
                  { required: true, message: "¡Porfavor ingrese su Correo!" },
                ]}
              >
                <Input placeholder="Ingrese su correo" />
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
                <Input.Password placeholder="Ingrese su contraseña" />
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
                name="address"
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
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Cólonia"
                name="namecolonis"
                rules={[
                  {
                    required: true,
                    message: "¡Porfavor ingrese el nombre de la cólonia!",
                  },
                ]}
              >
                <Input placeholder="Ingrese el nombre de la cólonia" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs>
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
                <InputNumber />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={4}>
              <Form.Item
                label="Código Postal"
                name="postal"
                rules={[
                  {
                    required: true,
                    message: "¡Porfavor ingrese el código postal!",
                  },
                ]}
              >
                <InputNumber placeholder="0000" />
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
                <Input placeholder="Ingrese el nombre de la ciudad o municipio" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
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
                <Input placeholder="Ingrese el nombre del estado" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>,
    document.getElementById("register-modal-container")
  );
}
