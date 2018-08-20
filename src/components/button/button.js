import Vue from 'vue';
class Component {
    constructor() {
       this.render ? (this.render = this.render) : this.render = (h)=>{ return h('')};
       console.log("Component constructor"); 
    }

    render(h) {
        return h("h1", null, "Component")
    }
}
const component = new Component();
console.log("component", component);

const VueComponent = Vue.extend(component);

console.log("VueComponent", VueComponent, VueComponent.prototype);

class Button extends VueComponent {
  constructor(button, options) {
      super(options);
      this.render ? (this.render = this.render) : this.render = (h)=>{ return h('')};
      this.button = button;
  }

  render(h) {
    return h("h1", null, "")
  }
}

class BorderButton extends Button {
     
    render(h) {
      return h("div", {}, ["this is test"])
    }
}


class BackgroundButton extends Button {
   

   render(h) {
    
     const node =  this.button.render(h);
     console.log(node, "hello", this.button)
    
     return node;
   }
}

 

const button = new Button({render() {
    return h('h1', null, '');
}});
console.log("--------------------->", button)
const border = new BorderButton(button);
console.log("--------------------->")
const background = new BackgroundButton(border);

console.log(background)
export default background;