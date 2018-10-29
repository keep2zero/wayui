import Dom from '../dom';
import IDatePanel, {DateMsgType} from './panel-date';
import WayDate from '../date';
import WayEvent from './way-event';

export default class DayPanel extends IDatePanel {
  constructor(context) {
    super(context);
    this.el = Dom.create('div', {class: 'way-date-time__date-picker__day'})
    this.showWeekItems = ["一", "二", "三", "四", "五", "六", "天"];//星期一到星期日
    this.showDaysItems = [];//每个月的总天数
    console.log('day', this.context.date)
    this.days = this.context.date.getDaysListOfMonth();
    this.selects = [];
     
  }

  update() {
    this.el.innerHTML = "";
    this.days = this.context.date.getDaysListOfMonth();
    this.render();
  }


  render() {
    this.el.innerHTML = ''
    const weekDoms = [];
    const dayDoms = [];
    for(let i = 0; i < 7; i++) {
      const item = Dom.create('span', {"class": "way-date-time__date-picker__week-item"}, this.showWeekItems[i]);
      weekDoms.push(item);
    }

    
    for(let i = 0; i < this.days.length; i++) {
      const className = ["way-date-time__date-picker__day-item"];
      const item = Dom.create('span', {'title': this.days[i].format}, this.days[i].day);
      
      if(this.context.getSelectDate().format === this.days[i].format) {
        className.push("active");
        this.selects.push(item);
      }  
      Dom.attr(item, "class", className.join(" "))

      WayEvent.click(item, (e) => {
        this.selects.length > 0 && this.selects.pop().classList.remove('active');
        this.context.clickDay(e, this.days[i]); 
        item.classList.add('active')
        this.selects.push(item);
      })
      dayDoms.push(item);
    }


     

    Dom.append(this.el, ...weekDoms);
    Dom.append(this.el, ...dayDoms);
   
    return this.el;

  }
}