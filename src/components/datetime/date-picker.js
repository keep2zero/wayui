/**
 * 日期选择的逻辑
 * 1. 初始化时间:
 *   当前时间(年, 月, 日, 时间)的计算
 *   当前日显示不一样的效果
 *   按照星期来排版时间
 * 
 * 2. 顶部控制事件:
 *   上一年, 上一个月, 下一个月, 下一年: 需要执行时间的计算(每个月的天数; 月份, 日的显示效果)
 *   选定年事件, 选定日时间: 调用同一个时间计算
 *   点击日来选定时间: 调用时间计算
 */

/**
 * 细节处理:
 * 1. 禁止选择的日期
 * 2. 选择日期后的回调
 * 3. 起始时间不能大于结束时间
 * 4. 限制时间范围
 */

 /**
  * 计算每个月的天数:
  *   4, 6, 9, 11为30天
  *   1, 3, 5, 7, 8, 10, 12为31天
  *   2月份则需要计算年是否为闰年: 闰年为29天, 否则为28天
  * @param {Date} date 
  */
 function calcDayOfMonth(date) {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    let day = 31;
    if([4, 6, 9, 11].indexOf(month) > -1) {
      day = 30;
    }
    
    if(month === 2) {
      day = 28;
      if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        //闰年
        day = 29;
      }

    }
    
    return day;
 }

 /**
  * 获取某一天的星期数
  * @param {Date} date 
  */
 function calcDayOfWeek(year, month, day) {
   const date = new Date([year, month, day].join("-"));
   day = date.getDay();
   if(day === 0) day = 7;
   return day;
 }




export default class DatePicker {

  constructor(options) {

    this.callback = options.callback;

    const date = options.defaultDate ? new Date(options.defaultDate) : new Date();
    
    this.year = date.getFullYear();
    this.yearFormat = this.year;

    this.month = date.getMonth() + 1;
    this.monthFormat = this.month < 10 ? `0${this.month}` : this.month;

    this.day = date.getDate();
    this.dayFormat = this.day < 10 ? `0${this.day}` : this.day;

    this.years = [];
    this.months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    this.weeks = ['一', '二', '三', '四', '五', '六', '日'];
    this.days = this.calcDays();
    // this.calcYears();


    //
    this.panel = 'day';
    this.showMonth = '';
  } 

  setDate(year, month, day) {
    const date = new Date(`${year}-${month}-${day}`)
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = this.getDate()

    this.calcDays();
  }

  calcYears() {
    if(typeof this.year === 'string') this.year = parseInt(this.year);
    const years = [];
    for(let i = 6; i > 0 ; i--) {
      years.push(this.year - i);
    }

    for(let i = 0; i < 6; i++) {
      years.push(this.year + i);
    }

    this.years = years;

    this.yearFormat = this.years[0] + '-' + this.years[this.years.length - 1]

  }

  calcNextYears() {
    this.year = this.years[this.years.length - 1];
    this.calcYears();
  }

  calcPrevYears() {
    this.year = this.years[0];
    this.calcYears();
  }

  /**
   * 1. 获取当月的第一天的星期数, 然后将其放入数组的第几位
   * 2. 通过这个数组索引, 计算是否补前个月的日期. 
   */
  calcDays() {

    this.panel = 'day'
   
    const day = calcDayOfMonth(new Date(`${this.year}-${this.monthFormat}`));
    const index = calcDayOfWeek(this.year, this.monthFormat, '01');
    
    //获取前一个月
    let prevMonth = this.month - 1;
    let prevYear = this.year;
    if(this.month === 1) {
      prevMonth = 12;
      prevYear = this.year - 1;
    }
 
    // prevMonth < 10 && (prevMonth = `0${prevMonth}`);
     
    let prevDay = calcDayOfMonth(new Date(prevYear + '-' + prevMonth));
    
    const days = []
    for(let i = 0; i < index; i++) {
      days[i] = `${prevYear}-${prevMonth}-${prevDay - ( index - 2 - i)}`;
    }

    //当前月的天数
    let count = 1;
    for(let i = index-1; i < day + (index-1); i++, count++) {
      days[i] = `${this.year}-${this.month}-${count}`;
    }
    this.days = days;

    return days;

  }


  clickPrevMonth(e) {
    this.month--;
    if(this.month === 0) {
      this.month = 12;
      this.year--;
    }
    this.monthFormat = this.month;
    if(this.month < 10) {
      this.monthFormat = '0' + this.month;
    }
    this.yearFormat = this.year;
    // this.monthEL.textContent = this.month;
    this.calcDays();
  }

  clickNextMonth(e) {
    
    this.month++;
    if(this.month > 12) {
      this.month = 1;
      this.year++;
    }
    this.monthFormat = this.month;
    if(this.month < 10) {
      this.monthFormat = '0' + this.month;
    }

    this.yearFormat = this.year;
    this.calcDays();
    // this.monthEL.textContent = this.month;
  }

