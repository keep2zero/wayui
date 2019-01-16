 
import Input from "@/components/input";
import Button from '@/components/button';
import Tree from '@/components/Tree';
import Icon from '@/components/icon';
import EimIcon from '@/components/eimfont';
import AreaSelect from '@/components/area-select';
import Layout from '@/components/layout';
import Dialog from '@/components/dialog';
import Checkbox from '@/components/checkbox';
import Radio from '@/components/radio';
import Switch from '@/components/switch';
import Slider from '@/components/slider';
import InputNumber from '@/components/input-number';
import Scroller from '@/components/scroller';
import DateTime from '@/components/datetime';
import TreeLogic from '@/components/tree-logic';

//style
import "@/styles/index.scss";

//

let VueTarget = null;

const install = function(vue, option) {
  
  vue.component("WayInput", Input);
  vue.component('WayButton', Button);
  vue.component('HdAreaSelect', AreaSelect);
  vue.component('HdTree', Tree);
  vue.component('WayIcon', Icon);
  // vue.component('WayIcon', EimIcon);
  vue.component('Fe', EimIcon);
  vue.component('HdIcon', EimIcon);
  vue.component('WayRow', Layout.Row);
  vue.component('WayCol', Layout.Col);
  vue.component('HdDialog', Dialog);
  vue.component('HCheckbox', Checkbox);
  vue.component('HdRadio', Radio);
  vue.component('HdSwitch', Switch);
  vue.component('hdSlider', Slider);
  vue.component('HdInputNumber', InputNumber);
  vue.component('WayScroller', Scroller);
  vue.component('WayDateTime', DateTime);
  vue.component('WayTreeLogic', TreeLogic);
  VueTarget = vue;
  
 
  vue.mixin({
    beforeCreate() { 
      const options = this.$options;
      if(options.shared) {
        this.$shared = options.shared;
      }
      else if(options.parent && options.parent.$shared) {
        this.$shared = options.parent.$shared;
      }  
    
    }
  })
 
}

class Shared {
  constructor(options = {}) {

    this._vm = new VueTarget({
      data: {
        $$shared: options
      }
    }); 

    // console.log(VueTarget.util)
  }

  /**
   * 定义state的值
   * @param {string} key 
   * @param {object} val 
   */
  define(key, val) {
    VueTarget.set(this._vm._data.$$shared, key, val);
    // VueTarget.util.defineReactive(this._vm._data.$$shared, key, val);
    // this.state.__ob__.dep.notify()
  }

  /**
   * 定义属性
   * @param {String} key 
   * @param {Object} val 
   */
  defineProperty(key, val) {
    const dkey = `__${key}`;
    Object.defineProperty(this, key, {
      get() {
        return this._vm._data[dkey]
      }
    });

    VueTarget.util.defineReactive(this._vm._data, dkey, val);
    
    // forObject(val, (v, k) => {
    //   VueTarget.set(this._vm._data[dkey], k, v)
    //   // VueTarget.util.defineReactive(this._vm._data[dkey], k, v);
    // })
   
    
    
    // Object.defineProperty(this, key, {
    //   value: val
    // });
    // VueTarget.util.defineReactive(this, key, val);
    // const Ob = this.state.__ob__.constructor;
    // const watch = new Watcher(vm,   () => {
    //   this._vm._update(this.vm._render(), hydrating);
    // }, (a,b,c)=>{}, {
    // }, true /* isRenderWatcher */);
    // const w = new (this.state.__ob__.dep.subs[0].constructor)(this._vm, context, (a, b, c)=>{})
    // this[key].__ob__ = new Ob(this[key]);
    // this[key].__ob__.dep.subs.push(w)
    // this[key].__ob__.dep.notify();
  }
  
  get state() { 
    return this._vm._data.$$shared;
  }

  set state(v) {
    setTimeout(()=>{console.log("set", v)}, 100);
  }

  on(key, fn) {
    this._vm.$on(key, fn);
  }

  talk(key, args) {
    this._vm.$emit(key, args)
  }
}


function forObject(obj, fn) {
  Object.keys(obj).forEach(key => {
    fn(obj[key], key);
  })
}


export default {
  install,
  Shared
}