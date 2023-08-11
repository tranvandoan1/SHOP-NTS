import styles from '../css/Home/home.module.css'
import React, { useState } from 'react'
import { Input, Badge, Carousel } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
const { Search } = Input;
const Header: React.FC = () => {

    const onSearch = (value: any) => console.log(value);
    return (
        <div className={styles.header}>
            <div className='header-content'>
                <div className={styles.logo}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/imageshopee-e80ee.appspot.com/o/images%2FSHOP-NTS%20(1).png?alt=media&token=3d5d8bfc-fd43-4970-b363-717670dcd5b9" alt="" />
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