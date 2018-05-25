<template id="">
   <div class="hd-input">
       <input type="text" v-model="text" :placeholder="place" @change="change">
       <a v-if="!empty" href="javascript:void(0)" @click="clear" class="hd-input-close"><i class="fa fa-times-circle"></i></a>
   </div>
</template>

<script>
  export default {
     data() {
       return {
         text: this.value
       }
     },

     props: {
       place: {
         type: String,
         default: "请输入"
       },
       value: {
         type: String
       }
     },

     computed: {
       empty() {
          return !this.text||this.text.length == 0;
       }
     },

     methods: {
       clear() {
          this.text = "";
          this.$emit('clear');
       },

       change() {
          this.$emit("input", this.text);
       }
     }
  }
</script>
