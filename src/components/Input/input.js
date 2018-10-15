import WayComponent from "@/types/component";
// import WayComponent from "@/types/vue-component";
const INPUT_CLASSES = {
  PRIMARY: 'way-input-primary',
  INFOR: 'way-input-infor',
  SUCCESS: 'way-input-success',
  ERROR: 'way-input-error'
}

class WayInputBase extends WayComponent {
  constructor() {
    super({});
  }

  props() {
    return {
      place: {
        type: String,
        default: "请输入"
      },

      value: {
        type: String,
        default: ""
      },

      type: {
        type: String,
        default: ''
      }
    }
  }

  computed() {
    return {
      typeStyle() { 
        return INPUT_CLASSES[this.type];
      }
    }
  }

  data() {
    return {
      text: this.value
    }
  }

  change(e) {
    this.text = e.target.value;
    this.$emit("input", this.text);
  }

  clear() {
    this.text = '';
    this.$emit('input', this.text);
  }

  render(h) {

    let closeDom = '';
    if (this.text.length > 0) {
      closeDom = (
        <a href="javascript:void(0)" onClick={this.clear} class="way-input__close">
          <i class="fa fa-times-circle"></i>
        </a>
      )
    }
    return (
      <div class={['way-input__input', this.typeStyle]}>
        <input type="text" value={this.text} placeholder={this.place} onInput={this.change} />
        {closeDom}
      </div>
    )
  }
}


class WayInput extends WayInputBase {

  props() {
    const prop = super.props();
    prop.iconPefix = {
      type: String,
      default: ''
    }

    prop.iconSuffix = {
      type: String,
      default: ''
    }
    return prop;
  }

  render(h) {

    let prefix = "";
    let iconPrefix = "";
    if (this.iconPrefix) {
      iconPrefix = <way-icon icon={this.iconPrefix}></way-icon>;
    }
    if (this.iconPrefix || this.$slots.prefix) {
      prefix = (
        <div class="way-input__addon hd-input__prefix">
          {iconPrefix}
          {this.$slots.prefix}
        </div>
      )
    }

    let suffix = "";
    let iconSuffix = '';
    if (this.iconSuffix) {
      iconSuffix = <way-icon icon={this.iconSuffix}></way-icon>
    }
    if (this.iconSuffix || this.$slots.suffix) {
      suffix = (
        <div class="way-input__addon way-input__suffix">
          {iconSuffix}
          {this.$slots.suffix}
        </div>
      )
    }

    return (
      <div class="way-input">
        {prefix} {super.render(h)} {suffix}
      </div>
    )
  }

}

export default WayInput.INSTANCE();