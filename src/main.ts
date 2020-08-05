import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "./assets/css/base.scss";
import "./assets/css/my-mint.scss"; //全局修改mint-UI样式

import "lib-flexible/flexible";

import "./config/rem.js";

Vue.use(MintUI);

Vue.config.productionTip = false;
Vue.prototype.$toast = MintUI.Toast;
declare module "vue/types/vue" {
  interface Vue {
    $toast: any;
  }
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
