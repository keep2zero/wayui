/**
 * @file 行组件代码, 行组件的一级组件必须是列组件. 他们一起组成wayui的布局组件.
 * 在wayui中, 栅格化处理是将整份分成24份来处理, 与以往的12作为分割比较, 24更细粒度的处理布局.
 * 布局中, 也可以通过flex方式来处理.
 * 
 * @author towaywu@gmail.com
 * @date 2018-09-14 09:29:38
 */
import WayComponent from '@/types/component';

const CLASSES = {
  float: 'way-row',
  flex: 'way-row-flex'
}
/**
 * @class 当前为行组件
 */
export default class WayRow extends WayComponent {
  props() {
    return {
      //列之间的间隔
      gutter: {
        type: Number,
        default: 0
      },

      //目前为float, flex两种方式
      // flex属性为
      // flex-direction: row | row-reverse | column | column-reverse
      // flex-wrap: wrap | no-wrap
      // flex-flow: [direction] [wrap]
      // =============
      // align-item:  flex-start | flex-end | center | stretch (垂直)
      // justify-content:   flex-start | flex-end | center | space-around | space-between | space-evenly (水平)



      // child
      // flex-basic
      // flex-grow
      // flex-shrink
      // flex: [grow] [shrink] [basic]
      // align-self: 与align-item同样的值, 这个是用来独立设置单个项
      // align-content: 与justify-content同样的值, 这个是用来独立设置单个项
      type: {
        type: String,
        default: 'float'
      },

      flow: {
        type: Array,
        default: () => []
      },

      align: {
        type: Array,
        default: () => []
      }

      

      
    }
  }

  computed() {
    return {
      /**
       * @method 根据间距大小来计算实际的间距处理
       */
      margin() {
        return this.gutter / 2;
      },

      /**
       * @member 根据布局类型来获取对应的类名(目前只有float, flex)
       */
      classes() {
        return CLASSES[this.type]
      }
    }
  }

  

  render(h) {
    const $slots = this.$slots.default;

    //计算卡槽
    const style = Object.create(null);
    if(this.gutter) {
      style.marginLeft = this.margin * -1 + "px";
      style.marginRight = this.margin * -1 + 'px'
    }


    if(this.type === 'flex') {
      if(this.flow.length > 0) {
        style.flexFlow = this.flow.join(" ");
      }

      if(this.align.length > 0) {
        this.align[0] && (style.alignItems = this.align[0]);
        this.align[1] && (style.justifyContent = this.align[1]);
      }
    }


    return (
      <div class={this.classes} style={style}>
        {$slots}
      </div>
    )
  }
}