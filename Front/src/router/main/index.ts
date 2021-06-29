import { RouteConfig } from "vue-router";

const prefix = "/main";
const Home = () => import("@/views/home/Home.vue");
const About = () => import("@/views/about/About.vue");
const Demo = () => import("@/views/demo/Demo.vue");
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

const routes: RouteConfig[] = [
  {
    path: `${prefix}`,
    name: "",
    components: {
      header: Header,
      default: Home,
      footer: Footer
    },
    meta: {
      // requiresAuth: true
    },
    children: [
      {
        path: "about",
        name: "about",
        component: About
      },
      {
        path: "demo",
        name: "demo",
        component: Demo
      },
      // ...ClientRelationshipRoutes,
      // ...InconsistencyRoutes,
      // ...SchedulerRoutes,
      // ...ProcessingTrackingRoutes
    ]
  }
];

export default routes;
