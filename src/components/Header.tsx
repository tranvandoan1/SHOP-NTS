import styles from "../css/Home/home.module.css";
// @ts-ignore
import React, { useEffect, useState } from "react";
import { Input, Badge, Drawer } from "antd";
import {
    ShoppingCartOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import { Size } from './../assets/size';
const { Search } = Input;
const Header: React.FC = () => {
    const navigater = useNavigate();
    const sizeWindonw = Size()
    const [statusMenu, setStatusMenu] = useState(false);
    const onSearch = (value: any) => console.log(value);
    const renderUserCart = () => (
        <div className={styles.iconleft}>
            <Badge count={5}>
                <ShoppingCartOutlined className={styles.icon} />
            </Badge>
            <span className={styles['btn-login']} onClick={()=>navigater('/login')}>Đăng nhập</span>
        </div>
    );

    return (
        <div className={styles.header}>
            <div className="header-content" id="navbar">
                <div className={"logo"} onClick={() => navigater("/")}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/order-94f58.appspot.com/o/images%2FSHOP.png?alt=media&token=b1524eb8-9ca4-4e3d-b90c-7abb227345ae"
                        alt=""
                    />
                </div>
                <div className="header-input">
                    <Search placeholder="Tìm kiếm..." onSearch={onSearch} />
                </div>

                {sizeWindonw?.width <= 480 ? (
                    statusMenu == false ? (
                        <MenuUnfoldOutlined style={{ fontSize: 25, cursor: 'pointer' }} onClick={() => setStatusMenu(!statusMenu)} />
                    ) : (
                        <MenuFoldOutlined style={{ fontSize: 25, cursor: 'pointer' }} onClick={() => setStatusMenu(!statusMenu)} />
                    )
                ) : (
                    renderUserCart()
                )}
            </div>
            <Drawer title="Basic Drawer" placement="right" onClose={() => setStatusMenu(!statusMenu)} open={statusMenu}>
                {
                    renderUserCart()

                }
            </Drawer>
        </div>
    );
};

export default Header;
