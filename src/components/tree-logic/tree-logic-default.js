import WayComponent from '@/types/component';

class TreeLogicDefault extends WayComponent {
  data() {
    return { 
      refid: new Date().getTime()+""
    }
  }

  props() {
    return {
      item: {
        type: Object,
        default:  ()=>{
          return {
            label: '并且',
            value: 'and',
          }
        }
      }
    }
  }

  

  render(h) {

   return createContain.call(this, h);
  }
}


function createContain(create) {
  return create('div', {class: "way-tree-logic__default"}, [createTitle.call(this, create), createAction.call(this, create)])
}

function createTitle(create) {
  console.log("--->", this.refid)
  const prop = {
    class: "way-tree-logic__default-title",
    ref: this.refid,
    // on: {
    //   click: this.handle
    // }
  }
  return create('span', prop, [this.item.label, create("WayIcon", {props: {icon: 'down', platform: 'ali'}})])
}

function createAction(create) {
  const prop = {
    className: 'way-tree-logic__default-action',
    props: {
      node: this.refid,
      trigger: 'hover'
    }
  }

  const newitem = create("div", {on: {
    click: () => {
      this.$parent.datas.push({
        label: "并且",
        value: "and"
      })
    }
  }}, "新建")

  return create("way-popover", prop, [newitem, "hello"])
}


export default TreeLogicDefault.INSTANCE();