  clickPrevYear(e) {
    // console.log("go year", this, e.target)
    if(this.showMonth !== 'none') {
      this.year--;
      this.yearFormat = this.year;
      this.calcDays();
    } else if(this.panel === 'year'){
      this.calcPrevYears();
    } else if(this.panel === 'month') {
      this.year--;
      this.yearFormat = this.year;
    }
  }

  clickNextYear(e) {
    if(this.showMonth !== 'none') {
      this.year++;
      this.yearFormat = this.year;
      this.calcDays();
    } else if(this.panel === 'year'){
      this.calcNextYears();
    } else if(this.panel === 'month') {
      this.year++;
      this.yearFormat = this.year;
    }
  }


  //
  clickYear() {
    // console.log("this is test")
    this.calcYears();
    this.panel = 'year';
    this.showMonth = 'none';
    
  }

  clickMonth() {
    this.panel = 'month';
    this.showMonth = 'none';
  }

  selectMonth(item, index) {
    this.month = index + 1;
    this.monthFormat = this.month < 10 ? `0${this.month}` : this.month;
    this.panel = 'day';
    this.calcDays();
    this.showMonth = '';
  }

  selectYear(item) {
    this.year = item;
    this.yearFormat = this.year;
    this.panel = 'day';
    this.calcDays();
    this.showMonth = ''
  }

  selectDay(item) {
   
    const date = item.split("-");
    this.year = parseInt(date[0]);
    this.yearFormat = this.year;
    this.month = parseInt(date[1]);
    this.monthFormat = this.month < 10 ? `0${this.month}` : this.month;
    this.day = parseInt(date[2]);
    this.dayFormat = this.day < 10 ? '0'+this.day:this.day;
    this.calcDays();

    this.node.context.$emit("input", `${this.yearFormat}-${this.monthFormat}-${this.dayFormat}`);
    this.node.context.closeDateTime();

    this.callback(this.year, this.month, this.day);

  }



  switchPanel(h, type) {

    
    const month = (
      <div class="way-date-time__date-picker__month">
        {
          this.months.map( (item , index)=> {
            return ( 
              <span onClick={() => {this.selectMonth(item, index)}} class="way-date-time__date-picker__month-item">{item}</span>
            ) 
          })
        }
      </div>
    );

    const day = (
      <div>
      <div class="way-date-time__date-picker__week">
          {this.weeks.map(item=>(<span class="way-date-time__date-picker__week-item">{item}</span>))}
      </div>
      <div class="way-date-time__date-picker__day">
        {this.days.map(item => {

            //
            const dateItem = item.split("-");
            const date = new Date();
            const dayClass = ['way-date-time__date-picker__day-item'];
           
            const currentDay = dateItem[2] == date.getDate() && dateItem[1] == date.getMonth() + 1 && dateItem[0] == date.getFullYear();
            currentDay && dayClass.push('active');

            this.month != dateItem[1] && dayClass.push("disable");



          return (<span class={dayClass} onClick={()=>{this.selectDay(item)}}>{dateItem[2]}</span>)
        })}
      </div>
      </div>
    );

    const year = (
      <div class="way-date-time__date-picker__year">
        {
          this.years.map(item => {
            return (<span onClick={()=>{ this.selectYear(item)}} class="way-date-time__date-picker__year-item">{item}</span>)
          })
        }
      </div>
    );

    let node = day;

    switch(type) {
      case 'day':
        node = day;
        break;
      case 'month':
        node = month;
        break;
      case 'year':
        node = year;
        break;
      default:
        node = day;
    }

    return node;
  }

  render(h) {

    const node = (
      <div class="way-date-time__date-picker">
        <div class="way-date-time__date-picker__date">
          <div class="way-date-time__date-picker__date__prev-year" onClick={this.clickPrevYear.bind(this)}></div>
          <div class="way-date-time__date-picker__date__prev-month" style={{display: this.showMonth}} onClick={this.clickPrevMonth.bind(this)}></div>

          <div class="way-date-time__date-picker__date__show">
            <span class="show-year" onClick={this.clickYear.bind(this)}>{this.yearFormat}</span>
            <span class="show-month" style={{display: this.showMonth}} onClick={this.clickMonth.bind(this)}>{this.monthFormat}</span>
          </div>

          <div class="way-date-time__date-picker__date__next-month" style={{display: this.showMonth}} onClick={this.clickNextMonth.bind(this)}></div>
          <div class="way-date-time__date-picker__date__next-year" onClick={this.clickNextYear.bind(this)}></div>
        </div>
        {this.switchPanel(h, this.panel)}
        <div class="way-date-time__date-picker__control">
      
        </div>
      </div>
    )

    this.node = node;
    return node;
  }
}
