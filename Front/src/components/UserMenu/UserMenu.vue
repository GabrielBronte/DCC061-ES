<template src="./UserMenu.html"></template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Auth from "../../store/modules/Auth/Auth.module";
import { getModule } from "vuex-module-decorators";
import store from "../../store";

@Component({
  name: "user-menu"
})
export default class UserMenu extends Vue {
  public authStore = getModule(Auth, this.$store);

  get userName() {
    return this.authStore.userName;
  }

  public logout() {
    this.authStore.logout();
  }
}
</script>
<style lang="scss" src="./UserMenu.scss" scoped></style>
