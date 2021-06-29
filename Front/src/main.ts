import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate';
import "./plugins/LoadingOverlay/index";
import "./plugins/Notify/index";
import "./core/filters/cpf_cnpj.filter";
import "./plugins/VueCurrencyFilter/index";
import "./plugins/InfiniteLoading/index"
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import vuetify from "@/plugins/Vuetify"; // path to vuetify export

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
