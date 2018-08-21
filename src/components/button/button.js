import Component from '@/types/component';
 
class Button extends Component {
  constructor(button, options) {
      super(options); 
      this.width = 80;
      this.height = 32;
      this._button = button || null;
      this.text = "";  
      this.computed = {
 
      }
      
  }

  render(h) {
    const slot = this.$slots.default;  
    return <button  type="button"
    style={{width: this.width + 'px', height: this.height + 'px'}}>
      {this.text}{slot}
    </button>;
    
  }
}

class BorderButton extends Button {

    constructor(button) {
        super(button);
        this.borderColor = 'red';
        this.borderWidth = 1;
        this.borderStyle = 'solid';
    }

    render(h) {
      const node = super.render(h);
      node.data.style.borderColor =  this.borderColor;
      node.data.style.borderWidth = this.borderWidth;
      node.data.style.borderStyle = this.borderStyle;
      return node;
    }
}


class BackgroundButton extends BorderButton {

   constructor() {
     super() 
     this.props['backgorund'] = {
       type: String,
       default: '#fff'
     }
   }
   
   render(h) {
    
     const node =  super.render(h);
     return node;
   }
}

 

 
  
 
export default BackgroundButton.toComponent();