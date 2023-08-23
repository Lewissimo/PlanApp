import Logged from './LoggedInApp';
import './App.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Register from './Register';
import SingIn from './SingIn';
import MyRegLogProvider from './firebase-config/AuthContext';
import { useState } from 'react';

function App() {
  const [logRegMess, setLogRegMess] = useState('');
  const app_options_menu = ['Rejestracja', 'Logowanie'];
  const [swiper, setSwiper] = useState(null);


  return (
    <MyRegLogProvider>
      <div className='App'>
        <div className='box-form'>
          {logRegMess!==''?<h2 className='logSysMessage'>{logRegMess}</h2>:null}
        
          <Swiper
          
          className='box-form-swiper'
          modules={[ Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={setSwiper}
          pagination={{ clickable: true, renderBullet: (index, className) => {
          return `<span class="${className}">${app_options_menu[index]}</span>`;
          } }}

        >
            <SwiperSlide>{<Register swiper={swiper} logRegMess={setLogRegMess}/>}</SwiperSlide>
            <SwiperSlide><SingIn /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  </MyRegLogProvider>
  );
}

export default App;
