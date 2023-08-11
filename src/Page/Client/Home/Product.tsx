import styles from '../../../css/Home/product.module.css'


const Product = () => {
    return (
        <div className={styles.list_products}>
            <h3>Sản phẩm nổi bật</h3>
            <div className={styles['show-product']}>

            <div className={styles['products']}>
                <div className={styles['product-photo']}>
                    <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/08/ao-thun-in-hinh-theo-yeu-cau.jpg" alt="" />
                </div>
                <span className={styles['product-sale']}>-30%</span>
                <div className={styles['product-title']}>
                    <span className={styles['product-name']}>Áo thu mùa đông đẹp tuyệt vời sang xịn mịn</span>
                    <div className={styles['product-price']}>
                        <span>30.000đ</span>
                        <span>Đã bán : 30k</span>
                    </div>
                </div>
            </div>
            <div className={styles['products']} style={{marginLeft:20}}>
                <div className={styles['product-photo']}>
                    <img src="https://www.sangia.vn/uploads/Image/2020/11/14/%C3%81o%20thun%20in%20h%C3%ACnh%20%C4%91%E1%BA%B9p.jpg" alt="" />
                </div>
                <div className={styles['product-title']} >
                    <span className={styles['product-name']}>Áo thu mùa đông đẹp tuyệt vời sang xịn mịn</span>
                    <div className={styles['product-price']}>
                        <span>30.000đ</span>
                        <span>Đã bán : 30k</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Product