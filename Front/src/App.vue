<template>
  <v-app style="overflow-y: auto;   margin-bottom: 39px;">
    <router-view name="header"></router-view>
      <v-main>
        <v-container fluid style="margin-bottom: 58%; ">
          <app-breadcrumb></app-breadcrumb>
          <keep-alive v-if="isLoggedIn">
            <router-view v-if="$route.meta.keepAlive" />
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive" />
        </v-container>
      </v-main>
    <router-view name="footer"></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import AppBreadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { Watch } from "vue-property-decorator";

@Component({
  name: "app-root",
  components: {
    AppBreadcrumb
  },
  created() {
    if (localStorage.getItem("theme") === "dark") {
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
  },
  computed: {
    isLoggedIn() {
      const result = this.$store.getters["auth/accessToken"];
      if (result) {
        return true;
      }
      return false;
    }
  }
})
export default class App extends Vue {}
</script>
