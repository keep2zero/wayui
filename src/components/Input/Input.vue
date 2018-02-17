<template id="">
   <div class="hd-input">
       <input type="text" v-model="text">
       <a href="javascript:void(0)" @click="clear"><i class="fa fa-times"></i></a>
   </div>
</template>

<script>
  export default {
     data() {
       return {
         text: ""
       }
     },

     methods: {
       clear() {
          this.text = "";
          this.$emit('clear');
       }
     }
  }
</script>
