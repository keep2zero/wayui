import WayComponent from '@/types/component';

class TreeLogic extends WayComponent {

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
        <ul>
          { 
           lit
          }
        </ul>
      </div>
    )
  }

}

export default TreeLogic.INSTANCE();