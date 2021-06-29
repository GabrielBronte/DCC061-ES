<template src="./LogModal.html"></template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import InfiniteLoading from "vue-infinite-loading";

@Component({
  components: {
    InfiniteLoading,
  },
})
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

  @Prop(Array)
  public logs?: any[];

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

  public icon = "fas fa-circle";
  public listaErros: any[] = [];
  public exibeListaErros: any[] = [];
  public pageItems = 10;
  public totalDeErros = 0;
  public totalDeErrosExibidos = 0;
  public infiniteId = 0;

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

  get getCancelFunction() {
    this.resetaErros();
    return this.cancelFunction;
  }

  @Watch("logs")
  public logErrosChange() {
    if (this.logs) this.atualizaListaErros();
  }

  public atualizaListaErros() {
    
    if (this.logs) {
      this.resetaErros();
      this.listaErros = this.logs;
      this.totalDeErros = this.listaErros.length;
    }
  }

  public resetaErros(){
    this.listaErros = [];
    this.exibeListaErros = [];
    this.totalDeErros = 0;
    this.totalDeErrosExibidos = 0;
    this.infiniteId = 0;
  }

  public infiniteHandler($state: any) {
    if (this.totalDeErrosExibidos < this.totalDeErros) {
      for (let i = 0; i < this.pageItems; i++) {
        if (this.listaErros[this.totalDeErrosExibidos] != "") {
          this.exibeListaErros.push(this.listaErros[this.totalDeErrosExibidos]);
          this.totalDeErrosExibidos++;
        }
        if (this.totalDeErrosExibidos == this.totalDeErros) {
          this.totalDeErrosExibidos++;
          $state.complete();
          this.infiniteId++;
          break;
        }
      }
      $state.loaded();
    } 
    if (this.totalDeErrosExibidos > this.totalDeErros){
      $state.reset();
      this.infiniteId++;
    }
  }

}
</script>
<style lang="scss" src="./LogModal.scss" scoped></style>
