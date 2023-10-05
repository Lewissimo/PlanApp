import React from 'react'

//class year allow as to create year with corrent amount of months and days in months
class year{
  constructor(isLeap, firstWeekDay, yearNumber){
    this.isLeap = isLeap;
    this.firstWeekDay = firstWeekDay;
    this.yearNumber = yearNumber;

  }

  #whichWeekDays = () => {
    //everything is based on mathematical formulas

    
    const feb = this.isLeap ? 1 : 0; 
    //When month has 31 days then next month start with first week day moved free days forward
    //When has 30 days then 2 days forward
    //In February, it depends on whether the year is leap or not, then it is moved zero or one day forward.
    const addDaysTab = {january: 0, february: 3, march: feb + 3, april: feb + 6, may: feb + 8, juny: feb + 11, julie: feb + 13, august:  feb + 16, september: feb + 19, october: feb + 21, november: feb + 24, december: feb + 26}
    const firstMonthsDayTab = [];

    for(const [month, value] of Object.entries(addDaysTab)){
      //comming trough the aadDaysTab calculate number of first weekDay in every month
      //formula: 
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
      month.push({weekDayNum: weekDayNum, weekDayName: this.weekDaysNames[weekDayNum - 1], events: this.events});
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

  to++;
  const years = [];

  for(let i = 0; to - since > i; i++){
    const initData = getInitData(since + i);
    const yearObject = new year(initData.isLeap, initData.weekDay - 1, since + i);
    years.push(yearObject.year());
  }
  

  return years;
}

const drawCalendar = (year_start, year_end) => {
  const yearStart = year_start;
  const yearEnd = year_end;
  const calendarStructure = generateCalendar(yearStart, yearEnd);


  
  class day{
    
    constructor(type, month, year, day_of_month, month_string){
      
      this.type = type;
      this.year = year;
      this.month = month_string;
      this.day_of_month = day_of_month;
      if(month){

        this.id = year.toString() + month.toString() + day_of_month.toString();
      }
      this.spentMoney = 0;
      this.meals = [];
    }
    
    
    
    
    #add_note = (note) => {
      console.log(this.id); 
    }
    
    set spentMoney_(newspentMoney){
      this.spentMoney = newspentMoney;
    }
    
    add_meal(name, cost){
      this.meals.push({name: name, cost: cost});
    }
    
    create_day = () =>{
      
      if(this.type !== 'current'){
        return(
          <div className={`calendar_day ${this.type === 'before' ? 'calendar_day_before' : 'calendar_day_after'}`}>
            <h3>{this.day_of_month}</h3>
          </div>
        )
      }
      else{
        
        
        return(
          <div className='calendar_day calendar_day_current' id={this.id}>
          <h3>{this.day_of_month}</h3>
          <h2>{this.spentMoney}</h2>
          <div className='meals_box'>
            <ul>
              {this.meals.map(
                (element)=>{
                  return(
                    <li>`${element.name} ${element.cost}`</li>
                    )
                  })}
            </ul>
          </div>
        </div>
      )
    } 
    
  }
}

let swiper_pattern_slides = [];
let pre_days = 31;

calendarStructure.map((year, index_year)=>{
  const current_year = yearStart + index_year;
  year.map((month, index_month)=>{
    const current_month = index_month + 1;
    let monthDays = [];
    let first_day_month = month[0].weekDayNum;
    for(let i = 0; 42 > i; i++){
      
      if(first_day_month - 1 > i){
        const dayObject = new day('before', null, null, pre_days - first_day_month + i + 2)
        monthDays.push(dayObject.create_day());
      }
      else if((month[i - first_day_month + 1]) && (i - first_day_month + 1 < month.length)){
        const f_weekDay_tab = month_days(false);
        const f_weekDay = f_weekDay_tab[current_month - 1].name;
        
        
        const dayObject = new day('current', current_month, current_year, i - first_day_month + 2, f_weekDay)
        
        monthDays.push(dayObject.create_day());
        
      }
      else {
        const dayObject = new day('after', null, null, i - first_day_month + 2 - month.length)
        monthDays.push(dayObject.create_day())
      }
    }
    pre_days = month.length;
    swiper_pattern_slides.push(monthDays);
    pre_days = month.length;
  })
})    


return swiper_pattern_slides;

}
export default drawCalendar;