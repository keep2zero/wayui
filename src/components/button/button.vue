<template>
  <div :class="['hd-button', type?`hd-button-${type}`:'']"><hd-icon v-if="icon" class="hd-button__icon" :icon="icon" /><button class="hd-button__btn"><slot></slot></button></div>
</template>

<script>
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
  min-width: 90px;
  font-size: 14px;
  min-height: 30px;
  line-height: 30px;
  display: inline-flex;
  border: #DFE3E9 1px solid;
  border-radius: 15px;
  cursor: pointer;
  &:hover, &:focus {
    box-shadow: 0 0 4px 0 #DFE3E9;
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
  .hd-button__icon .fe{
    color: #fff;
  }
}

.hd-button-danger {
  background-color: #FF7A83;
  border-color: #FF7A83;
  &:visited, &:focus, &:active {
    border-color: #FF0000;
    box-shadow: 0 0 4px 0 #FF7A83;
  }
}

.hd-button-primary {
  background-color: #5EBBFF;
  border-color: #5EBBFF;
  &:visited, &:focus, &:active {
    border-color: #0093FF;
    box-shadow: 0 0 4px 0 #5EBBFF;
  }
}

.hd-button-primary-depth {
  background-color: #ABC5E2;
  border-color: #ABC5E2;
  &:visited, &:focus, &:active {
    border-color: #0093FF;
    box-shadow: 0 0 4px 0 #ABC5E2;
  }
}

.hd-button-primary-shallow {
  background-color: #73DAFF;
  border-color: #73DAFF;
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
