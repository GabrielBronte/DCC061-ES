import { RouteConfig } from "vue-router";

const prefix = "/error";
const ErrorPage = () => import("@/views/error/Error.vue");

const routes: RouteConfig[] = [
  {
    path: `${prefix}/:errorCode`,
    component: ErrorPage
  }
];

export default routes;
