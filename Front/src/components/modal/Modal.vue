<template src="./Modal.html"></template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class Modal extends Vue {
  @Prop(Boolean)
  public showModal?: boolean;

  @Prop(Boolean)
  public persistent?: boolean;

  @Prop(Number)
  public width?: number;

  @Prop(String)
  public title?: string;

  @Prop(String)
  public titleClass?: string;

  @Prop(String)
  public body?: string;

  @Prop(String)
  public bodyClass?: string;

  @Prop(String)
  public cancelButtonText?: string;

  @Prop(String)
  public submitButtonText?: string;

  @Prop(Function)
  public cancelFunction?: Function;

  @Prop(Function)
  public submitFunction?: Function;

  get getShowModal() {
    return this.showModal;
  }

  get getPersistent() {
    return this.persistent;
  }

  get getWidth() {
    return this.width;
  }

  get getTitle() {
    return this.title;
  }

  get getTitleClass() {
    return this.titleClass;
  }

  get getBody() {
    return this.body;
  }

  get getBodyClass() {
    return this.bodyClass;
  }

  get getCancelButtonText() {
    return this.cancelButtonText;
  }

  get getSubmitButtonText() {
    return this.submitButtonText;
  }

  get getSubmitFunction() {
    return this.submitFunction;
  }

  get getCancelFunction() {
    return this.cancelFunction;
  }
}
</script>
<style lang="scss" src="./Modal.scss" scoped></style>
