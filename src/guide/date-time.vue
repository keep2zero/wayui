<template>
  
  <div>
    <way-date-time v-model="date"></way-date-time>
    <way-date-time type="range" style="width: 300px" v-model="rangeDate"></way-date-time>
  </div>
</template>

<script>
export default {
   data() {
     return {
       date: "2018-08-10",
       rangeDate: '2018-09-10~2018-10-22'
     }
   }
}
</script>

<style>

</style>
