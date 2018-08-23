<template id="">
   <div class="hd-input">
      <div class="hd-input__addon hd-input__prefix" v-if="iconPrefix || $slots.prefix">
        <hd-icon :icon="iconPrefix" v-if="iconPrefix"></hd-icon>
        <slot name="prefix"></slot>
      </div>
      <div class="hd-input__input">
        <input type="text" v-model="text" :placeholder="place" @change="change">
        <a v-if="!empty && isclear" href="javascript:void(0)" @click="clear" class="hd-input__close"><i class="fa fa-times-circle"></i></a>
      </div>

       <div class="hd-input__addon hd-input__suffix" v-if="iconSuffix || $slots.suffix">
         <hd-icon :icon="iconSuffix" v-if="iconSuffix"></hd-icon>
         <slot name="suffix"></slot>
       </div>
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

       
     },

     

     
  }
</script>

<style lang="less">
.hd-input {
  position: relative; 
  display: flex;
  margin: 0;
  font-size: 12px;
  border: #DFE3E9 1px solid;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 4px; 
  &:focus,&:hover {
    box-shadow: 0 0 5px 0 #bbb;
  }
  .hd-input__input {
    height: 100%;
    flex-grow: 2;
    position: relative;
    padding-right: 30px;
    padding-left: 10px;
    input {
      border: 0;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      &:focus {
        outline: 0;
      }
    }
  }

  .hd-input__addon {
    display: inline-flex;
    height: 100%;
    vertical-align: middle;
    align-items: center;
    background-color: #eee;
    justify-content: center;
    padding: 10px;
    
  }
}

.hd-input__close {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
}
</style>
