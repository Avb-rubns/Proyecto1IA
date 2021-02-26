import Template from "../components/Template";
import {
  CodepenOutlined,
  SendOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Table, PageHeader, Button, Dropdown } from "antd";
import Nav from "../components/Nav";

const { Content, Sider } = Layout;

const dataSource = [
  {
    key: "1",
    package: "DPTA-6231-AX21",
    state: "Recibido",
    date: "22/02/21",
  },
  {
    key: "2",
    package: "DPTA-6231-AX22",
    state: "En camino",
    date: "",
  },
  {
    key: "3",
    package: "DPTA-6231-AX22",
    state: "En camino",
    date: "",
  },
  {
    key: "4",
    package: "DPTA-6231-AX22",
    state: "Recibo",
    date: "25/02/21",
  },
  {
    key: "5",
    package: "DPTA-6231-AX22",
    state: "En camino",
    date: "",
  },
];
const columns = [
  {
    title: "Entrega",
    dataIndex: "package",
    key: "package",
  },
  {
    title: "Estatus",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Fecha de Recibido",
    dataIndex: "date",
    key: "date",
  },
];

export default function listPackage(props) {
  function handleMenuClick(e) {
    console.log("click", e);
    if (e.key == 1) {
      console.log("Mostrar solo recibidos");
    } else {
      console.log("Mostrar solo en camino");
    }
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Recibido</Menu.Item>
      <Menu.Item key="2">En camino</Menu.Item>
    </Menu>
  );
  let filter = null;

  return (
    <Template title="Paquetes">
      <Layout>
        <Nav name={props.name} exit={props.exit} />
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              style={{
                height: "100%",
                borderRight: 1,
                paddingTop: "1.22rem",
                background: "white",
              }}
            >
              <Menu.Item key="1" icon={<SendOutlined />}>
                <strong>Lógistica de Rutas</strong>
              </Menu.Item>
              <Menu.Item key="2" icon={<CodepenOutlined />}>
                <strong>Paquetes</strong>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{ height: "100%", borderRight: 1, background: "white" }}
          >
            <PageHeader
              ghost={false}
              title={"Lista de paquetes: " + props.list}
              extra={[
                <Button
                  key="1"
                  value="default"
                  type="primary"
                  onClick={props.showModal}
                >
                  Rastrear un paquete
                </Button>,
              ]}
            ></PageHeader>
            {/*contenido*/}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "1.5rem",
                }}
              >
                <Dropdown overlay={menu} placement="bottomLeft">
                  <Button icon={<RightOutlined />} type="primary">
                    Filtros
                  </Button>
                </Dropdown>
              </div>
              <Table
                style={{ padding: "1rem 4rem" }}
                pagination={{ position: ["bottomCenter"] }}
                dataSource={dataSource}
                columns={columns}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Template>
  );
}
