import React from 'react'
import './Calendar.scss'
import Calendar from './Calendar';
const CalendarApp = () => {
  return (
    <div className='calendar'>
        <h3>Twoje kalendarze:</h3>
        <div className='your-calendars row'>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><Calendar/></div>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><Calendar/></div>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><Calendar/></div>
            <div className='calendar-option col-12 col-sm-6 col-lg-4 col-xl-3'><Calendar/></div>
        </div>
    </div>
  )
}

export default CalendarApp
