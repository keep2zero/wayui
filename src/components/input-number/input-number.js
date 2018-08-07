export  function FilterNumber(value) {
  this.value = value;
  this.isNumber();
}


const _prototype = {
  isNumber() {
    if(isNaN(this.value)) {
      this.value = this.value.replace(/[^\d]/ig, '');
    }
  },
}

Object.assign(FilterNumber.prototype, _prototype)



