import WayComponent from "@/types/component";

export default class WayIcon extends WayComponent {
  props() {
    return {
      icon: {
        type: String,
        default: ''
      }
    }
  }
  render(h) {
    const classes = ['fe', 'fe-' + this.icon];
    return (
      <span class="way-icon">
        <i class={classes}></i>
      </span >
    )
  }

}






