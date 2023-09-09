import React, { useState } from 'react'
import photo from '../FriendsList/kamil.jpg'
import './Friends.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import PotentialFriendList from './PotentialFriendList';
import MyFriendList from './MyFriendList';

const FindFriends = () => {
    const app_options_menu = ['Szukaj znajomych', 'Twoi znajomi'];
    const [swiper, setSwiper] = useState(null);
  

  return (
    <div className='findFriends'>
        <Swiper 
            className='box-form-swiper'
            modules={[ Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={setSwiper}
            pagination={{ clickable: true, renderBullet: (index, className) => {
            return `<span className="${className}">${app_options_menu[index]}</span>`;
            } }}

            >
            <SwiperSlide><PotentialFriendList/></SwiperSlide>
            <SwiperSlide><MyFriendList /></SwiperSlide>
            </Swiper>
    </div>
  )
}

export default FindFriends
