import { Table, Button, Dropdown, Menu } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

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
  const [idUser, setID] = useState(props.idUser);
  const [data, setData] = useState({});
  useEffect(async () => {
    await getPackages(idUser);
  }, []);

  const getPackages = async (idUser) => {
    const result = await fetch(
      "http://localhost:3000/api/user/?option=false&iduser=" + idUser
    ).then((res) => res.json());
    console.log(result.data);
    setData(result.data);
  };

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
          dataSource={data}
          columns={columns}
        />
      </div>
    </>
  );
}
