<template>
  <div class="hd-area-select" >
    <label for="">省/市/区县</label>
    <div class="hd-area-select__dropmenu" @click="clickEvent($event)">

       
        <span class="hd-area-select__dropitem">
          {{areaSelect.prov.name}}
        </span>
        <template v-if="areaSelect.city">
          <span class="hd-area-select__split"></span>

          <span class="hd-area-select__dropitem">
            {{areaSelect.city.name}}
          </span>
        </template>
        <template v-if="areaSelect.county">
          <span class="hd-area-select__split"></span>
          <span class="hd-area-select__dropitem">
            {{areaSelect.county.name}}
          </span>
        </template>
       
       
       

      <hd-icon class="hd-area-select__icon" icon="select"></hd-icon>
      <area-select-operation v-if="isoperation" />
    </div>

  </div>
</template>

<script>
import AreaSelectOperation from "./area-select-operation";
export default {
  data() {
    return { isoperation: false };
  },
  props: {
    value: {
      type: Object,
      default: ()=>({ prov: "", city: "", county: "" })
    }
  },
  computed: {
    areaSelect() {
      this.$emit("input", this.$shared.state.areaSelect);
      return this.$shared.state.areaSelect;
    }
  },
  created() {
    this.$shared.define("areaSelect", this.value);
    this.$shared.on("controlOperation", isshow => {
        this.isoperation = isshow;
    });
  },
  methods: {
    clickEvent(e) {
      console.log(e)
      let finded = false;
      let p = e.target;
      while(p != null && p.classList) { 
        if(p.classList.contains("hd-area-select__operation")) {
          finded = true;
          break;
        } 
        p = p.parentNode;
      }
      console.log(p)
      if(!finded) {
        this.isoperation = !this.isoperation
      }
    }
  },
  components: { AreaSelectOperation }
};
</script>


<style lang="less">
.hd-area-select {
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: 1;
  label {
    display: inline-block;
    margin-right: 10px;
  }
  .hd-area-select__dropmenu {
    display: flex;
    align-items: center;
    border: #dfe3e9 1px solid;
    border-radius: 4px;
    position: relative;
    min-width: 300px;
    .fe-select {
      color: #c9d2db;
      margin-right: 10px;
    }
  }
  .hd-area-select__dropitem {
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
  }

  .hd-area-select__split {
    height: 1px;
    width: 8px;
    background: #000;
  }

  .hd-area-select__icon {
    position: absolute;
    right: 0;
  }
}
</style>
