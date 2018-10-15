<template>
  
    <div class="button-box">
      <way-button text="默认" :width="width" :height="height" :borderRadius="5" :borderColor="borderColor"> 默认</way-button>
      <way-button :icon="icon">返回</way-button>
      <way-button type="danger" icon="close">危险 <way-icon icon="select"></way-icon></way-button>
      <way-button icon="eye" type="primary">正常</way-button>
      <way-button icon="eye" type="primary-depth">深色</way-button>
      <way-button icon="eye" type="primary-shallow">浅色</way-button>
      <way-button icon="eye" type="disabled">禁止</way-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      width: 180 + 'px',
      height: 'auto',
      borderColor: "#ff6600",
      icon: "left"
    }
  },

  mounted() {
    
  }
}
</script>

<style lang="less">
.button-box {
  .way-button {
    margin: 10px;
  }
}
</style>

