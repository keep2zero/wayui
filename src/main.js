import Vue from 'vue';
import App from './App';
import Hdui from './vue-install';


import "./styles/index.scss";

Vue.use(Hdui);

new Vue({
  el: "#root",
  template: "<App />",
  components: {
    App
  }
})
