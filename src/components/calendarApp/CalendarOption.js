import React from 'react'

const CalendarOption = () => {
  const weekDays = [
    'poniedziałek',
    'wtorek',
    'środa',
    'czwartek',
    'piątek',
    'sobota',
    'niedziela'
  ]

  
  const month = (isLeap)=>{
    const febDays = isLeap ? 29 : 28;

    return {
    'styczeń': 31,
    'luty': febDays,
    'marzec': 31,
    'kwiecień': 30,
    'maj': 31,
    'czerwiec': 30,
    'lipiec': 31,
    'sierpień': 31,
    'wrzesień': 30,
    'październik': 31,
    'listopad': 30,
    'grudzień': 31,
    }
  
  }
  

  const generateCalendar = (since, to) =>{
    const pattern = {year: 2020, isLeap: true, firtWeekDay: 3};
    const amountOfLeapYears = ( since - pattern.year ) % 4 !== 0 ? Math.floor( ( since - pattern.year ) / 4  + 1): Math.floor( ( since - pattern.year ) / 4);

    const currentYearStartWeekDay = ( since - pattern.year + amountOfLeapYears ) % 7 + pattern.firtWeekDay + 
    //2020 - 2028 = 8
    //1 + 3 + 2
    
  }
  

  return (
    <div className='option-box'>

    </div>
  )
}
export default CalendarOption

