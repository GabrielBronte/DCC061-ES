import { RouteConfig } from "vue-router";

const prefix = "/quiz";
const Quiz = () => import("@/views/quiz/Quiz.vue");

const routes: RouteConfig[] = [
  {
    path: `${prefix}/`,
    component: Quiz
  }
];

export default routes;
