import styles from "../styles/PlanModal.module.css";
import { Col, Typography, Button, Divider } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Text } = Typography;

export function Delivery(props) {
  return (
    <>
      <Col className="gutter-row" span={24} style={{ margin: 0, padding: 0 }}>
        <div className={styles["container-delivery"]}>
          <div>
            <div>
              <Text strong>{props.id}</Text>
              <Text style={{ marginLeft: "1rem" }}>{props.distance}</Text>
            </div>
            <Text>{props.address}</Text>
          </div>
          <div className={styles["container-btn-delivery"]}>
            <Button type="text" icon={<EditOutlined />}></Button>
            <Button type="text" danger icon={<DeleteOutlined />}></Button>
          </div>
        </div>
        <Divider style={{ margin: 0, padding: 0 }} />
      </Col>
    </>
  );
}
