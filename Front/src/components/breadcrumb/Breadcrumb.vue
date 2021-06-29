<template>
  <v-card v-show=" breadcrumbList && breadcrumbList.length > 0" class="mx-6" :rounded="true">
    <v-breadcrumbs :items="breadcrumbList">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
      <v-breadcrumbs-item
        slot="item"
        slot-scope="{ item }"
        exact
        :disabled="item.disabled"
        :class="[!item.disabled && 'link']"
        :to="item.to"
      >{{ item.text }}</v-breadcrumbs-item>
    </v-breadcrumbs>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "app-breadcrumb"
})
export default class AppBreadcrumb extends Vue {
  public breadcrumbList: any[] = [];

  @Watch("$route", { immediate: true, deep: true })
  public onUrlChange(newVal: any) {
    this.updateList();
  }

  public mounted() {
    this.updateList();
  }

  public updateList(): any {
    this.breadcrumbList = this.$route.meta.breadcrumb;
    return;
  }
}
</script>

<style lang='scss' src='../breadcrumb/Breadcrumb.scss' scoped></style>