<template>
  <way-tree-logic :datas="showDatas"></way-tree-logic>
</template>

<script>
export default {
   data() {
     return {
       showDatas: [],
       datas: [
         {
           id: "111",
           type: 'and',
           label: '并且',
           value: 'and',
           childs: [
            {
              id: "222",
              type: 'and',
              label: '或者',
              value: 'or',
              childs: []
            }
           ]
         }
       ]
     }
   },

   methods: {
      trackDatas(datalist, parent) {
        for (let index = 0; index < datalist.length; index++) {
          const element = datalist[index];
          //计算位置

          //加入数据层

          if(element.childs) {
            trackDatas(element.childs, element);
          }
          
        }
      }
   },

   mounted() {
      
   }
}
</script>

<style>

</style>
