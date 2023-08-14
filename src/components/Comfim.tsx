import { CameraOutlined } from "@ant-design/icons";
import { Avatar, Input, Modal } from "antd";
import React, { useState } from "react";
import "./css/comfim.css";
const { TextArea } = Input;
type Props = {
    btnReject: () => void;
    btnComfim: () => void;
    data: any;
    title: string;
    conent: string;
    isModalOpen: boolean;
};

const Comfim = ({
    btnReject,
    btnComfim,
    data,
    title,
    conent,
    isModalOpen,
}: Props) => {
    const handleOk = () => {
        // setIsModalOpen(false);

        btnComfim();
    };

    const handleCancel = () => {
        // setIsModalOpen(false);
        btnReject();
    };
    return (
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Xác nhận"
            cancelText="Hủy"
        >
            <div>
                <h5 style={{color:'red'}}>{title}</h5>
                <h6>{conent}</h6>
            </div>
        </Modal>
    );
};

export default Comfim;
