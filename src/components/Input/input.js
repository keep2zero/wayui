import Component from "@/types/component";

class Input extends Component {
  constructor(options) {
    super(options)
    this.place = {
      type: String,
      default: "请输入"
    }

    this.value = {
      type: String
    }

    this.iconPrefix = {
      type: String,
      default: ''
    }

    this.iconSuffix = {
      type: String,
      default: ''
    }

    this.isclear = {
      type: Boolean,
      default: true
    }

    this._text = ''

    this.computed = {
      empty() {
         return !this.text||this.text.length == 0;
      }
    }


    this.methods = {
      clear() {
         this.text = "";
         this.$emit('clear');
         this.$emit("input", this.text);
      },

      change(e) {
        console.log("e.target", e)
         this.text = e.target.value;
         this.$emit("input", this.text);
      }
    }
  }

  render(h) {

     let prefix = "";
     console.log("slots---->", this.change)
     let iconPrefix = "";
     if(this.iconPrefix) {
         iconPrefix =  <way-icon icon={this.iconPrefix}></way-icon>;
     }
     if(this.iconPrefix || this.$slots.prefix) {
       prefix = (
        <div class="way-input__addon hd-input__prefix">
         {iconPrefix}
          {this.$slots.prefix}
        </div>
       )
     }

     let suffix = "";
     let iconSuffix = '';
     if(this.iconSuffix) {
       iconSuffix = <way-icon icon={this.iconSuffix}></way-icon>
     }
     if(this.iconSuffix || this.$slots.suffix) {
       suffix = (
        <div class="way-input__addon way-input__suffix">
          {iconSuffix}
          {this.$slots.suffix}
        </div>
       )
     }

     let closeDom = '';
     if(!this.empty && this.isclear) {
       closeDom = (
        <a  href="javascript:void(0)" onClick={this.clear} class="way-input__close">
          <i class="fa fa-times-circle"></i>
        </a>
       )
     } 

    return (
      <div class="way-input">
        {prefix}
        <div class="way-input__input">
          <input type="text" placeholder={this.place} onChange={this.change} />
          {closeDom}
        </div>
        {suffix}
      </div>
    )
  }
}

export default Input.toComponent();