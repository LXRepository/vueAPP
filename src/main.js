// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import "./javascripts/rem";
import "./stylesheets/main.scss";
import Vue from 'vue';
import App from './App';
import router from "./router/index.js";
import bus from "./javascripts/bus.js";
import { InfiniteScroll } from "mint-ui";
Vue.use(InfiniteScroll);

Vue.prototype.bus = bus;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
