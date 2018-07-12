<template>
  <div class="hd-area-select__operation">
    <div class="hd-area-select__search">
      <hd-input icon-prefix="search" v-model="searchName"></hd-input>
      <hd-button slot="suffix" @click.native="search">搜索</hd-button>
    </div>
    <div class="hd-area-select__index">
       <span>省</span>
       <a href="javascript:void(0);" @click="toPosition(item)" v-for="item in indexs" :key="item">{{item}}</a>
    </div>
   
    <area-select-show ref="selectShow"/>
    
  </div>
</template>

<script>
  import AreaSelectShow from "./area-select-show.vue";
  export default {
    components: {
      AreaSelectShow
    },
    data() {
      
      return {
        searchName: "",
        // presearch: null,
        indexs: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      }
    },
    methods: {

      toPosition(item) {
        const docitem = document.getElementById(item);
        if(docitem) {
          this.$refs.selectShow.$el.scrollTop = docitem.offsetTop;
        }
        return docitem;
      },

      search() {
        if(this.$shared.state.prenode) {
          this.$shared.state.prenode.classList.remove("hd-area-select__active")
        } 
        this.$shared.state.prenode = this.toPosition(this.searchName);
        if(this.$shared.state.prenode) {
          this.$shared.state.prenode.classList.add("hd-area-select__active");
        }
        
      }
    },

    mounted() {
      
    }
  }
</script>

<style lang="less">
  .hd-area-select__operation {
    display: flex;
    flex-direction: column;
    border: #DFE3E9 1px solid;
    border-radius: 4px;
    position: absolute;
    right: 0;
    left: 0;
    top: 35px;
    padding: 16px 18px;
    background-color: #fff;
    .hd-input {
      flex-grow: 2;
      margin-right: 5px; 
    }
    .hd-input__input {
      padding-left: 0;
    }
    .hd-input__prefix {
      background: transparent;
    }
  }

  .hd-area-select__search {
    display: flex;
    flex-basis: 100%;
  }

  .hd-area-select__index {
    
    span, a {
      display: inline-block;
      padding: 9px 9px 0 9px;
      color: #000;
    }
  }

  .hd-area-select__active {
    background-color: #FF7A83;
    border-radius: 15px;
    color: #fff;
    a {
      color: #fff!important;
    }
  }
</style>
