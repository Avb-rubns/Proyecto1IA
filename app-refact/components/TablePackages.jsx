import { Table, Button, Dropdown, Menu } from "antd";
import { RightOutlined } from "@ant-design/icons";
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

export default function TablePackages(props) {
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
  return (
    <>
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
    </>
  );
}
