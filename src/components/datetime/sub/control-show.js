import Dom from '../dom'

export default class ShowControl {


  constructor() {
    this.el = Dom.create('div', {'class': 'way-date-time__date-picker__date__show'}, '');
    this.monthEl = Dom.create('span', {'class': 'show-month'}, '');
    this.yearEl = Dom.create('span', {'class': 'show-year'}, '');
  }

  setYear(year) {
    this.yearEl.textContent = year;
  }

  setMonth(month) {
    this.monthEl.textContent = month;
  }

  hide(type) {
    if(!type){
      this.yearEl.style.display = 'none';
      this.monthEl.style.display = 'none';
    }  
    
    if(type === 'month') {
      this.monthEl.style.display = 'none';
    }

    if(type === 'year') {
      this.yearEl.style.display = 'none';
    }
  }

  show() {
    this.yearEl.style.display = '';
    this.monthEl.style.display = '';
  }

  render() {
    Dom.append(this.el, this.yearEl, this.monthEl);
    return this.el;
  }


  update(year, month) {
    this.setYear(year);
    this.setMonth(month < 10 ? '0' + month : month);
  }

}