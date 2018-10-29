export default class WayDate {

  constructor() {
    const argLen = arguments.length;

    console.log("-->", ...arguments)
    if(argLen.length === 0) {
      this.date = new Date();
    } else if(argLen.length === 1) {

      
      const arg = arguments[0];
      if(typeof arg === 'string') {
        this.date = new Date(arg);
      } else if(typeof arg === 'number') {
        this.date = new Date(arg);
      }
    } else if(argLen.length === 2 && typeof arguments[0] === 'string') {
      // yyyy-mm-dd 2018-12-22; yyyy/mm/dd 2018/12/21 
     
        const value = arguments[0];
        const format = arguments[1];
        // todo
    
    } else {
      // console.log( arguments, arguments.constructor)
      this.date = new Date(...arguments)
    }
  }

  setYear(year) {
    this.date.setYear(year);
  }

  /**
   * 月份从1开始
   * @param {Number} month 
   */
  setMonth(month) {
    this.date.setMonth(month-1);
  }

  setDate(day) {
    this.date.setDate(day);
  }

  getYear() {
    return this.date.getFullYear();
  }

  /**
   * 月份是从0开始的, 我们转换为正常的状态. 获取到的月份从1开始
   */
  getMonth() {
    return this.date.getMonth() + 1;
  }

  getMonthFormat() {
    return this.getMonth() < 10 ? '0' + this.getMonth() : this.getMonth();
  }


  get format () {
    return this.getFormat();
  }
  getFormat() {
    return this.getYear() + "-" + this.getMonthFormat() + "-" + this.getDateFormat();
  }


  /**
   * 
   */
  getDate() {
    return this.date.getDate();
  }

  getDateFormat() {
    return this.getDate() < 10 ? '0' + this.getDate() : this.getDate();
  }

  /**
   * 我们会按照星期一, 二......这样开始
   */
  getDayOfWeek() {
    if(this.date.getDay() === 0) {
      return 7;
    }
    return this.date.getDay();
  }



  /**
   * @method
   * 获取当前日期月份的总天数
   */
  getDaysOfMonth() {
    const month = this.getMonth();
    const year = this.getYear();
  
    let day = 31;
    if ([4, 6, 9, 11].indexOf(month) > -1) {
      day = 30;
    }
  
    if (month === 2) {
      day = 28;
      if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        //闰年
        day = 29;
      }
  
    }

    return day;
  }


  getDaysListOfMonth() {
    const day = this.getDaysOfMonth();
    const index = new WayDate(this.getYear() + '-' + this.getMonthFormat() + '-01').getDayOfWeek();

    //获取前一个月
    let prevMonth = this.getMonth() - 1;
    let prevYear = this.getYear();
    if (this.getMonth() === 1) {
      prevMonth = 12;
      prevYear = this.getYear() - 1;
    }

    // prevMonth < 10 && (prevMonth = `0${prevMonth}`);
    const prevDate  = new WayDate(prevYear + '-' + prevMonth);
    const prevDay = prevDate.getDaysOfMonth();

    const days = []
    for (let i = 0; i < index; i++) {
      // days[i] = `${prevYear}-${prevMonth}-${prevDay - (index - 2 - i)}`;
      const d = prevDay - (index - 2 -i);
      days[i] = {
        year: prevYear,
        month: prevMonth,
        day: d,
        format: `${prevYear}-${prevMonth < 10 ? '0' + prevMonth : prevMonth}-${d < 10 ? '0' + d : d}`
        
      }
    }

    //当前月的天数
    let count = 1;
    for (let i = index - 1; i < day + (index - 1); i++ , count++) {
      // days[i] = `${this.getYear()}-${this.getMonth()}-${count}`;
      days[i] = {
        year: this.getYear(),
        month: this.getMonth(),
        day: count,
        format: `${this.getYear()}-${this.getMonthFormat()}-${count < 10 ? '0' + count : count}`
      }
    }

    

    return days;
  }

}