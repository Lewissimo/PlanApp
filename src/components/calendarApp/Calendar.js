import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import calendarPath from '../../media/calendar_icon.png';
import './Calendar.scss'
const Calendar = () => {
  return (
    <div className='calendar-option'>
        <img src={calendarPath} className='calendar-icon' />
        <h2>Nazwa kalendarza</h2>
    </div>
  )
}

export default Calendar