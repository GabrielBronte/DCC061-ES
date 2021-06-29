import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@/assets/imports.scss";

Vue.use(Toast, {
  position: "top-right",
  transition: "Vue-Toastification__slideBlurred"
});
