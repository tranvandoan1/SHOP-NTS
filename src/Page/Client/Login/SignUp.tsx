// @ts-ignore
import React, { useState, useEffect } from "react";

import "./css/login.css";
import "./css/signUp.css";
// @ts-ignore
import { Button, Checkbox, Form, Input, Spin, Upload } from "antd";
import {
    CloseCircleOutlined,
    LockOutlined,
    PlusCircleOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
type Props = {};

// @ts-ignore
const SignUp = (props: Props) => {
    let navigator = useNavigate();
    const [imageUrlAvatar, setImageUrlAvatar] = useState<{ url: any; file: any }>(
        { url: undefined, file: undefined }
    );
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const UploadAvatatr = (file: any) => {
        setLoading(true);
        const src = URL.createObjectURL(file);
        setImageUrlAvatar({ url: src, file: file });
        setLoading(false);
    };
    const onFinish = (values: any) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="background-login">
            <div className={`login`} id="my-element">
                <div className="login-form">
                    <h3>Đăng ký</h3>
                    <Form
                        form={form}
                        name="basic"
                        style={{}}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Chưa nhập tên đăng nhập !",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Email hoặc số điện thoại"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                            />
                        </Form.Item>
                        <br />
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                placeholder="Mật khẩu"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                            />
                        </Form.Item>
                        <Form.Item
                            name="confirm"
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Chưa nhập lại password!",
                                },
                            ]}
                        >
                            <Input.Password
                                placeholder="Nhập lại mật khẩu"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                            />
                        </Form.Item>
                        <div className="upload-avatar">
                            <span>Avatar : </span>
                            <div className="avatar">
                                <Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                    beforeUpload={UploadAvatatr}
                                    className="upload-avatar"
                                >
                                    {imageUrlAvatar.file ? (
                                        <div className="box-image">
                                            <img src={imageUrlAvatar.url} className="image" />
                                        </div>
                                    ) : (
                                        <div>
                                            <div
                                                style={{
                                                    marginTop: 8,
                                                }}
                                            >
                                                {loading == true ? (
                                                    <Spin />
                                                ) : (
                                                    <PlusCircleOutlined
                                                        style={{
                                                            fontSize: 30,
                                                            opacity: 0.8,
                                                            color: "#ee4d2d",
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </Upload>
                                {imageUrlAvatar.file !== undefined && (
                                    <div
                                        onClick={() =>
                                            setImageUrlAvatar({ url: undefined, file: undefined })
                                        }
                                        className="upload-avatar-close"
                                    >
                                        <CloseCircleOutlined style={{ fontSize: 17 }} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                                span: 24,
                            }}
                        >
                            <Button type="primary" htmlType="submit" className="submit">
                                Đăng ký
                            </Button>
                        </Form.Item>
                    </Form>

                    <div className="container">
                        <span className="line"></span>
                        <span className="text">Hoặc</span>
                        <span className="line"></span>
                    </div>

                    <div className="button-login-google_add">
                        <Button
                            className="button-google_add"
                            onClick={() => navigator("/login")}
                        >
                            Quay lại
                        </Button>

                        <Button className="login-google">
                            <FcGoogle className="login-google-icon" />
                            <span>Đăng nhập Google</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
