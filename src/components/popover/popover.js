import WayComponent from '@/types/component'

class Popover extends WayComponent {
  props() {
    return {
      node: {
        type: Node | String,
        default: null
      },
      placement: {
        type: String,
        default: 'bottom'
      },
      trigger: {
        type: String,
        default: 'click'
      }
    }
  }

  data() {
    return {
      visiable: false,
      clearout: -1,
      ref: null,
      eventsClick: { }
    }
  }


  render(h) {
     
    this.$nextTick(() => {
      console.log(this.$parent, "thisiisisisi")
      if (!this.$parent.$refs[this.node]) {
        this.$el.parentNode.removeChild(this.$el);
        return;
      }
      this.ref = this.$parent.$refs[this.node].$el || this.$parent.$refs[this.node]; 
     
      bindEvent.call(this);
    })
    return createContain.call(this, h);
  }

  mounted() {
    console.log("kfjksdjfksdjflkd")
  }
}

function update(ref) {
  this.visiable = !this.visiable;
  console.log(this.visiable)
  if (!this.visiable) return;
  this.$nextTick(() => {
    resetEvent.call(this);
    const point = new Placement(this.ref, this.$el)[this.placement]();
    this.$el.style.top = point.top + "px";
    this.$el.style.left = point.left + "px";
  })

}

 
 

function bindEvent() {
  if (this.trigger === "click" || this.trigger === "clickout") {

    console.log(this.ref)
     
    this.ref.removeEventListener("click", this.eventsClick["ref-click"]||(()=>{}));
    const handle = () => update.call(this);
    this.ref.addEventListener("click", handle)
    this.eventsClick["ref-click"] = handle;
  }

  if (this.trigger === 'hover') {
    this.ref.onmouseenter = () => {
      update.call(this)
    }
    this.ref.onmouseleave = () => {
      this.clearout = setTimeout(() => {
        this.visiable = false
      }, 200)
    }
  }
}

function resetEvent() {
  if(this.trigger === "hover") {
    this.$el.onmouseenter = () => {
      clearTimeout(this.clearout)
    }
    this.$el.onmouseleave = () => {
      this.visiable = false
    }
  } 

  if(this.trigger === "clickout") {
    document.documentElement.addEventListener('click', (e)=>{
       let target = e.target;
       let nottarget = true;
       while(target!=null) {
         if(target === this.$el || target === this.ref) {
           nottarget = false;
           break;
         }
         target = target.parentNode;
       }

       if(nottarget) {
         this.visiable = false;
       }
    })
  }

}

class Placement {

  constructor(ref, box) {
    this.ref = ref;
    this.box = box;
    this.refRect = this.ref.getBoundingClientRect();
    this.boxRect = this.box.getBoundingClientRect();
    this.borderSize = 8

    this.scrollTarget = this.ref.offsetParent.parentNode;

    this.horTop = this.refRect.top - (this.boxRect.height - this.refRect.height) / 2 + this.scrollTarget.scrollTop;
    this.verLeft = this.refRect.left - (this.boxRect.width - this.refRect.width) / 2 + this.scrollTarget.scrollLeft;
  }

  left() {
    return {
      top: this.horTop,
      left: this.refRect.left - this.boxRect.width - this.borderSize + this.scrollTarget.scrollLeft
    }
  }

  right() {
     
    return {
      top: this.horTop,
      left: this.refRect.right + this.borderSize +  this.scrollTarget.scrollLeft
    }
  }

  top() {
    return {
      top: this.refRect.top - this.boxRect.height - this.borderSize + this.scrollTarget.scrollTop,
      left: this.verLeft
    }
  }

  bottom() {
    return {
      top: this.refRect.bottom + this.borderSize + this.scrollTarget.scrollTop,
      left: this.verLeft 
    }
  }
}

function createContain(create) {

  if (!this.visiable) {
    return create('');
  }

  const prop = {
    class: ["way-popover"],
    attrs: {
      "way-placement": this.placement
    }
  };
  const contentArrow = create('div', {
    class: "way-popover__content-arrow"
  })
  return create("div", prop, [contentArrow, createContent.call(this, create)])
}

function createContent(create) {
  const prop = {
    class: ["way-popover__content"]

  }



  return create('div', prop, [createContentBody.call(this, create)])
}

function createContentBody(create) {

  const prop = {
    class: ["way-popover__content-body"]
  }

  return create("div", prop, this.$slots.default);
}

export default Popover.INSTANCE();