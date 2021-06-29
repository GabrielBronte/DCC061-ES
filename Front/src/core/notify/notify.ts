import Vue from "vue";
const vm = new Vue();

export default class Notify {
  public success(message: string) {
    vm.$toast.success(message);
  }

  public warning(message: string) {
    vm.$toast.warning(message);
  }

  public error(message: string) {
    vm.$toast.error(message);
  }
}
