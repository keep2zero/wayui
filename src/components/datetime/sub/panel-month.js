import IDatePanel, {DateMsgType} from './panel-date';
import Dom from "../dom";
import WayEvent from './way-event';

export default class MonthPanel extends IDatePanel{
  constructor(context) {
    super(context);
    this.el = Dom.create('div', {class: 'way-date-time__date-picker__month'});
    this.monthItem = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
  }

  update() {
    this.render();
  }

  accept(type, msg) {
    switch(type) {
      case DateMsgType.YEAR: 
        console.log("接收来自年份");
        break
      default:
        console.log('');
    }
  }

  
  render() {
    this.el.innerHTML = '';
    const doms = [];
    for(let i = 0; i < 12; i++) {
      const className = ["way-date-time__date-picker__month-item"];
      if(this.context.date.getMonth() === i + 1) {
        className.push("active")
      }
      const item = Dom.create("span", {"class": className.join(" ")}, this.monthItem[i]);
      WayEvent.click(item, (e) => {
        this.context.clickMonth(e, i + 1);
      })
      doms.push(item);
    }
    Dom.append(this.el, ...doms);
    return this.el;
  }
}