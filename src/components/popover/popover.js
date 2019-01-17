import WayComponent from '@/types/component'

class Popover extends WayComponent {
  props() {
    return {
      node: {
        type: Node|String,
        default: null
      },
      placement: {
        type: String,
        default: 'left'
      }
    }
  }

  data() {
    return {

    }
  }

  render(h) {  
    this.$nextTick(()=>{
      console.log(this.node)
      const ref = this.node.$el; 
      console.log(ref)
      const rect = ref.getBoundingClientRect();
      this.$el.style.top = rect.top + "px";
      this.$el.style.left = rect.left - this.$el.scrollWidth + "px";
    })
    return createContain.call(this, h);
  } 
}

function createContain(create) {
   const prop = {
     class: ["way-popover"]  ,
     attrs: {
      "way-placement": this.placement
    } 
   };
   return create("div", prop, [createContent.call(this, create), this.$slots.default])
}

function createContent(create) {
  const prop = {
    class: ["way-popover__cotnent"]
   
  }

  const contentArrow = create('div', {class: "way-popover__content-arrow"})
   
  return create('div', prop, [contentArrow, createContentBody.call(this, create)])
}

function createContentBody(create) {
  
  const prop = {
     class: ["way-popover__cotnent-body"]
  }

  return create("div", prop, this.content);
}

export default Popover.INSTANCE();