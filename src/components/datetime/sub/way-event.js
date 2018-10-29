export default class WayEvent {
  static click(el, callback) {
    WayEvent.addEvent(el, 'click', callback);
  }

  static addEvent(el, type, callback, flag = true) {
    el.addEventListener(type, callback, flag)
  }
}