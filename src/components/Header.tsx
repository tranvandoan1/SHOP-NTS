import styles from '../css/Home/home.module.css'
import React, { useEffect } from 'react'
import { Input, Badge, } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
const { Search } = Input;
const Header: React.FC = () => {

    const onSearch = (value: any) => console.log(value);
    useEffect(() => {
        const sticky = document.querySelectorAll("#navbar").offsetTop;
        console.log(sticky,'sticky')
        if (sticky) {
            window.onscroll = async function () {
                window.pageYOffset >= sticky
                    ? document.querySelectorAll("#navbar").classList.add("sticky")
                    : document.querySelectorAll("#navbar").classList.remove("sticky");
            };
        }
    }, []);
    return (
        <div className={styles.header}>
            <div className='header-content' id="navbar">
                <div className={styles.logo}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/order-94f58.appspot.com/o/images%2FSHOP-NTS%20(2).png?alt=media&token=7aa8ec58-398f-4ec0-96bc-577f6f5d5ca8" alt="" />
                </div>
                <div className='header-input'>
                    <Search
                        placeholder="Tìm kiếm..."
                        onSearch={onSearch}
                    />
                </div>

                <div className={styles.iconleft}>
                    <Badge count={5}>
                        <ShoppingCartOutlined className={styles.icon} />
                    </Badge>
                    <UserOutlined className={styles.icon} />
                </div>
            </div>
        </div>

    )
}

export default Header