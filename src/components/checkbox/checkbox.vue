<template>
  <div class="hd-checkbox">
     <span class="hd-checkbox__state" @click="changeState">
       <fe :icon="state"></fe>
     </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "check-no"
    }
  },

  methods: {
    changeState() {
      if(this.state.indexOf('check-no') > -1) {
        this.state = 'check-yes';
      } else {
        this.state = 'check-no';
      }
    }
  }
}
</script>

<style lang="less">
.hd-checkbox {
  display: inline-flex;
  align-items: center;
}
</style>

