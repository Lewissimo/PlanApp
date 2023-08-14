import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ProductsSets from './productSets';
import HeaderShopApp from './HeaderShopApp'
import Options from './Options'
import './ShopApp.scss'

const ShopApp = () => {
  
  const app_options_menu = ['Produkty', 'Zestawy']

  return (
    <div className='shopApp-box'>
      <HeaderShopApp />
      <Swiper
      // install Swiper modules
      modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true, renderBullet: (index, className) => {
        return `<span class="${className}">${app_options_menu[index]}</span>`;
      } }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide><Options /></SwiperSlide>
        <SwiperSlide><ProductsSets /></SwiperSlide>
    </Swiper>
    </div>
    )
  
}

export default ShopApp

