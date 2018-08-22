import Component from '@/types/component';
import {toEm} from '@/utils/css';
class Button extends Component {
  constructor(button, options) {
      super(options); 
      this.width = {
        type: String|Number,
        default: 'auto'
      };
      this.height = {
        type: String | Number,
        default: 'auto'
      };
      this._button = button || null;
      this.text = ""; 
      this.type = ""; 
      
  }

  render(h) {
    const slot = this.$slots.default;  
    const style = {width: toEm(this.width), height: toEm(this.height)};
    const classes = ['hd-button', this.type ? 'hd-button-' + this.type : ''];
    return (
      <div class={classes}> 
        <button class="hd-button__btn" type="button"  style={style}> {this.text}{slot} </button>
      </div>
    );
    
    
  }
}


class IconButton extends Button {

    constructor(button) {
        super(button);
        this.borderColor = '';
        this.borderWidth = 0;
        this.borderStyle = '';
        this.borderRadius = 0;
        this.icon = "";
    }

    render(h) {
      const node = super.render(h);
      node.data.style = {
        borderColor : this.borderColor,
        borderWidth : this.borderWidth,
        borderStyle : this.borderStyle,
        borderRadius: this.borderRadius
      }
      console.log(node)
      this.icon && node.children.unshift(<way-icon class="hd-button__icon" icon={this.icon}></way-icon>)
      return node;
    }
}


class BackgroundButton extends IconButton {

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