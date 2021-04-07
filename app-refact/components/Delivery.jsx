import styles from "../styles/PlanModal.module.css";
import { Col, Typography, Button, Divider } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Text } = Typography;

const deleteDelivery = async (id) => {
  try {
    const result = await fetch(
      "http://localhost:3000/api/directioninfo/?id=" + id,
      {
        method: "DELETE",
      }
    ).then((res) => res.json());
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export function Delivery(props) {
  return (
    <>
      <Col className="gutter-row" span={24} style={{ margin: 0, padding: 0 }}>
        <div className={styles["container-delivery"]}>
          <div style={{ marginLeft: "1rem" }}>
            <div>
              <Text strong>{props.idDelivery}</Text>
              <Text style={{ marginLeft: "1rem" }}>{props.distance}</Text>
            </div>
            <Text>{props.destination_addresses}</Text>
          </div>
          <div className={styles["container-btn-delivery"]}>
            <Button type="text" icon={<EditOutlined />} />
            <Button
              type="text"
              onClick={() => deleteDelivery(props.idDelivery)}
              danger
              icon={<DeleteOutlined />}
            />
          </div>
        </div>
        <Divider style={{ margin: 0, padding: 0 }} />
      </Col>
    </>
  );
}
