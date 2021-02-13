import Template from '../components/Template'
import {Form, Input, Button,Row, Col, Typography } from 'antd'
import { blue } from '@ant-design/colors'
import Image from 'next/image'
import styles from '../styles/acceso.module.css'

const { Title } = Typography;

export default function Home() {
  return (
    <Template title="Acceso">
      <Row style={{height:"100vh"}}> 
        <Col span={16} 
          className={styles['image-container']} >
         <Image src='/images/loginScreen.png' height={700} width={900}  />
        </Col>

        <Col span={8}  style={{background:blue[0], display:"flex", alignItems:"center"}} >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            style={{padding:"1.5rem", marginTop:"-3.5rem", width: "100%"}}
            layout="vertical"
          >
          <Title style={{textAlign:"center"}}>dLine</Title>
          <Form.Item
            label="Correo"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Ingrese su correo" />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Ingrese su contraseña"/>
          </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Template>
  )
}
