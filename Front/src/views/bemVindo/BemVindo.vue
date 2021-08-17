<template src="./BemVindo.html"></template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Auth from "../../store/modules/Auth/Auth.module";
import { getModule } from "vuex-module-decorators";
import store from "../../store";

@Component({
})

export default class BemVindo extends Vue  {
  
  public authStore = getModule(Auth, this.$store);

  get userName() {
    return this.authStore.userName;
  }

  get accessToken() {
    return this.authStore.accessToken;
  }


  get permissions() {
    return this.authStore.permissions;
  }
  
  get administrationCodes() {
    return this.authStore.administrationCodes;
  }
 
};
</script>
<style lang="scss" src="./BemVindo.scss" scoped></style>
