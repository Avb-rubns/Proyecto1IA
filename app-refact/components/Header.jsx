import { Typography, Avatar, Button } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { blue } from "@ant-design/colors";
import styles from "../styles/Header.module.css";

const { Title } = Typography;

export default function Header(props) {
  return (
    <>
      <div style={{ background: blue[5] }}>
        <div className={styles["container-header"]}>
          <Title level={3}>
            <span className={styles["icon"]} />
            DLine
          </Title>
          <div className={styles["container-session"]}>
            <Avatar size="small" icon={<UserOutlined />} />
            <p>Ricardo Perez Perez</p>
            <Button
              type="text"
              style={{ color: "white" }}
              icon={<LogoutOutlined />}
              onClick={props.exit}
              size="small"
            />
          </div>
        </div>
      </div>
    </>
  );
}
