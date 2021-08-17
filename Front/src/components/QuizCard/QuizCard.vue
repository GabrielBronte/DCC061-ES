<template src="./QuizCard.html"></template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class QuizCard extends Vue {
  @Prop(Boolean)
  public showQuizCard?: boolean;

  @Prop(Number)
  public width?: number;

  @Prop(Number)
  public height?: number;

  @Prop(String)
  public title?: string;

  @Prop(String)
  public titleClass?: string;

  @Prop(String)
  public body?: string;

  @Prop(String)
  public bodyClass?: string;

  @Prop(String)
  public submitButtonText?: string;

  @Prop(Function)
  public submitFunction?: Function;

  get getShowQuizCard() {
    return this.showQuizCard;
  }

  get getWidth() {
    return this.width;
  }

  get getHeight() {
    return this.height;
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

  get getSubmitButtonText() {
    return this.submitButtonText;
  }

  get getSubmitFunction() {
    return this.submitFunction;
  }

}
</script>
<style lang="scss" src="./QuizCard.scss" scoped></style>
