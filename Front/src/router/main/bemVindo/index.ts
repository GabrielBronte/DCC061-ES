import { RouteConfig } from "vue-router";

const prefix = "/bemVindo";
const BemVindo = () => import("@/views/bemVindo/BemVindo.vue");

const routes: RouteConfig[] = [
  {
    path: `${prefix}/`,
    component: BemVindo
  }
];

export default routes;
