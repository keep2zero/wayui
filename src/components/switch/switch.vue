<template>
  <div :class="radioClass" @click="changeState">
    <label for="" class="hd-switch__label">{{!state ? label[0] : label[1]}}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: false
    }
  },

  props: {
    label: {
      type: Array,
      default: () => ['关闭', '启用']
    }
  },

  computed: {
    radioClass() {
      if(this.state) {
        return "hd-switch hd-switch-active"
      }
      return "hd-switch"
    }
  },

  methods: {
    changeState(e) {
      e.preventDefault();
      this.state = !this.state;
    }
  }
}
</script>

<style lang="less">
.hd-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  min-width: 80px;
  height: 30px;
  background-color: #bbb;
  border-radius: 15px;
  &::before {
    content: " ";
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #fff;
  }
}

.hd-switch__label {
  flex-grow: 1;
  text-align: right;
  padding: 5px 10px;
  font-size: 18px;
  color: #fff;
}

.hd-switch-active {
  background-color: green;
  &::before { 
    left: auto;
    right: 3px;
  }

  .hd-switch__label {
    text-align: left;
  }
}
</style>
