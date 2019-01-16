<template>
  <way-tree-logic :datas="datas"></way-tree-logic>
</template>

<script>
export default {
   data() {
     return {
       datas: [
         {
           type: 'and',
           label: '并且',
           value: 'and',
           childs: [
            
           ]
         }
       ]
     }
   }
}
</script>

<style>

</style>
