<template>
  
    <div class="button-box">
      <hd-button text="默认" :width="width" :height="height" :borderColor="borderColor">默认</hd-button>
      <hd-button icon="left">返回</hd-button>
      <hd-button type="danger" icon="close">危险</hd-button>
      <hd-button icon="eye" type="primary">正常</hd-button>
      <hd-button icon="eye" type="primary-depth">深色</hd-button>
      <hd-button icon="eye" type="primary-shallow">浅色</hd-button>
      <hd-button icon="eye" type="disabled">禁止</hd-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      width: 80,
      height: 30,
      borderColor: "#fff"
    }
  },

  mounted() {
   setInterval(() => {
     const colors = ['grenn', 'red', 'black']
     this.width = Math.floor(Math.random() * 1000);
     this.height = Math.floor(Math.random() * 100);
     this.borderColor = colors[Math.floor(Math.random() * 3)];
   }, 2000)
  }
}
</script>

<style lang="less">
.button-box {
  .hd-button {
    margin: 10px;
  }
}
</style>

