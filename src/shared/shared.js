 
function forEachObject(obj, fn) {
  Object.keys(obj).forEach(key => {fn(obj[key], key)})
}

export default class Shared {
  constructor(options = {}) {
    this.shared = {
      count: 0
    };
  }
  
  get state() {
    console.log("get shared date", this.shared)
    return this.shared;
  }

  set state(v) {
    setTimeout(()=>{console.log("set", v)}, 100);
  }
}