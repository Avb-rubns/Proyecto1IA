import { useState } from "react";

export default function useModal() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText] = useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return {
    showModal,
    handleCancel,
    visible,
    modalText,
  };
}
