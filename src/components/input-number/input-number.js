export function FilterNumber(value) {
  this.value = value;
  this.isNumber();
}


const _prototype = {
  isNumber() {
    if (isNaN(this.value)) {
      this.value = this.value.replace(/[^\d]/ig, '');
    }
  },
}

Object.assign(FilterNumber.prototype, _prototype)

import WayComponent from '@/types/component';
export default class WayInputNumber extends WayComponent {

  props() {
    return {
      size: {
        type: Number,
        default: 32
      }
       
    }
  }

  data() {
    return {
      value: ""
    }
  }

  computed() {
    return {
      width() {
        if(this.value.length < 3) return 32;
        return this.value.length * 8 + 20;
      }
    }
  }

  watch() {
    return {
      value(val) {
        console.log(val, "watch")
        this.value = new FilterNumber(val);
      }
    }
  }

  change({target}) {
    this.value = target.value;
    this.$emit('input', this.value);
  }

  goup() {
     this.value++;
     this.$emit('input', this.value);
  }

  godown() {
     this.value--;
     this.$emit('input', this.value);
  }

  render(h) {
    return (
      <div class="way-input-number" style={{height: this.size + 'px'}}>
      
        <input type="text" class="way-input-number__input" ref="input" onInput={this.change} value={this.value} style={{width: this.width + 'px'}} />
        {/* <span class="way-input-number__format">$</span> */}
        <div class="way-input-number__control" >
            <span class="way-input-number__control-up" onClick={this.goup}>
              <way-icon icon="up"></way-icon>
            </span>
            <span class="way-input-number__control-down" onClick={this.godown}>
              <way-icon icon="down"></way-icon>
            </span>
        </div> 
      </div>
    )
  }
}



