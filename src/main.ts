import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Amplify from 'aws-amplify'

const aws_exports = require('./aws-exports.js');
const components = require('aws-amplify-vue');

Vue.config.productionTip = false;

Amplify.configure(aws_exports);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
