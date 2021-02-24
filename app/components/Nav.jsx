import { Layout, Button, Typography, Avatar } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { blue } from "@ant-design/colors";
import styles from "../styles/planear.module.css";

const { Title } = Typography;

const { Header } = Layout;

export default function Nav(props) {
  return (
    <>
      <Header
        style={{
          background: blue[5],
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title level={3}>Dline</Title>
        <div className={styles["info-avatar"]}>
          <Avatar size="small" icon={<UserOutlined />} />
          <p style={{ marginLeft: "1rem", color: "#ffffff" }}>{props.name}</p>
          <Button
            style={{ color: "white" }}
            type="text"
            icon={<LogoutOutlined />}
            onClick={props.exit}
          ></Button>
        </div>
      </Header>
    </>
  );
}
