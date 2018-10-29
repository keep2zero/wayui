export default class Dom {

  static create(tag, attr, content) {
    const dom = document.createElement(tag);
    content && (dom.textContent = content);
    if(attr) {
      Object.keys(attr).forEach(key => {
        dom.setAttribute(key, attr[key]);
      })
    }
    return dom;
  }

  static attr(el, attr) {
    if(arguments.length == 2) {
      Object.keys(attr).forEach(key => {
        el.setAttribute(key, attr[key]);
      })
    }

    if(arguments.length === 3) {
      el.setAttribute(arguments[1], arguments[2]);
    }

    if(arguments.length === 1) {
      const attrs = {};
      const names = el.getAttributeNames();
      names.forEach(name => {
        attrs[name] = el.getAttribute(name);
      })
      return attrs;
    }
  }

  static append(parent, ...child) {
    // console.log(parent, child)
    child.forEach(item => {
      parent.appendChild(item);
    })
    return parent;
  }



  constructor() {
    this.createContainer();
  }


  /**
   * 创建主容器
   */
  createContainer() {
    this.container = Dom.create('div', {class: 'way-date-time__date-picker'});
    Dom.append(this.container, this.createHead());
  }


  /**
   * 创建头部
   */
  createHead() {
    this.head = Dom.create('div', {class: 'way-date-time__date-picker__date'});

    //控制年, 月控件
    this.prevYear = Dom.create('a', {
      class:'way-date-time__date-picker__date__prev-year'
    }, '');

    this.prevMonth = Dom.create('a', {
      class: 'way-date-time__date-picker__date__prev-month'
    }, '');
    
    this.nextYear = Dom.create('a', {
      class: 'way-date-time__date-picker__date__next-year'
    });
    
    this.nextMonth = Dom.create('a', {
      class: 'way-date-time__date-picker__date__next-month'
    }, '');

    //展示年和月控件
    this.showContainer = Dom.create('div', {class: 'way-date-time__date-picker__date__show'})
    this.showYear = Dom.create('span', {class: 'show-year'});
    this.showMonth = Dom.create('span', {class: 'show-month'});
    // this.showContains.appendChild(this.showYear);
    // this.showContains.appendChild(this.showMonth);
    Dom.append(this.showContainer, this.showYear, this.showMonth);

    //
    Dom.append(this.head, this.prevYear, this.prevMonth, this.showContainer, this.nextMonth, this.nextYear);

    return this.head;
  }


  /**
   * 创建主体内容
   */
  createBody() {
     
  }


  createWeek() {
    this.showWeek = Dom.create('div', {class: 'way-date-time__date-picker__week'});
    this.showWeekItems = [];//星期一到星期日
  }

  createDays() {
    this.showDays = Dom.create('div', {class: 'way-date-time__date-picker__day'})
    this.showDaysItems = [];//每个月的总天数
  }

  createYears() {
    this.showYears = Dom.create('div', {class: 'way-date-time__date-picker__year'});
    this.showYearsItems = []
  }



}