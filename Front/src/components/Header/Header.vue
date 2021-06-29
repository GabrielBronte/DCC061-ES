<template src="./Header.html"></template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Menu from "../Menu/Menu.vue";
import UserMenu from "../UserMenu/UserMenu.vue";
@Component({
  components: {
    "menu-app": Menu,
    "user-menu": UserMenu
  }
})
export default class Header extends Vue {

  logoUrl = require("../../assets/logo.png");
  
  public openMenu() {
    (this.$refs.menuRef as any).activeDraw();
  }
  
}
</script>
<style lang="scss" src="./Header.scss" scoped></style>
