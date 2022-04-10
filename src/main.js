import Vue from "vue";
import VueSweetalert from "vue-sweetalert2";
import App from "./App.vue";
import router from "./router/index.js";

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


const options = {
  confirmButtonColor: "#458FF6",
  cancelButtonColor: "#ff7674",
};
 
Vue.use(VueSweetalert, options);
Vue.config.productionTip = false;


new Vue({
  router,
  VueSweetalert,
  render: (h) => h(App),
}).$mount("#app");
