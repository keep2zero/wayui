import WayComponent from "@/types/component";

export default class WayIcon extends WayComponent {
  props() {
    return {
      icon: {
        type: String,
        default: ''
      },
      platform: {
        type: String,
        default: 'self' //self, ali, fw
      }
    }
  }
  render(h) {
    const classNames = {
      ali: ["iconfont", "icon-" + this.icon],
      self: ["fe", "fe-" + this.icon]
    }
    const classes = classNames[this.platform];
    return (
      <span class="way-icon">
        <i class={classes}></i>
      </span >
    )
  }

}






