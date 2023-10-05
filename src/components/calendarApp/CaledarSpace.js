import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './Calendar.scss';
import drawCalendar from './generateCalendarFun/generate';
//This code provide whole calendar logic





const CaledarSpace = () => {
 
 
  const currentDate = {day: 15, month: 9, year: 2023}


const year_start = 2021;
const year_end = currentDate.year + 4;
const calendar = drawCalendar(year_start, year_end);
const yearsArray = [];
for(let i = 0; calendar.length >= i; i++){
  yearsArray.push(month_days(false)[(i) % 12].name);
}

const [swiper, setSwiper] = useState(null);
const [swiperOffSetLeft, setSwiperOffSetLeft] = useState(0)
const inputs = document.querySelectorAll('.swiper-pagination-bullet');


return (
  <div className='ex_calendar'>
    <Swiper
      onSlideChange={(swiper)=>{
        const activeBullet = inputs[swiper.activeIndex];
        const containerBullet = document.querySelector('.swiper-pagination');
        if(activeBullet){
          containerBullet.scrollLeft = activeBullet.offsetLeft;
          console.log(activeBullet.offsetLeft)
        }


      }}
      className='box-form-swiper'
      modules={[ Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      initialSlide={2}
      direction="horizontal"
      onSwiper={setSwiper}
      pagination={{ clickable: true, renderBullet: (index, className) => {
      return `<span class="${className} month_${index}">${yearsArray[index]}</span>`;
      } }}

    >
        <div>
        {calendar.map((element, index)=>{
          return(
        <SwiperSlide>
            <div>
            <h1>{year_start + Math.floor((index)/12)} {month_days(false)[(index) % 12].name}</h1>
              <div className='days_box'>
                {element.map((el)=>{
                  return el;
                })}
              </div>
            </div>
        </SwiperSlide>
          ) 
        })}
        </div>
    </Swiper>

    </div>
  )
}

export default CaledarSpace