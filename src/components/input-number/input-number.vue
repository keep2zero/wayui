<template>
  <div class="way-input-number" :style="{height: size + 'px'}">
    <!-- <span class="way-input-number__format">$</span> -->
    <input type="text" class="way-input-number__input" ref="input" v-model="value" :style="{width: width + 'px'}" />
    <div class="way-input-number__control">
      <span class="way-input-number__control-up" @click="goup">
        <fe icon="up"></fe>
      </span>
      <span class="way-input-number__control-down" @click="godown">
        <fe icon="down"></fe>
      </span>
    </div> 
  </div>
</template>

<script>
import {FilterNumber} from "./input-number.js";
export default {
  data() {
    return {
      value: "0",
      len: 1
    }
  },

  computed: {
    width() {
        if(this.value.length < 3) return 32;
        return this.value.length * 8 + 20;
    }
  },

  props: {
    size: {
      type: Number,
      default: 32
    }
  },

  watch: {
    value(val) {
      console.log(FilterNumber.prototype)
      this.value = new FilterNumber(val);
    }
  },

  methods: {
    godown() {
      this.value -= 1;
    },

    goup() {
      this.value += 1;
    }
  }
}
</script>

<style lang="less">
.way-input-number {
  display: inline-flex;
  align-items: center;
  border: #eee 1px solid;
  border-radius: 5px;
  overflow: hidden;
}

.way-input-number__format {
  padding: 0 10px;
}

.way-input-number__input {
  border: 0;
  padding: 0 10px;
  outline: 0;
  line-height: 30px;
  white-space: nowrap;
  text-align: center;
}

.way-input-number__control {
  position: relative;
  width: 22px; 
  height: 100%;; 
  text-align: center;
}
.way-input-number__control-up, .way-input-number__control-down {
  height: 50%;
  display: block;
  border: #eee 1px solid;
  margin-top: -1px;
  margin-right: -1px;
}
.way-input-number__control-up .fe, .way-input-number__control-down .fe {
  font-size: 10px;
  color: #eee;
 
}
</style>
