import React from 'react'
import './Calendar.scss'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarOption from './CalendarOption'
const CalendarApp = () => {
  return (
    <div className='calendar'>
        <h3>Twoje kalendarze:</h3>
        <div className='your-calendars row'>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><CalendarMonthIcon className='calendar-icon'/></div>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><CalendarMonthIcon className='calendar-icon'/></div>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><CalendarMonthIcon className='calendar-icon'/></div>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><CalendarMonthIcon className='calendar-icon'/></div>
        </div>
    </div>
  )
}

export default CalendarApp
