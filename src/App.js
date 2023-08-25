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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopApp from './components/shoapp/ShopApp';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [logRegMess, setLogRegMess] = useState('');
  const app_options_menu = ['Rejestracja', 'Logowanie'];
  const [swiper, setSwiper] = useState(null);


  return (
    <MyRegLogProvider>
      <div className='App'>
        
          <BrowserRouter>
            <Routes>
              <Route path='/login' element={
                <div className='box'>
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
            } 
            />
            <Route path='/*' element={<Logged />} />
            </Routes>
          </BrowserRouter>
          
    </div>
  </MyRegLogProvider>
  );
}

export default App;
