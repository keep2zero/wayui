import WayComponent from '@/types/component';

class TreeLogicDefault extends WayComponent {
  data() {
    return {
      title: '并且',
      type: 'and'
    }
  }

  handle() {
    console.log("hello")
  }

  render(h) {

   return createContain.call(this, h);
  }
}


function createContain(create) {
  return create('div', {class: "way-tree-logic__default"}, [createTitle.call(this, create)])
}

function createTitle(create) {
  const prop = {
    className: "way-tree-logic__default-title",
    on: {
      click: this.handle
    }
  }
  return create('span', prop, [this.title, create("WayIcon", {props: {icon: 'down', platform: 'ali'}})])
}


export default TreeLogicDefault.INSTANCE();
