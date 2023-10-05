import React from 'react'
import './Calendar.scss'
import Calendar from './Calendar';
import CaledarSpace from './CaledarSpace';
import { Link } from 'react-router-dom';

const CalendarApp = () => {
  
  return (
    <div className='calendar'>
        <h3>Twoje kalendarze:</h3>
        <div className='your-calendars row'>
            <Link to='/calendar_1' className=' col-12 col-sm-6 col-lg-4 col-xl-3'><div className='calendar-option'><Calendar/></div></Link>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><Calendar/></div>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><Calendar/></div>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><Calendar/></div>
        </div>
    </div>
  )
}

export default CalendarApp
