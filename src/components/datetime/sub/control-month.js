import Dom from '../dom'
export default class MonthControl {

  constructor() {
    this.prevEl = Dom.create('a', {'class': 'way-date-time__date-picker__date__prev-month'}, '');
    this.nextEl = Dom.create('a', {'class': 'way-date-time__date-picker__date__next-month'}, '');
  }

  next() {

  }

  prev() {

  }

  hide() {
    this.prevEl.style.display = 'none';
    this.nextEl.style.display = 'none';
  }

  show() {
    this.prevEl.style.display = 'block';
    this.nextEl.style.display = 'block';
  }

  render() {

  }

}