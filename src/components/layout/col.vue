<template>
  <div :class="['hd-col', `hd-col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span : {
      type: Number,
      default: 12
    }
  }
}
</script>


<style lang="less">
.hd-col {
  padding: 5px;
}

.hd-col-12 {
  flex: 0 0 100%;
}

.hd-col-1 {
  flex: 0 0 8.333333333333333%;
}

.hd-col-2 {
  flex: 0 0 16.666666666666666%;
}

.hd-col-3 {
  flex: 0 0 25%;
}

.hd-col-4 {
  flex: 0 0 33.333333333333%;
}

.hd-col-5 {
  flex: 0 0 41.6666666666666%;
}

.hd-col-6 {
  flex: 0 0 50%;
}

.hd-col-7 {
  flex: 0 0 58.3333333333333%;
}

.hd-col-8 {
  flex: 0 0 66.6666666666%;
}

.hd-col-9 {
  flex: 0 0 75%;
}

.hd-col-10 {
  flex: 0 0 83.3333333333333%;
}

.hd-col-11 {
  flex: 0 0 91.66666666666%;
}

</style>

