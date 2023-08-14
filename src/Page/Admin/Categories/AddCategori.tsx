// @ts-ignore
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
type Props={
    callBack:()=>void
    isModalOpen:boolean
}
// @ts-ignore
const AddCategori: React.FC = ({isModalOpen,callBack}:Props) => {
  
// @ts-ignore
  const showModal = () => {
};

// @ts-ignore
const handleOk = () => {
};

// @ts-ignore
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