import Logged from './LoggedInApp';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Register from './Register';
import SingIn from './SingIn';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes,  } from 'react-router-dom';
import { useAuth } from './firebase-config/AuthContext';
function App() {
  useEffect(()=>{
    console.log('something');
  })

  const auth = useAuth();
  const ProtectedRouteUnlogged = ({children}) =>{
    if(!auth.currentUser){
      console.log(auth.currentUser);
      return <Navigate to='/login' />
    }
    return children
  }

  const [logRegMess, setLogRegMess] = useState('');
  const app_options_menu = ['Rejestracja', 'Logowanie'];
  const [swiper, setSwiper] = useState(null);
  // const userToken = sessionStorage.getItem('userToken');
  // if(userToken){

  //   auth.singInWithToken(userToken);
  // }

  return (
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
                  <SwiperSlide><SingIn logRegMess={setLogRegMess}/></SwiperSlide>
                </Swiper>
              </div>
              </div>
            
            } 
            
            />
            <Route path='/*' element={<ProtectedRouteUnlogged><Logged /></ProtectedRouteUnlogged>} />
            </Routes>
          </BrowserRouter>
          
    </div>
  );
}

export default App;
