import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Hdui from './vue-install';
import guideRoutes from './guide';
// import Shared from "./shared/shared";
import "./styles/index.scss";
/////vue router
Vue.use(VueRouter);
const router = new VueRouter({
  routes: guideRoutes
})
//////
Vue.use(Hdui);
const shared = new Hdui.Shared({
  prenode: null
});

new Vue({
  el: "#root",
  template: "<App />",
  router,
  shared,
  components: {
    App
  }
})
