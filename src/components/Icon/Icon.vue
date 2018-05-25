<template>
 <span class="hd-icon">
     <i :class="['fa', type]"></i>
 </span>
</template>

<script>
export default {
  name: 'icon',
  props: {
    type: String
  }
}
</script>
