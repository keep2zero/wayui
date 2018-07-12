<template>
  <div class="hd-radio" @click="changeState">
    <fe :icon="icon"></fe>
    <span class="hd-radio__label">hello</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: false
    }
  },

  computed:{
    icon() {
      if(this.state) {
        return 'radio-yes';
      } 
      return 'radio-no';
    }
  },

  methods: {
    changeState() {
       this.state = !this.state;
    }
  }
}
</script>

<style>
.hd-radio {
  display: inline-flex;
  align-items: center;
}

.hd-radio__label {
  margin-left: 5px;
}
</style>
