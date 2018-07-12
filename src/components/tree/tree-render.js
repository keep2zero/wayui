
export default {
  render(createElement) {
    return this.renderItem(createElement);
  },

  props: {
    renderItem: {
      type: Function,
      default: () => { },
    },
  },
}
