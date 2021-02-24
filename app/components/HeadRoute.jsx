import { PageHeader, Button, Dropdown, Menu } from "antd";

let today = new Date();
let date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

let dateTime = date;

function handleMenuClick(e) {
  console.log("click", e);
}

export default function HeadRoute(props) {
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item danger key="1" onClick={props.deleteAll}>
        Cancelar Ruta
      </Menu.Item>
      <Menu.Item danger key="2" onClick={props.delete}>
        Cancelar Entrega
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <PageHeader
        ghost={false}
        title={"Ruta de entrega: " + dateTime}
        extra={[
          <Button key="1" type="primary">
            Iniciar Entregas
          </Button>,
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button danger>Cancelar</Button>
          </Dropdown>,
          <Button onClick={props.showModal} key="2">
            Planear Ruta
          </Button>,
        ]}
      ></PageHeader>
    </>
  );
}
