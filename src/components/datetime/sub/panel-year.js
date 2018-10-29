import IDatePanel, {DateMsgType} from './panel-date';
import Dom from "../dom";
import WayEvent from "./way-event";


export default class YearPanel extends IDatePanel {
  constructor(context) {
    super(context); 
    this.el = Dom.create('div', {class: 'way-date-time__date-picker__year'});
    this.items = [];
    this.years = [];
   
  }


  //点击年份后, 通知主面板,告知月份面板, 日面板更新界面
  clickYear(e, year) {
    // console.log(e, year)
    this.context.clickYear(e, year);
  }

  update() {
    
    this.render();
  }

  render() {
    const currentYear = this.context.date.getYear(); 
    this.el.innerHTML = '';
    this.items = [];
    for(let i = 6; i > 0; i--) {
 
      const year =  currentYear - i;
      const className = ["way-date-time__date-picker__year-item"];
      if(this.context.date.getYear() === year) {
        className.push("active");
      }
      const item = Dom.create('span', {"class": className.join(" ")}, year);
      WayEvent.click(item, (e) => {
        this.clickYear(e, year);
      });
      this.items.push(item);
 
    }


    for(let i = 0; i < 6; i++) {
      const year = currentYear + i;
      const className = ["way-date-time__date-picker__year-item"];
      if(this.context.date.getYear() === year) {
        className.push("active");
      }
      const item = Dom.create('span', {"class": className.join(" ")}, year);
      WayEvent.click(item, (e) => {
        this.clickYear(e, year);
      });
      this.items.push(item)
    }

    Dom.append(this.el, ...this.items);

    return this.el;
  }
}