<template>
<div>
  <way-input :ok="ok"></way-input>
  <br>
  <way-input   icon-prefix="search" v-model="world" type="PRIMARY">
  </way-input>
  <br>
   <way-input icon-suffix="eye"></way-input>
  <br>
  <way-input :isclear="true">
    <select slot="prefix">
      <option>请选择</option>
    </select>
  </way-input>
</div>
</template>

<script>
export default {
  data() {
    return {hello: false, world: "hello, world", ok: false}
  },

  mounted() {
    setTimeout(()=>{
      this.hello = true;
      this.ok = !this.ok;
    }, 3000)
  }
}
</script>
