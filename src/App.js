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
function App() {

  const app_options_menu = ['Rejestracja', 'Logowanie'];

  return (
    // <AuthProvider>
    <div className='App'>
      <div className='box-form'>
        <Swiper
        className='box-form-swiper'
        modules={[ Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, renderBullet: (index, className) => {
        return `<span class="${className}">${app_options_menu[index]}</span>`;
        } }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
          <SwiperSlide><Register /></SwiperSlide>
          <SwiperSlide><SingIn /></SwiperSlide>
      </Swiper>
    </div>
  </div>
  // </AuthProvider>
  );
}

export default App;
