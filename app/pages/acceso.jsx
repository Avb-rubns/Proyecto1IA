import Template from "../components/Template";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  Divider,
  Tooltip,
} from "antd";
import { blue } from "@ant-design/colors";
import Image from "next/image";
import styles from "../styles/acceso.module.css";
import RegisterModal from "../components/RegisterModal";
import useModal from "../hooks/useModal";

const { Title } = Typography;

export default function Home() {
  const {
    handleOk,
    handleCancel,
    confirmLoading,
    modalText,
    visible,
    showModal,
  } = useModal();

  return (
    <Template title="Acceso">
      <Row style={{ height: "100vh" }}>
        <Col span={16} className={styles["image-container"]}>
          <Image src="/images/loginScreen.png" height={700} width={900} />
        </Col>

        <Col
          span={8}
          className={styles["container-aside"]}
          style={{ background: blue[0] }}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            className={styles["form-container"]}
            layout="vertical"
          >
            <Title style={{ textAlign: "center" }}>dLine</Title>
            <Form.Item
              label="Correo"
              name="username"
              rules={[
                { required: true, message: "¡Porfavor ingrese su Correo!" },
              ]}
            >
              <Input placeholder="Ingrese su correo" />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                { required: true, message: "¡Porfavor ingrese su contraseña!" },
              ]}
            >
              <Input.Password placeholder="Ingrese su contraseña" />
            </Form.Item>
            <Form.Item className={styles["a"]}>
              <Tooltip title="¿Resetear contraseña?">
                <a href="#API">¿No recuerdas la contraseña?</a>
              </Tooltip>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Ingresar
              </Button>
              <Divider />
            </Form.Item>
          </Form>
          <div className={styles["btn-reg"]}>
            <Button onClick={showModal} size="middle">
              Registrarse
            </Button>
          </div>
        </Col>
      </Row>
      {visible && (
        <RegisterModal
          visible={visible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          confirmLoading={confirmLoading}
          modalText={modalText}
          visible={visible}
          showModal={showModal}
        />
      )}
    </Template>
  );
}
