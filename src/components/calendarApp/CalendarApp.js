import React from 'react'
import {Calendar} from 'react-big-calendar';
const CalendarApp = () => {
  return (
    <div className='calendar'>
      <div className='calendar-nav'></div>
      <div className='calendar-box'>
        <h3>Twoje kalendarze:</h3>
        <div className='your-calendars'>
            <div className='calendar-option'></div>
            <div className='calendar-option'></div>
            <div className='calendar-option'></div>
            <div className='calendar-option'></div>
        </div>
      </div>
    </div>
  )
}

export default CalendarApp
