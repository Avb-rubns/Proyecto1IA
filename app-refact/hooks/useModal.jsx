import { useState } from "react";

export default function useModal() {
  const [visibleModal, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  return {
    showModal,
    handleOk,
    handleCancel,
    visibleModal,
    confirmLoading,
  };
}
