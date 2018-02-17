<template>
  <div> <h1>{{message}}, test2</h1>
   <hd-input /></div>
</template>

<script>
   export default {
       data() {
         return {
             message: "hello, world1"
         }
       },
       
       mounted() {
         console.log('mounted')
       }
   }
</script>
