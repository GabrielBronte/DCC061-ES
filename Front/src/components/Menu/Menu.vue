<template src="./Menu.html"></template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Notify from "@/core/notify";
import { Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import Auth from "../../store/modules/Auth/Auth.module";
import store from "../../store";
import UserMenu from "../UserMenu/UserMenu.vue";

@Component({
  name: "menu-app",
  components: {
    "user-menu": UserMenu
  }

})
export default class Menu extends Vue {
  public mini = true;
  public drawer = false;
  public items: any[] = [];
  public notify = Notify();
  logoUrl = require("../../assets/logo.png");

  public authStore = getModule(Auth, this.$store);

  get userName() {
    return this.authStore.userName;
  }

  public logout() {
    this.authStore.logout();
  }

  @Watch("mini")
  public closeAllMenu() {
    if (this.mini) {
      this.items.forEach((item) => (item.active = false));
    }
  }

  created() {
    this.items = [
      {
        icon: "mdi-home",
        "icon-alt": "mdi-chevron-down",
        text: "Home",
        allowed: true,
        action: () => this.redirect("/main")
      },
      {
        icon: "mdi-checkbox-marked-circle-outline",
        "icon-alt": "mdi-chevron-down",
        text: "Realizar Quiz",
        active: false,
        allowed: true,
        children: [
          {
            icon: "mdi-checkbox-marked-circle-outline",
            text: "Strings",
            action: () => this.redirect("/main"),
            allowed: true,
          },
          {
            icon: "mdi-checkbox-marked-circle-outline",
            text: "Estrutura de repeticao",
            action: () => this.redirect("/main"),
            allowed: true,
          },
          {
            icon: "mdi-checkbox-marked-circle-outline",
            text: "Estrutura condicional",
            action: () => this.redirect("/main"),
            allowed: true,
          },
          {
            icon: "mdi-checkbox-marked-circle-outline",
            text: "Vetores",
            action: () => this.redirect("/main"),
            allowed: true,
          }, 
        ]
      },
      {
        icon: "mdi-trophy",
        "icon-alt": "mdi-chevron-down",
        text: "Ranking",
        active: false,
        allowed: true,
        children: [
          {
            icon: "mdi-trophy",
            text: "Strings",
            action: () => this.redirect("/main"),
            allowed: true,
          },
          {
            icon: "mdi-trophy",
            text: "Estrutura de repeticao",
            action: () => this.redirect("/main"),
            allowed: true,
          },
          {
            icon: "mdi-trophy",
            text: "Estrutura condicional",
            action: () => this.redirect("/main"),
            allowed: true,
          },
          {
            icon: "mdi-trophy",
            text: "Vetores",
            action: () => this.redirect("/main"),
            allowed: true,
          }, 
        ]
      },
      {
        icon: "mdi-exit-to-app",
        text: "Logout",
        action: () => this.logout(),
        allowed: true,
      },
    ];
  }

  public redirect(url: string) {
    this.$router.push(url);
  }

  public activeDrawer() {
    this.drawer = !this.drawer;
    this.mini = !this.mini;
    this.items.forEach(function (item) {
      item.active = false;
    });
  }

  public updateTheme() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    if (this.$vuetify.theme.dark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  public notififyExample() {
    this.notify.success("Teste de notificação");
  }
}
</script>
<style lang="scss" src="./Menu.scss" scoped></style>
