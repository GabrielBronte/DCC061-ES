<template src="./Home.html"></template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Auth from "../../store/modules/Auth/Auth.module";
import { getModule } from "vuex-module-decorators";
import store from "../../store";

@Component({
  name: "main-page"
})
export default class Home extends Vue  {
  
  public authStore = getModule(Auth, this.$store);

  get userName() {
    return this.authStore.userName;
  }
 
  logoUrl = require("../../assets/logoPreta.png");
};
</script>
<style lang="scss" src="./Home.scss" scoped></style>
