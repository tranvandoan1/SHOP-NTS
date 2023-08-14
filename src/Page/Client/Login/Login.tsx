import React, { useState, useEffect } from "react";
import "./css/login.css";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
type Props = {};

const Login = (props: Props) => {
    const [timeClassName, setTimeClassName] = useState<boolean>(false)
    const navigator = useNavigate()
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="background-login">
            <div className={`login `}>
                <div className="login-form ">
                    <h3>Đăng nhập</h3>
                    <Form
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
                                    message: "Chưa nhập mật khẩu !",
                                },
                            ]}
                        >
                            <Input.Password
                                placeholder="Mật khẩu"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                            />
                        </Form.Item>
                        <div className="forgot-password">
                            <span className="forgot-password-text">Quên mật khẩu?</span>
                        </div>
                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                                span: 24,
                            }}
                        >
                            <Button type="primary" htmlType="submit" className="submit">
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>

                    <div className="container">
                        <span className="line"></span>
                        <span className="text">Hoặc</span>
                        <span className="line"></span>
                    </div>


                    <div className="button-login-google_add">

                        <Button className="button-google_add" onClick={() => navigator('/signup')}>Tạo tài khoản</Button>

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

export default Login;
