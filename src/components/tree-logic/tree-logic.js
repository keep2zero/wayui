import WayComponent from '@/types/component';
import TreeLogicDefault from './tree-logic-default';
class TreeLogic extends WayComponent {

  components() {
    return {
      TreeLogicDefault
    }
  }

  props() {
    return {
      datas: {
        type: Array,
        default: ()=>[]
      }
    }
  }


  render(h) {
    const lit = this.datas.map((item) => {
      return (<li>{item.label}</li>)
    })
    return (
      <div class="way-tree-logic">
        <tree-logic-default></tree-logic-default> 
      </div>
    )
  }

}

export default TreeLogic.INSTANCE();