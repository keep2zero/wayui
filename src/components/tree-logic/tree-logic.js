import WayComponent from '@/types/component';
import TreeLogicDefault from './tree-logic-default';

/**
 * 1. 分为数据层
 * 2. 画线层
 * 
 */
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
      return (<tree-logic-default item={item} key={item.id}></tree-logic-default>)
    })
    return (
      <div class="way-tree-logic">
        <div class="way-tree-logic__node">
        {
          lit
        } 
        </div>

        <div class="way-tree-logic__line">

        </div>
       
        
      </div>
    )
  }

}

export default TreeLogic.INSTANCE();