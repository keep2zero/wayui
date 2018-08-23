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
    const classes = ['way-button', this.type ? 'way-button-' + this.type : ''];
    return (
      <div class={classes}> 
        <button class="way-button__btn" type="button"  style={style}> {this.text}{slot} </button>
      </div>
    );
    
    
  }
}


class IconButton extends Button {

    constructor(button) {
        super(button);
        this.borderColor = {
          type: String | Boolean,
          default: false
        };

        
        this.borderWidth = {
          type: String | Boolean,
          default: false
        };
        this.borderStyle =  {
          type: String | Boolean,
          default: false
        };
        this.borderRadius =  {
          type: String | Boolean,
          default: false
        };
        this.icon = "";
    }

    render(h) {
      const node = super.render(h);
      const style = node.data.style = {};
      this.borderColor !== false && (style.borderColor = this.borderColor);
      this.borderWidth !== false && (style.borderWidth = toEm(this.borderWidth));
      this.borderStyle !== false && (style.borderStyle = this.borderStyle);
      this.borderRadius !== false && (style.borderRadius = toEm(this.borderRadius));
      console.log(node)
      this.icon && node.children.unshift(<way-icon class="way-button__icon" icon={this.icon}></way-icon>)
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