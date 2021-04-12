import styles from "../styles/PlanModal.module.css";
import { Col, Typography, Button, Divider } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Text } = Typography;

const deleteDelivery = async (ids) => {
  try {
    console.log(ids);
    const result = await fetch("http://localhost:3000/api/planDeliveries", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids }),
    }).then((res) => res.json());
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
              <p hidden>{props.idUser}</p>
              <Text style={{ marginLeft: "1rem" }}>{props.distance}</Text>
            </div>
            <Text>{props.destination_addresses}</Text>
          </div>
          <div className={styles["container-btn-delivery"]}>
            <Button type="text" icon={<EditOutlined />} />
            <Button
              type="text"
              onClick={() =>
                deleteDelivery({
                  idDelivery: props.idDelivery,
                  idUser: props.idUser,
                })
              }
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
