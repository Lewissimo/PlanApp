import React from 'react'
import './Home.scss'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ParkIcon from '@mui/icons-material/Park';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const Home = () => {
  return (
    <div className='home-box row'>
      <Link to='/shopapp' className='option-link col-12 col-sm-6 col-lg-4 col-xl-3'>
        <div className='option'>
            <ShoppingCartIcon className='shopApp-icon'/>
            <h3 className='option-title'>Utwórz zakupy</h3>
        </div>
      </Link>
      <Link to='/zakupyapp' className='option-link col-12 col-sm-6 col-lg-4 col-xl-3'>
        <div className='option'>
            <CalendarMonthIcon className='shopApp-icon'/>
            <h3 className='option-title'>KalendarzApp</h3>
        </div>
      </Link>
      <Link to='/zakupyapp' className='option-link col-12 col-sm-6 col-lg-4 col-xl-3'>
        <div className='option'>
            <NoteAltIcon className='shopApp-icon'/>
            <h3 className='option-title'>ListaZadańApp</h3>
        </div>
      </Link>
      <Link to='/zakupyapp' className='option-link col-12 col-sm-6 col-lg-4 col-xl-3'>
        <div className='option'>
            <SportsEsportsIcon className='shopApp-icon'/>
            <h3 className='option-title'>MiniGierkiApp</h3>
        </div>
      </Link>
      <Link to='/zakupyapp' className='option-link col-12 col-sm-6 col-lg-4 col-xl-3'>
        <div className='option'>
            <ParkIcon className='shopApp-icon'/>
            <h3 className='option-title'>ŚwiętaApp</h3>
        </div>
      </Link>
      <Link to='/zakupyapp' className='option-link col-12 col-sm-6 col-lg-4 col-xl-3'>
        <div className='option'>
            <AttachMoneyIcon className='shopApp-icon'/>
            <h3 className='option-title'>FinanseApp</h3>
        </div>
      </Link>
      
    </div>
  )
}

export default Home
