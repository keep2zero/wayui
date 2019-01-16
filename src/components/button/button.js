import WayComponent from '@/types/component';
import { toEm } from '@/utils/css';
class Button extends WayComponent {
  props() {
    return {
      width: {
        type: String | Number,
        default: 'auto'
      },
      height: {
        type: String | Number,
        default: 'auto'
      },
      text: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      }
    }
  }

  data() {
    return {
      button:  null
    }
  }


  render(h) {
    const slot = this.$slots.default;
    const style = { width: toEm(this.width), height: toEm(this.height) };
    const classes = ['way-button', this.type ? 'way-button-' + this.type : ''];
    return (
      <div class={classes}>
        <button class="way-button__btn" type="button" style={style}> {this.text}{slot} </button>
      </div>
    );
  }
}


class IconButton extends Button {

  props() {
    const super_props = super.props();
    super_props.borderColor = {
      type: String | Boolean,
      default: false
    };

    super_props.borderWidth = {
      type: String | Boolean,
      default: false
    };
    super_props.borderStyle = {
      type: String | Boolean,
      default: false
    };
    super_props.borderRadius = {
      type: String | Boolean,
      default: false
    };
    super_props.icon = "";
    return super_props;
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
  
  props() {
    const super_props = super.props();
    super_props['backgorund'] = {
      type: String,
      default: '#fff'
    }
    return super_props;
  }

  render(h) {

    const node = super.render(h);
    return node;
  }
}






export default BackgroundButton.INSTANCE();
