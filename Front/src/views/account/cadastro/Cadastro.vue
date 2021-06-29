<template src="./Cadastro.html"></template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import store from "../../../store";
import Auth from "../../../store/modules/Auth/Auth.module";
import { getModule } from "vuex-module-decorators";
import httpClient from "@/core/http-client";
import { KeyValue } from "@/core/utils/models/KeyValue";
import { CadastroModel } from "../model/cadastro.model";
import * as registerValidations from "./form-validations";
import Notify from "@/core/notify";

@Component({
     validations: {
    ...registerValidations.validations
  }
})
export default class Cadastro extends Vue {

    
  public remenderMe = true;
  public showPassword = false;
  public regional: KeyValue[] = [];
  public cadastro: CadastroModel = new CadastroModel();
  private modAuth = getModule(Auth, store);
  public notify = Notify();
  public professor = false;
  public aluno = false;

  public criarConta(){
    //this.professor? this.cadastro.role = "Professor" : this.cadastro.role = "Aluno";
    this.$router.push("/account/login");
  }

  public cancelar(){
      this.$router.push("/account/login");
  }
  get userNameErrors() {
    return registerValidations.userNameErrors(this.$v.cadastro);
  }

  get passwordErrors() {
    return registerValidations.passwordErrors(this.$v.cadastro);
  }
}
</script>
<style lang="scss" src="./Cadastro.scss" scoped></style>
