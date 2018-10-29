import WayComponent from "@/types/component";
import DatePicker from "./date-picker";
import Panel from "./sub/panel";
import Dom from "./dom";
import Control from "./sub/control";
import Picker from "./sub/picker";
import DateFormat from './date-format';
/**
 * @file
 * 功能:
 * 1. 选择单个日期
 * 2. 选择单个时间
 * 3. 选择日期时间段
 * 4. 选择时间段
 */

 const TYPE = {
   SINGLE: 'single',
   RANGE: 'range'
 }
class DateTime extends WayComponent {
  constructor() {
    super({})
  }

  data() {

    DateFormat.getDate("yyyy%MM%dd HH:mm:ss")
    DateFormat.parseDate("2018-10-22 12:22:11", "yyyy-MM-dd HH:mmss");
    let start = '';
    let end = '';
    if(this.type === TYPE.SINGLE) {
      start = new DatePicker({defaultDate: this.value});
    }

    let range = []
    if(this.type === TYPE.RANGE) {
      const date = this.value.split("~");
      range = [date[0], date[1]]
      start = new DatePicker({
        deafultDate:date[0], 
        callback: this.selectDateCallback, 
        dayCallback: this.dayCallback,
        context: this,
      });
      end = new DatePicker({
        defaultDate:date[1], 
        callback: this.selectDateCallback, 
        dayCallback: this.dayCallback,
        context: this
      });
    }
    return {
      showPop: false,
      startDatePicker: start,
      endDatePicker: end,
      target: [],
      targetRange: range,
      picker : new Picker(this)
    }
  }

  props() {
    return {
      type: {
        type: String,
        default: TYPE.SINGLE
      },

      value: {
        type: String
      }
    }
  }

  watch() {
    return {
      showPop(val) {
        if(val) {
          console.log(this.$refs.pop)
          this.$refs.pop && this.picker.mount(this.$refs.pop);
        } else {
          this.$refs.pop && this.picker.unmount(this.$refs.pop);
        }
      }
    }
  }

 

  selectDateTime() {
    this.showPop = !this.showPop;
  }

  closeDateTime() {
    if(this.type === TYPE.SINGLE) {
      this.showPop = false;
    }

    if(this.type === TYPE.RANGE) {
      
    }
  }

 
  dayCallback(node, item) {
    // console.log(this)

    // delete this.target.__ob__;
    if(this.type === TYPE.RANGE) {
      // console.log(this, node, item)
 
    }
 
  }

  selectDateCallback(year, month, day, event) {
    // console.dir(event.target.classList)
    
    if(event.target.classList.contains('active')) {
      event.target.classList.remove('active');
      const index = this.target.indexOf(event.target);
      this.target.splice(index, 1);
      this.targetRange.splice(index, 1);
    } else {
      if(this.target.length > 1) {
        this.target.pop().classList.remove('active');
        this.targetRange.pop();
      }
      event.target.classList.add("active")
      this.target.push(event.target);
      this.targetRange.push(`${year}-${month}-${day}`);
    }
    console.log(this.target, this.targetRange)
  }

  computed() {
    return {
      switchSelect() {

        if(TYPE.RANGE === this.type) return Multi.call(this, this.$createElement);

        return Single.call(this, this.$createElement);
      }
    }
  }

  render(h) {
     
    return (
      <div class="way-date-time" ref="dateTime">
        <div class="way-date-time__select">
          {this.switchSelect} <way-icon icon="save"></way-icon>
        </div>

         <div class="way-date-time__pop" v-show={this.showPop}>
      <div class="way-date-time__pop-date" ref="pop">
         
      </div>
    </div>
      </div>
    )
  }


}

function Single(h) {
  return (
    <div class="way-date-time__select-single" onClick={this.selectDateTime}>
      <input class="way-date-time__select-input" readonly type="text" placeholder="请输入日期" value={this.value} />
    </div>
  )
}

function Multi(h) {

  let start = parseInt(this.targetRange[0].split('-').join(''));
  let end = parseInt(this.targetRange[1].split('-').join(''));
  if(start > end) {
    const tem = this.targetRange[0];
    start = this.targetRange[1];
    end = tem;
  }
  // const start = `${this.startDatePicker.yearFormat}-${this.startDatePicker.monthFormat}-${this.startDatePicker.dayFormat}`;
  // const end = `${this.endDatePicker.yearFormat}-${this.endDatePicker.monthFormat}-${this.endDatePicker.dayFormat}`;

  return (
    <div class="way-date-time__select-multi" onClick={this.selectDateTime}>
      <div class="way-date-time__select-multi__start">
        <input class="way-date-time__select-input" readonly type="text" placeholder="请输入日期" value={start} />
      </div>
      <div class="way-date-time__select-multi__split">~</div>
      <div class="way-date-time__select-multi__end">
        <input class="way-date-time__select-input" readonly type="text" placeholder="请输入日期" value={end} />
      </div>
    </div>
  )
}

 


export default DateTime.INSTANCE();