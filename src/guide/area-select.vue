<template>
  <div>
    <hd-area-select label="省/市/区" v-model="area"></hd-area-select>
      <span>{{area.prov.name}} {{area.city.name}} {{area.county.name}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: {
        prov: '',
        city: '',
        county: ''
      }
    }
  }
}
</script>

