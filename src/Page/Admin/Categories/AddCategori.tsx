import React, { useState } from 'react';
import { Button, Modal } from 'antd';
type Props={
    callBack:()=>void
    isModalOpen:boolean
}
const AddCategori: React.FC = ({isModalOpen,callBack}:Props) => {
  
  const showModal = () => {
};

const handleOk = () => {
};

const handleCancel = () => {
};
  return (
    <>
      <Button type="primary" onClick={callBack}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={callBack} onCancel={callBack}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default AddCategori;