<template>
  <span>
    <i :class="['fe', fetype]"></i>
  </span>
</template>
<script>
export default {
  computed: {
    fetype() {
      if (this.icon) {
        return 'fe-' + this.icon;
      }
      return '';
    }
  },
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
};
</script>

<style>
@import url('./eimfont.css');
</style>


