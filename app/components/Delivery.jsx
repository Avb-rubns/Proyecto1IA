import { Col, Typography, Button, Divider } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Text } = Typography;

export function Delivery(props) {
  return (
    <>
      <Col span={20}>
        <div style={{ paddingTop: "7px", paddingBottom: "7px" }}>
          <Text strong style={{ paddingRight: "1rem" }}>
            {props.id}
          </Text>
          <Text style={{ fontSize: "12px" }}>{props.distance}Km</Text>
        </div>
        <Text style={{ fontSize: "12px" }}>{props.dir}</Text>
      </Col>
      <Col span={4}>
        <Button type="text" icon={<EditOutlined />}></Button>
        <Button type="text" danger icon={<DeleteOutlined />}></Button>
      </Col>
      <Divider style={{ margin: 0 }} />
    </>
  );
}
