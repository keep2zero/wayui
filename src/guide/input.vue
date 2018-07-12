<template>
<div>
  <hd-input></hd-input>
  <br>
  <hd-input :isclear="true" icon-prefix="search">
  </hd-input>
  <br>
   <hd-input icon-suffix="eye"></hd-input>
  <br>
  <hd-input :isclear="true">
    <select slot="prefix">
      <option>请选择</option>
    </select>
  </hd-input>
</div>
</template>

<script>
export default {
  
}
</script>
