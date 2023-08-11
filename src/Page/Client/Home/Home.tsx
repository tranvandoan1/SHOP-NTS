import React, { useState, useRef } from 'react'
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Input, Space, Carousel } from 'antd';
import Header from '../../../components/Header';
import '../../../css/responsive.css'

import '../../../css/cssAntd.css'

import '../../../css/Home/home.css'
import Product from './Product';
import Footer from '../../../components/Footer';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = () => {
  const slider = useRef(null);
  const onChange = (currentSlide: any) => {
    console.log(currentSlide);
  };
  return (
    <div>

      <Header />
      <div className='body'>
        <div className='slider'>
          <Carousel afterChange={onChange} className='slide-image' autoplay
            ref={slider}
          >
            <div>
              <img src="https://intphcm.com/data/upload/banner-thoi-trang-nam.jpg" alt="" />
            </div>
            <div>
              <img src="https://intphcm.com/data/upload/banner-thoi-trang-nam-dep.jpg" alt="" />
            </div>
            <div>
              <img src="https://arena.fpt.edu.vn/wp-content/uploads/2022/10/banner-thoi-trang-la-mot-phan-khong-the-thieu-trong-truyen-thong-1.jpg" alt="" />
            </div>

          </Carousel>
          <LeftOutlined className='slider-button_left' onClick={() => slider.current.prev()} />

          <RightOutlined className='slider-button_right' onClick={() => slider.current.next()}
          />

        </div>
        <Product />
      </div>
      <Footer />
    </div>
  )
}

export default Home