<template>
  <div :class="['hd-tree-item', ((parent && (index === (parent.child.length - 1)))) ? 'hd-tree-item-last':'']">
    <div class="hd-tree-item-line" :style="{left: (indent - 11) + 'px'}"></div>
    <div class="hd-tree-item-indent" :style="{width: indent + 'px'}">
      <div class="hd-tree-item-indent_bottom" v-if="hasParent" :style="calcStyle"></div>
      <!-- <div class="hd-tree-item-indent_left" v-if="hasParent" :style="calcLeftStyle"></div> -->
    </div>
    <div class="hd-tree-item-expand">
       <hd-icon :type="expandClass" v-if="hasChild" @click.native="handleExpand"></hd-icon>
    </div>
    
    <div class="hd-tree-item-check"> 
       <hd-icon :type="checkedClass" @click.native="handleCheck"></hd-icon>
    </div>
    
    <div class="hd-tree-item-text">
      <span v-if="!itemData._edit">{{itemData.name}}</span>
      <input v-if="itemData._edit" type="text" v-model="itemData.name" @keyup="inputChange"/>
    </div>

    <div class="hd-tree-item-action">
      <hd-icon type="far fa-pencil-alt" @click.native="handleEdit" v-if="!itemData._edit"></hd-icon>
      <hd-icon type="fa-plus" @click.native="handlePlus"></hd-icon>
      <hd-icon type="fa-times" @click.native="handleDelete"></hd-icon>
    </div>

    <div class="hd-tree-item-child" v-if="itemData._expand">
      <template v-for="(item, index) in itemData.child" >
        <tree-item :parent="itemData" :depth="depth + 1" :itemData='item' :key="item.id + index" :index="index"/>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeItem',

  data() {
  
    return {
      expandStyle: ['fa-caret-right', 'fa-caret-down'],
      checkedStyle: ['far fa-square', 'fa-check-square', 'fa-minus-square'],
      editable: false
    }
  },
  
  computed: {
      
    checkedClass() {
      return this.itemData._checked ? this.checkedStyle[1] : this.checkedStyle[0];
    },

    expandClass() {
      return this.itemData._expand ? this.expandStyle[1] : this.expandStyle[0];
    },

    hasParent() {
      return this.parent != null; 
    },

    hasChild() {
      return this.itemData.child && (this.itemData.child.length > 0)
    },

    indent() {
      const left = this.depth * 20;
      // console.log("left", left);
      return left; 
    },

    calcStyle() {

      let width = 10;
      let right = 0;
      //console.log("width", this.depth, width);
      if(!this.hasChild) {
        width = width + 18;
        right = -18;
      } 
      
      return {
        width: width + 'px',
        right: right + 'px'
      }
    },

    calcLeftStyle() {
      let height = 27;
      let bottom = 0;
      let len = this.itemData.child.length;
      const parentLen = this.parent.child.length;
      //
      // let len = 0;
      // function getlen(child) {
      //   for(let i = 0; i < child.length; i++) {
      //     let item = child[i];
      //     if(item._expand) {
      //        len += 1;
      //     }
      //     if(item.child && item.child.length > 0) {
      //       getlen(item.child);
      //     }
      //   }
      // }
      // getlen(this.parent.child);
      // len = len + this.itemData.child.length;
      // console.log(this.itemData.name, len);
      // len = lencount;
      // console.log(this.parent.name, this.parent, this.itemData.name);


      // if((this.itemData._expand && this.hasChild && this.index < (parentLen - 1)) || this.parent.depth > 0) {
      //   height = (len + 1) * 27;
      //   bottom = -27 * len;
      // }

      return {
        height: height + 'px',
        bottom: bottom + 'px'
      }
    }
  },

  props: {

    itemData: {
      type: Object,
      default: () => ({})
    },
    
    depth: {
      type: Number,
      default: 0
    },

    parent: {
      type: Object,
      default: () => null
    },

    index: {
      type: Number,
      default: 0
    }
  },

  methods: {
    handleCheck() {
      this.itemData._checked = !this.itemData._checked;
      //console.log("0-----")
    },

    handleExpand() {
      this.itemData._expand = !this.itemData._expand;
      //console.log("-----0")
    },

    handleEdit() {
      this.itemData._edit = !this.itemData._edit;
    },

    handleDelete() {
      if(this.depth > 0) {
        this.parent.child.splice(this.index, 1);
      } else {
        this.$parent.treeData.splice(this.index, 1);
      }
    },

    handlePlus() {
      this.itemData._expand = true;
      this.itemData.child.push({
        id: new Date().getTime(),
        name: '',
        _edit: true,
        _expand: false,
        _checked: false,
        child: []
      })
    },

    inputChange(e) {
      console.log(e.keyCode === 13)
      if(e.keyCode === 13) {
        if(this.itemData.name.length === 0) {
          console.log("内容不能为空")
        } else {
          this.itemData._edit = !this.itemData._edit;
        } 
      }
    }
  }
}
</script>

