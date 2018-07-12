<template>
  <div class="hd-area-select__show">
     <ul  v-for="(val, key) in areas" :key="key" class="hd-area-select_show-list" v-if="!iscounty">
       <li class="hd-area-select__show-item" v-for="(prov, index) in val" :key="'prov' + index">
         <strong class="hd-area-select__show-index" :style="{opacity: index === 0 ? '1': '0'}" :id="index === 0?key:''">{{key}}</strong>
         <label :for="prov.name" class="hd-area-select__show-label">{{prov.name}}:</label>
         <div class="hd-area-select__show-body">
           <span class="hd-area-select__show-area" @click="goCounty(city, $event)" v-for="(city, index) in prov.area" :key="'city' + index" :id="city.name">
             <a  href="javascript:void(0);">{{city.name}} {{$shared.hello}}</a>
           </span>
            
         </div>
       </li>
     </ul>


     <div class="hd-area-select__show-county" v-if="iscounty">
       <p><hd-button icon="left" @click.native="iscounty = false">返回</hd-button></p>
       <div class="hd-area-select__show-county-item">
         <a @click="selectCounty(item, $event)" :id="item.name" href="javascript:void(0)" v-for="item in county" :key="item.name">{{item.name}}</a>
       </div>
     </div>
  </div>
</template>

<script>
import areaSelectData from "./area-select-data";

function toArea(areaData) {
  let area = { idx: {}, id: {} };
  areaData.forEach(item => {
    if (item.type === "P") {
      if (area.idx[item.idx]) {
        area.idx[item.idx].push(item);
      } else {
        area.idx[item.idx] = [item];
      }
    }
    item.area = findChild(areaData, item.id);
    area.id[item.id] = item;
  });
  return area;
}

function findChild(areaData, pid) {
  const child = [];
  areaData.forEach(item => {
    if (item.pid === pid) {
      child.push(item);
    }
  });
  return child;
}

export default {
  data() {
    const area = toArea(areaSelectData);
    return {
      areas: area.idx,
      areasData: area,
      iscounty: false,
      county: []
    };
  },
  methods: {
    goCounty(city, e) {
      
      const areaSelect = this.$shared.state.areaSelect;
      areaSelect.prov = this.areasData.id[city.pid];
      areaSelect.city = city;
      areaSelect.county = "";

      //选中处理
      let prenode = this.$shared.state.prenode;
      if(prenode) {
         prenode.classList.remove("hd-area-select__active");
      }
      prenode = e.target;
      if(prenode.tagName === "A") prenode = prenode.parentNode;
      prenode.classList.add("hd-area-select__active");
      this.$shared.state.prenode = prenode;
     
      if (city.area.length === 0) {
        this.$shared.talk("controlOperation", false)
        return;
      }
      this.iscounty = true;
      this.county = city.area;

    },

    selectCounty(city, e) {
      this.$shared.state.areaSelect.county = city;
    }
  }
};
</script>

<style lang="less">
.hd-area-select__show {
  border-top: #eee 1px solid;
  margin-top: 10px;
  overflow-y: auto;
  max-height: 100px;
  position: relative;

  .hd-area-select__show-list {
    display: block;
  }

  .hd-area-select__show-item {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
  }
}

.hd-area-select__show-body {
  margin-top: -8px;
}

.hd-area-select__show-index {
  font-size: 24px;
  line-height: 1;
  margin-top: -4px;
}

.hd-area-select__show-label {
  padding: 0 8px 0 10px;
  display: inline-block;
  font-weight: 600;
  white-space: nowrap;
}

.hd-area-select__show-area {
  display: inline-block;
  padding: 8px 12px;
  a {
    color: #000;
  }
}

.hd-area-select__show-county {
  margin-top: 10px;
}

.hd-area-select__show-county-item {
  margin-top: 10px;
  a {
    display: inline-block;
    color: #000;
    padding: 0 25px 10px 0;
  }
}
</style>
