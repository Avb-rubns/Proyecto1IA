import { PageHeader, Button } from "antd";

export default function HeadPlanRoute(props) {
  return (
    <>
      <PageHeader
        ghost={false}
        title="Planea una ruta"
        extra={[
          <Button
            key="1"
            value="default"
            type="primary"
            onClick={props.showModal}
          >
            Planear Ruta
          </Button>,
        ]}
      ></PageHeader>
    </>
  );
}
