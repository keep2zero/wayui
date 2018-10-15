import WayComponent from "@/types/component";
import DatePicker from "./date-picker";
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
    let start = '';
    let end = '';
    if(this.type === TYPE.SINGLE) {
      start = new DatePicker(this.value);
    }

    if(this.type === TYPE.RANGE) {
      const date = this.value.split("-");
      start = new DatePicker({deafultDate:date[0], callback: this.selectDateCallback});
      end = new DatePicker({defaultDate:date[1], callback: this.selectDateCallback});
    }
    return {
      showPop: false,
      startDatePicker: start,
      endDatePicker: end
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

  updated() {
    if(this.showPop) {
      // this.datePicker.toBind()
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

  selectDateCallback() {
    console.log('call')
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
      <div class="way-date-time">
        <div class="way-date-time__select">
          {this.switchSelect} <way-icon icon="save"></way-icon>
        </div>

        {DateTimePop.call(this, h)}
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

  const start = `${this.startDatePicker.yearFormat}-${this.startDatePicker.monthFormat}-${this.startDatePicker.dayFormat}`;
  const end = `${this.endDatePicker.yearFormat}-${this.endDatePicker.monthFormat}-${this.endDatePicker.dayFormat}`;

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


function DateTimePop(h) {
  if(!this.showPop) return h('');
  
  const start = this.startDatePicker.render(h);
  let end = '';
  if(this.type === TYPE.RANGE) {
    end = this.endDatePicker.render(h);
  }
  // console.log(node,"pl")
  return (
    <div class="way-date-time__pop" ref="pop">
      <div class="way-date-time__pop-date">
        {start} {end}
      </div>
    </div>
  )
}


export default DateTime.INSTANCE();