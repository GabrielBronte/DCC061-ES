<template src="./Footer.html"></template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  name: "app-footer"
})
export default class Footer extends Vue {
  public version = process.env.VUE_APP_VERSION;  
  public name = process.env.VUE_APP_NAME;  
}
</script>
<style lang="scss" src="./Footer.scss" scoped></style>
