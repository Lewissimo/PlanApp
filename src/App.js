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
import SignIn from './SignIn';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes,  } from 'react-router-dom';
import { useAuth } from './firebase-config/AuthContext';
function App() {
  const [isHover, setIsHover] = useState(false);
  const handleOnWheel = (e)=> {
    if(isHover){
      console.log('abc');
      const deltaX = e.deltaX;
      const deltaY = e.deltaY;
      if(deltaX < 0 || deltaY < 0){
        swiper.slideTo(0);
      }
      if(deltaX > 0 || deltaY > 0){

        swiper.slideTo(1);
      }
    }
  }
  
  useEffect(()=>{
    console.log('abc');
    window.addEventListener('wheel', handleOnWheel);
    
    return ()=>{

      window.removeEventListener('wheel', handleOnWheel);
    }
  },[isHover]);
  
  const auth = useAuth();
  
  const ProtectedRouteUnlogged = ({children}) =>{
    const isLogged = localStorage.getItem('isLogged');

    if(!auth.currentUser && !JSON.parse(isLogged)){
        return <Navigate to='/login' />;
      }
      if(auth.currentUser){
        return children;
      }
      
      
  }

  const [logRegMess, setLogRegMess] = useState('');
  const app_options_menu = ['Rejestracja', 'Logowanie'];
  const [swiper, setSwiper] = useState(null);




  return (
      <div className='App'>
        
          <BrowserRouter>
            <Routes>
              
              <Route path='/login' element={
              
                <div className='box'>
                <div className='box-form' onMouseEnter={() => {setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}>
                
                {logRegMess!==''?<h2 className='logSysMessage'>{logRegMess}</h2>:null}
              
                <Swiper
                  onSlideChange={()=>{
                    const inputs = document.querySelectorAll('input');
                    inputs.forEach((input) => {
                      input.blur();
                    })
                  }}
                  className='box-form-swiper'
                  modules={[ Pagination, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  initialSlide={2}
                  direction="horizontal"
                  onSwiper={setSwiper}
                  pagination={{ clickable: true, renderBullet: (index, className) => {
                  return `<span class="${className}">${app_options_menu[index]}</span>`;
                  } }}

                >
                  <SwiperSlide>{<Register swiper={swiper} logRegMess={setLogRegMess}/>}</SwiperSlide>
                  <SwiperSlide><SignIn logRegMess={setLogRegMess} removeWheelHandle={()=>{window.removeEventListener('wheel', handleOnWheel)}}/></SwiperSlide>
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
