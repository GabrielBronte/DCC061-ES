import VueRouter from "vue-router";
import routes from "./root";
import Vue from "vue";
import * as globalGuard from "./guard";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes
});

router.beforeEach(globalGuard.beforeEach);

export default router;
