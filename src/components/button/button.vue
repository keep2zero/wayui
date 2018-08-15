<template>
  <div :class="['hd-button', type?`hd-button-${type}`:'']"><hd-icon v-if="icon" class="hd-button__icon" :icon="icon" /><button class="hd-button__btn"><slot></slot></button></div>
</template>

<script>
class Button {
  constructor() {
    this.width = 0;
    this.height = 0;
    this.stroke = 1;
    this.borderColor = '';
    this.className = '';
  }


  render() {
    return (
      
    );
  }
}
  export default {
    props: {
      icon: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less">

.hd-button {
  min-width: 7.5rem;
  font-size: 1.17rem;
  min-height: 3rem;
  line-height: 3rem;
  display: inline-flex;
  border: #DFE3E9 0.0625rem solid;
  border-radius: .67rem;
  cursor: pointer;
  box-shadow: 0 10px 10px -5px rgba(222, 226, 231, 0.2);
  &:hover, &:focus {
    box-shadow: 0 0 8px 0 #4E86FF;
  }
  justify-content: center;
}

.hd-button__icon {
  margin-right: 8px;
  .fe {
    font-size: 14px;
  }
}

.hd-button__btn {
  padding: 0;
  margin: 0;
  border: 0;
  width: auto;
  background-color: transparent;
  color: inherit;
  display: inline-block;
  cursor: pointer;
  &:visited,&:focus {
    box-shadow: none;
    outline: 0;
  }
}

.hd-button-primary,
.hd-button-danger,
.hd-button-primary-depth,
.hd-button-primary-shallow {
  color: #fff;
  border: 0;
  .hd-button__icon .fe{
    color: #fff;
  }
}

.hd-button-danger {
  background: linear-gradient(45deg, #FF617F 0%, #FF4772 100%);
  box-shadow: 0 10px 10px -5px rgba(255, 86, 118, 0.2);
  &:visited, &:focus, &:active {
    border-color: #FF0000;
    box-shadow: 0 0 4px 0 #FF7A83;
  }
}

.hd-button-primary {
  background: linear-gradient(45deg, #5AB2FF 0%, #5B8EFF 100%);
  box-shadow: 0 10px 10px -5px rgba(78, 134, 255, 0.2);
  &:visited, &:focus, &:active {
    border-color: #0093FF;
    box-shadow: 0 0 4px 0 #5EBBFF;
  }
}

.hd-button-primary-depth {
  background: linear-gradient(45deg, #3A9FF6 0%, #5B8EFF 100%);
  box-shadow: 0 10px 10px -5px rgba(90, 178, 255, 0.3);
  &:visited, &:focus, &:active {
    border-color: #0093FF;
    box-shadow: 0 0 4px 0 #ABC5E2;
  }
}

.hd-button-primary-shallow {
  background: linear-gradient(45deg, #71CDFF 0%, #5AB2FF);
  box-shadow: 0 10px 10px -5px rgba(90, 178, 255, 0.2);
  &:visited, &:focus, &:active {
    box-shadow: 0 0 4px 0 #73DAFF;
    border-color: #00BCFF;
  }
}

.hd-button-disabled {
  background-color: #E4E8EC;
  border-color: #E4E8EC;
  color: #bbb;
  &:visited, &:focus, &:active {
    border-color: #E4E8EC;
  }
  .hd-button__icon .fe{
    color: #bbb;
  }
}

</style>
