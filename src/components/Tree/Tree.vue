<template>
  <div class="hd-tree">
    <tree-item :itemData='item'
               v-for="(item, index) in treeData"
               :key="'tree-' + index"
               :index="index" />
    <p v-if="treeData.length === 0"
       class="hd-tree-nodata">数据结构为空</p>
  </div>
</template>

<script>
import TreeItem from './tree-item.vue';

export default {
  name: 'Tree',

  components: {
    TreeItem,
  },

  provide() {
    return {
      keyMap: this.keyMap,
      stateMap: this.stateMap,
      expandEvent: this.expandEvent,
      editEvent: this.editEvent,
      plusEvent: this.plusEvent,
      deleteEvent: this.deleteEvent,
      clickEvent: this.clickEvent,
      clickDoubleEvent: this.clickDoubleEvent,
      limitEvent: this.limitEvent,
      nameLength: this.nameLength,
      selectObject: {
        prev: null,
        current: null,
      },

      async: this.async,
      //
      editExtend: this.editExtend,
    };
  },

  props: {
    treeData: {
      type: Array,
      default: () => [],
    },

    async: {
      type: Boolean,
      default: false,
    },

    nameLength: {
      type: Number,
      default: 100,
    },

    stateMap: {
      type: Object,
      default: () => {
        return {
          edited: false,
          deleted: false,
          expanded: false,
          checked: false,
          plused: false,
          selected: false,
          hasEdit: false,
          hasCheck: false,
        };
      },
    },

    keyMap: {
      type: Object,
      default: () => ({
        id: 'id',
        name: 'name',
        child: 'child',
        size: 'size',
      }),
    },

    clickEvent: {
      type: Function,
      default: () => {},
    },

    editEvent: {
      type: Function,
      default: () => {},
    },

    deleteEvent: {
      type: Function,
      default: () => {},
    },

    plusEvent: {
      type: Function,
      default: () => {},
    },

    expandEvent: {
      type: Function,
      default: () => {},
    },

    clickDoubleEvent: {
      type: Function,
      default: () => {},
    },

    limitEvent: {
      type: Function,
      default: () => false,
    },

    //扩展功能
    editExtend: {
      type: Function,
      default: c => c(''),
    },
  },
};
</script>

<style lang="less">
@import url('./tree.less');
</style>
