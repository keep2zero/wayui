<template>
  <div class="hd-tree">
    <tree-item :itemData='item' v-for="(item, index) in treeData" :key="'tree' + index" :index="index"/>
  </div>
</template>

<script>
import TreeItem from './TreeItem.vue';
export default {
  components: {
    TreeItem
  },

  props: {
    treeData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less">
  @import url('./tree.less');
</style>
