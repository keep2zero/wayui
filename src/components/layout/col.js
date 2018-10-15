/**
 * @file 列组件依赖父组件row. 
 */
import WayComponent from '@/types/component';

/**
 * @class 
 * width, align, flex, order, margin 目前只能在flex布局下使用
 */
export default class WayCol extends WayComponent {
  props() {
    return {
      span : {
        type: Number,
        default: 0
      },

      offset: {
        type: Number,
        default: 0
      },

      gutter: {
        type: Number,
        default: 0
      },
 
      /**
       * @member 宽度, 用于flex
       */
      width: {
        type: Number,
        default: 0
      },

      /**
       * @member 垂直, 水平布局方式 [align-self的值, align-content的值]
       */
      align: {
        type: Array,
        default: ()=>[]
      },

      /**
       * @member 项排序
       */
      order: {
        type: Number,
        default: 0
      },

      /**
       * @member 控制grow, shrink, basic. [grow, shrink, basic]
       */
      flex: {
        type: Array,
        default: ()=>[]
      },

      /**
       * @member 控制外边距
       */
      margin: {
        type: String,
        default: ''
      }


      
    }
  }

  render() {
    const parent = this.$parent;

    //计算卡槽
    const style = {};

    if(parent && parent.gutter) {
      style.paddingLeft = parent.gutter/2 + 'px';
      style.paddingRight = parent.gutter/2 + 'px';
    }

    //flex布局
    if(parent.type === 'flex') { 
      if(this.flex.length > 0) {
         style.flex = this.flex.join(" ");
      }
  
      if(this.order) {
        style.order = this.order;
      }
  
      if(this.align.length > 0) {
        if(this.align[0]) {
          style.alignSelf = this.align[0];
        }
        if(this.align[1]) {
          style.alignContent = this.align[1];
        }
      }

      if(this.width) {
        style.width = `${this.width}px`;
      }

      if(this.margin) {
        style.margin = this.margin;
      }
    }

    const classes = ['way-col', this.span && `way-col-${this.span}`, this.offset && `way-col-offset-${this.offset}`]; 


    return (
      <div class={classes} style={style}>
        {this.$slots.default}
      </div>
    )

  }
}