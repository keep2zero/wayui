
import MonthControl from './control-month';
import YearControl from './control-year';
import ShowControl from './control-show';
import Dom from '../dom';
import WayEvent from './way-event';

export default class Control {

  constructor(picker) {
     this.picker = picker;
     this.el = Dom.create('div', {'class': 'way-date-time__date-picker__date'}, '');
     this.monthControl = new MonthControl(this);
     this.yearControl = new YearControl(this);
     this.showControl = new ShowControl(this);

     WayEvent.click(this.yearControl.nextEl, ()=>{
       this.picker.setNextYear();
     })

     WayEvent.click(this.yearControl.prevEl, () => {
       this.picker.setPrevYear();
     })

     WayEvent.click(this.monthControl.nextEl, () => {
       this.picker.setNextMonth();
     })

     WayEvent.click(this.monthControl.prevEl, () => {
       this.picker.setPrevMonth();
     })

     WayEvent.click(this.showControl.yearEl, () => {
       this.picker.changePanel('year'); 
       this.monthControl.hide()
       this.showControl.hide('month');
     })

     WayEvent.click(this.showControl.monthEl, () => {
       this.picker.changePanel('month');
     })


     

  }

  setShowYearMonth(year, month) {
    this.showControl.update(year, month);
  }

 
  

  render() {
    Dom.append(this.el, this.yearControl.prevEl, this.monthControl.prevEl);
    Dom.append(this.el, this.showControl.render());
    Dom.append(this.el, this.monthControl.nextEl, this.yearControl.nextEl);
    return this.el;
  }

  mount(parent) {
    this.render();
    Dom.append(parent, this.el);
  }

  update() {

  }
}