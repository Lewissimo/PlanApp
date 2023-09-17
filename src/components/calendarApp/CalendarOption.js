import React from 'react'
const currentDate = {day: 15, month: 9, year: 2023}


const CalendarOption = () => {
  class year{
    constructor(isLeap, firstWeekDay, yearNumber){
      this.isLeap = isLeap;
      this.firstWeekDay = firstWeekDay;
      this.yearNumber = yearNumber;

    }

    #whichWeekDays = () => {
      const feb = this.isLeap ? 1 : 0;
      const addDaysTab = {january: 0, february: 3, march: feb + 3, april: feb + 6, may: feb + 8, juny: feb + 11, julie: feb + 13, august:  feb + 16, september: feb + 19, october: feb + 21, november: feb + 24, december: feb + 26}
      const firstMonthsDayTab = [];

      for(const [month, value] of Object.entries(addDaysTab)){
        const weekDay = (value + this.firstWeekDay) % 7 === 0 ? 7 : (value + this.firstWeekDay) % 7;
        firstMonthsDayTab.push(weekDay);
      }
      
      return firstMonthsDayTab;
    }

    year = () => {
      const year = [];  
      const monthDays = month_days(this.isLeap);
      monthDays.map((key, index) => {
        const month_object = new month(key.days, key.name, this.#whichWeekDays()[index], {});
        year.push(month_object.getMonth());
      })
      return year;
    }
  } 

  class month{

    constructor(amountOfDays, name, firstWeekDay, events){
      this.amountOfDays = amountOfDays;
      this.name = name;
      this.firstWeekDay = firstWeekDay;
      this.events = events;
      this.weekDaysNames = [
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
        "Niedziela"
      ];
    }


    getMonth = () => {
      const month = [];
      for(let i = 0; this.amountOfDays > i; i++){
        const weekDayNum = (i + 1 + this.firstWeekDay) % 7 === 0 ? 7 : (i + 1 + this.firstWeekDay) % 7;
        month.push({weekDayName: this.weekDaysNames[weekDayNum - 1], events: this.events});
      }
      return month;
    }
  }


  const month_days = (isLeap)=>{
    const febDays = isLeap ? 29 : 28;

    return [
    {name: 'styczeń', days: 31},
    {name: 'luty', days: febDays},
    {name: 'marzec', days: 31},
    {name: 'kwiecień', days: 30},
    {name: 'maj', days: 31},
    {name: 'czerwiec', days: 30},
    {name: 'lipiec', days: 31},
    {name: 'sierpień', days: 31},
    {name: 'wrzesień', days: 30},
    {name: 'październik', days: 31},
    {name: 'listopad', days: 30},
    {name: 'grudzień', days: 31},
    ]
  }

  const getInitData = (since) => {
    const pattern = {year: 2020, isLeap: true, firtWeekDay: 3};
    if (since === pattern.year) return {isLeap: true, weekDay: 3};
    const isLeap = ( since - pattern.year ) % 4 !== 0 ? false : true;
    const amountOfLeapYears = isLeap ? Math.floor( ( since - pattern.year ) / 4): Math.floor( ( since - pattern.year ) / 4) + 1;
    const currentYearStartWeekDay = ( since - pattern.year + amountOfLeapYears  + pattern.firtWeekDay) % 7; 
    const weekDay = (currentYearStartWeekDay === 0) ? 7 : currentYearStartWeekDay;

    return {isLeap: isLeap, weekDay: weekDay};
  }

  
  const generateCalendar = (since, to) =>{

    
    const years = [];

    for(let i = 0; to - since > i; i++){
      const initData = getInitData(since + i);
      const yearObject = new year(initData.isLeap, initData.weekDay - 1, since + i);
      years.push(yearObject.year());
    }
    

    console.log(years);
  }
  generateCalendar(2020, 2033);
  return (
    <div className='option-box'>
    </div>
  )
}
export default CalendarOption