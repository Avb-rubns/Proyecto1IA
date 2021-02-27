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
import { useState } from "react";

const { Title } = Typography;

export default function Login() {
  const {
    handleOk,
    handleCancel,
    confirmLoading,
    visible,
    showModal,
  } = useModal();

  const [form, setForm] = useState({ username: "", password: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async () => {
    const result = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form }),
    }).then((res) => res.json());
    console.log(result);
  };

  const onSubmitRegisterModal = async (data) => {
    try {
      const result = await fetch(
        "http://localhost:3000/api/users?register=true",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data }),
        }
      ).then((res) => res.json());
      handleCancel();
      console.log({ ResultadoOn: result });
    } catch (error) {
      console.log(error);
    }
  };

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
            name="login"
            initialValues={{ remember: true }}
            className={styles["form-container"]}
            layout="vertical"
            onFinish={onSubmit}
          >
            <Title style={{ textAlign: "center" }}>dLine</Title>
            <Form.Item
              label="Correo"
              name="username"
              rules={[
                { required: true, message: "¡Porfavor ingrese su Correo!" },
              ]}
            >
              <Input
                placeholder="Ingrese su correo"
                value={form.username}
                onChange={handleChange}
                name="username"
              />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                { required: true, message: "¡Porfavor ingrese su contraseña!" },
              ]}
            >
              <Input.Password
                name="password"
                placeholder="Ingrese su contraseña"
                value={form.userpass}
                onChange={handleChange}
              />
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
          handleOk={onSubmitRegisterModal}
          handleCancel={handleCancel}
          confirmLoading={confirmLoading}
          visible={visible}
          showModal={showModal}
        />
      )}
    </Template>
  );
}
