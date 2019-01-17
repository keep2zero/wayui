<template>
  <div> 
   
    <div class="app-menu">
      <router-link to="/icon">ICON</router-link>
      <router-link to="/layout">布局</router-link>
      <router-link to="/input">输入框</router-link>
      <router-link to="/number">数字框</router-link>
      <router-link to="/button">按钮</router-link>
      <router-link to="/radio">单选框</router-link>
      <router-link to="/checkbox">复选框</router-link>
      <router-link to="/switch">开关</router-link>
      <router-link to="/rate">Rate</router-link>
      <router-link to="/slider">slider</router-link>
      <router-link to="/tag">Tag</router-link>
      <router-link to="/date">日期</router-link>
      <router-link to="/area">城市地区选择</router-link>


      <router-link to="/tree">树形</router-link>
      <router-link to="/tree-logic">决策树</router-link>
      <router-link to="/bage">Bage</router-link>
      <router-link to="/progress">进度条</router-link>
      <router-link to="/table">表格</router-link>
      <router-link to="/tab">Tab</router-link>
      <router-link to="/bream">面包屑</router-link>
      <router-link to="/menu">菜单</router-link>
      <router-link to="/step">步骤条</router-link>
      <router-link to="/panel">面板</router-link>
      <router-link to="/collapse">collapse</router-link>
      <router-link to="/dialog">弹出框</router-link>
      <router-link to="/popover">popover</router-link>
    </div>
    <div class="app-body">
      <h1>{{title}}</h1>
      <router-view></router-view>
    </div>


  </div>
   
</template>

<script>

export default {
  data() {
    return {
      title: "组件",
    };
  },

  mounted() {
    console.log("mounted");
  }
};
</script>
<style lang="less">
body {
  position: relative;
  padding: .75em;
}
.app-menu {
  padding: 1.25em 0;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 12.5em;
  background: #0b94f0;
  overflow-y: auto;
  a {
    display: block;
    color: #fff;
    padding: 0.5em 0.625em;
  }
  .router-link-exact-active {
     background: #fff;
     color: #0b94f0;
  }
   
}

.app-body {
  margin-left: 13.75em;
  > h1 {
    border-bottom: #eee 1px solid;
    margin-bottom: 0.625em;
    padding: 0.5em 0;
  }
}
</style>
