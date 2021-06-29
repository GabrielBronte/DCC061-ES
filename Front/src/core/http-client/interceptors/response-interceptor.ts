import { getModule } from "vuex-module-decorators";
import axios from "../instance";
import Vue from "vue";
import store from "@/store";
import Auth from "@/store/modules/Auth/Auth.module";
const vm: any = new Vue({ store: store });

const auth = getModule(Auth, store);

const handleErrorResponse = ({ response }: any) => {
  vm.$toast.clear();
  if (!response.data || response.data.Detailed) {
    vm.$toast.error(`Ocorreu um erro inesperado!`);
  } else if (Array.isArray(response.data)) {
      response.data.forEach((e: any) => vm.$toast.error(e));
  } else {
    vm.$toast.error(response.data);
  }
  return response.data;
};

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      auth.logout();
      vm.$toast.error("Usuário ou senha incorretos");
    } else {
      handleErrorResponse(error);
    }
    return Promise.reject(error);
  }
);


