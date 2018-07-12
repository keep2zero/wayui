<template>
  <div class="hd-dialog">
    <div class="hd-dialog__mask"></div>
    <div class="hd-dialog__main">
      <div class="hd-dialog__title">
        <h3>提示</h3>
        <div class="hd-dialog__tool">
          <fe icon="close"></fe>
        </div>
      </div>
      <div class="hd-dialog__body"></div>

      <div class="hd-dialog__foot">
        <div class="hd-dialog__control">
          <hd-button type="primary-depth">确认</hd-button>
          <hd-button type="disabled">取消</hd-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
.hd-dialog {
  position: relative;
  padding: 100px;
}

.hd-dialog__mask {
  background-color: #000;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.hd-dialog__main {
  border-radius: 4px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-color: #fff;
}

.hd-dialog__title {
  h3 {
    padding: 5px 15px;
    margin: 0;
  }
  background-color: #E5EDF8;
  position: relative;
  border-bottom: #eee 1px solid;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.hd-dialog__tool {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  .fe {
    color: #54698D;
    font-size: 16px;
  }
}

.hd-dialog__body {
  padding: 10px;
}

.hd-dialog__foot {
  display: flex;
  align-items: center;
  padding: 8px 10px;
  flex-direction: row-reverse;
}

.hd-dialog__control {
   .hd-button {
     margin-left: 10px;
   }
}
</style>
