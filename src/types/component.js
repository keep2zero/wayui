import Vue from 'vue';
const HOOK = [
    //vue
    'data', 'props', 'propsData', 'computed', 'methods',
    'watch', 'el', 'template', 'render', 'renderError',
    'staticRenderFns', 'beforeCreate', 'created', 'beforeDestroy', 'destroyed',
    'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'activated', 'deactivated',
    'errorCaptured', 'directives', 'components', 'transitions', 'filters', 'provide',
    'inject', 'model', 'parent', 'mixins', 'name', 'extends', 'delimiters', 'comments', 'inheritAttrs',

     //Object
    '__lookupGetter__', '__lookupSetter__', '__defineGetter__', '__defineSetter__', 'hasOwnProperty',
    'constructor', 'isPrototypeOf', 'toLocaleString', 'valueOf', 'propertyIsEnumerable', 'toString'
]

const VueComponent = Vue.extend({});
const noop = () => {};
export default class WayComponent {

     static INSTANCE(options = {}) {
         return new this(options);
     }

      constructor(options) {
        const prop = getProps(this);
        this.methods =  {};
        // console.log(Object.hasOwnProperty(this, "change"),Object.prototype.hasOwnProperty.call(this, 'change'));
        for(const key in prop) {
          // console.log("key", key);
          if(HOOK.indexOf(key) === -1 && typeof this[key] === 'function') {
             this.methods[key] = prop[key];
          }
        }


        //  const vc = new VueComponent(options);
        // //  console.log("vc", vc)
        //  for(const key in vc) {
        //    this[key] = vc[key];
        //  }

        
         this.render = this.render;
         this.data = this.data || (() => ({}));
         this.props = this.props ? this.props() : noop();
         this.computed = this.computed ? this.computed() : noop();
         this.components = this.components ? this.components() : noop();
         this.watch = this.watch ? this.watch(): noop(); 
         this.mounted = this.mounted ? this.mounted : noop;
      }

}




function getProps(obj) {
  var p = {};
  for (; obj != null; obj = Object.getPrototypeOf(obj)) {
      var op = Object.getOwnPropertyNames(obj);
      for (var i=0; i < op.length; i++) {
          const name = op[i];
          p[name] = obj[name];
      }
           
               
  }
  return p;
}