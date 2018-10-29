import Dom from '../dom';
import Control from './control';
import Panel from './panel';
/**
 * 这个类, 主要是用于沟通作用
 * 1. 与control, panel沟通
 * 2. 与vue对象沟通
 */
export default class Picker {
  constructor(context) {
    this.context = context;
    this.el = Dom.create('div', { 'class': 'way-date-time__date-picker' }, '')
    this.control = new Control(this);
    this.panel = new Panel(this);

    this.control.setShowYearMonth(this.panel.getYear(), this.panel.getMonth())
  }


  setNextYear() {
    const year = this.panel.getYear()+1;
    this.control.setShowYearMonth(year, this.panel.getMonth());
    this.panel.setYear(year);
    this.panel.notify();
  }



  setPrevYear() {
    const year = this.panel.getYear() - 1;
    this.control.setShowYearMonth(year, this.panel.getMonth());
    this.panel.setYear(year);
    this.panel.notify();
  }

  setNextMonth() {
    let month = this.panel.getMonth() + 1;

    if(month === 13) {
      month = 1;
      this.panel.setYear(this.panel.getYear() + 1);
    }

    this.control.setShowYearMonth(this.panel.getYear(), month);
    this.panel.setMonth(month);
    this.panel.notify();
  }

  setPrevMonth() {
    let month = this.panel.getMonth() - 1;

    if(month === 0) {
      month = 12;
      this.panel.setYear(this.panel.getYear() - 1);
    }

     

    this.control.setShowYearMonth(this.panel.getYear(), month);
    this.panel.setMonth(month);
    this.panel.notify();
  }

  changePanel(type) {
    this.el.removeChild(this.el.lastChild);
    const panel = this.panel.setPanel(type);
    Dom.append(this.el, panel);
  }

  response(day) {
    this.context.$emit("input", day.format);
  }
   
 

  render() {
     
    Dom.append(this.el, this.control.render(), this.panel.render())
    return this.el;
  }


  mount(parent) {
     
    Dom.append(parent, this.render());
  }

  unmount(parent) {
    parent.removeChild(this.el);
  }


}