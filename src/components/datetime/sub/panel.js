import DayPanel from './panel-day';
import MonthPanel from './panel-month';
import YearPanel from './panel-year';
import Dom from '../dom';
import WayDate from '../date';

export default class Panel {

  constructor(picker) {
    this.picker = picker;
    this.date = picker.context.value ? new WayDate(picker.context.value) : new WayDate();
 
    this.yearPanel = new YearPanel(this);
    this.monthPanel = new MonthPanel(this);
    this.dayPanel = new DayPanel(this);
    this.subjects = [this.yearPanel, this.monthPanel, this.dayPanel];
  }

  getSelectDate() {
    return this.picker.context.value ? new WayDate(this.picker.context.value) : new WayDate();
  }



  getYear() {
    return this.date.getYear();
  }

  getMonth() {
    return this.date.getMonth();
  }

  setDate(year, month, date) {
    this.date.setYear(year);
    this.date.setMonth(month);
    this.date.setDate(date);
    this.notify();
  }

  setYear(year) {
    this.date.setYear(year);
    this.notify();
  }

  setMonth(month) {
    this.date.setMonth(month);
    this.notify();
  }

  setDay(day) {
    this.date.setDate(day);
    this.notify();
  }




  clickDay(e, day) {
    console.log(day)
    this.picker.response(day);
  }


  clickMonth(e, month) {
    console.log(this.date.getYear(), month)
    this.setMonth(month);
    this.picker.control.setShowYearMonth(this.date.getYear(), month);
    this.picker.changePanel('day')
  }

  clickYear(e, year) {
    this.setYear(year)
    this.picker.control.setShowYearMonth(year, this.date.getMonth())
    this.picker.changePanel('day');
    this.picker.control.monthControl.show();
    this.picker.control.showControl.show();
  }
 

  setPanel(type) {
    console.log("----->", type)
    let panel = this.dayPanel.render();
    switch(type) {
      case 'day':
        panel = this.dayPanel.render();
        break;
      case 'month':
        panel = this.monthPanel.render();
        break;
      case 'year':
        panel = this.yearPanel.render();
        break;
      default:
        console.log('')
    }

    return panel;
  }
  


  notify() {
    for(let i = 0; i < this.subjects.length; i+=1) {
      this.subjects[i].update();
    }
  }

  render() {
    return this.setPanel('day');
  }
 
}