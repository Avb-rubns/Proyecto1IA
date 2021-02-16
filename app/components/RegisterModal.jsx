import { Modal } from "antd";
import ReactDOM from "react-dom";
import useModal from "../hooks/useModal";

export default function RegisterModal(props) {
  return ReactDOM.createPortal(
    <>
      <Modal
        title="Title"
        visible={props.visible}
        onOk={props.handleOk}
        confirmLoading={props.confirmLoading}
        onCancel={props.handleCancel}
      >
        <p>{props.modalText}</p>
      </Modal>
    </>,
    document.getElementById("register-modal-container")
  );
}
