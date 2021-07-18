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

    
  public accountHttpService = httpClient(`Account`,`https://localhost:5001/api`);
  public remenderMe = true;
  public showPassword = false;
  public regional: KeyValue[] = [];
  public cadastro: CadastroModel = new CadastroModel();
  private modAuth = getModule(Auth, store);
  public notify = Notify();
  public setAuthToken(token: string) {
    this.modAuth.setAccessToken(token);
  }

  public criarConta() {
    if (!this.$v.$invalid) {
      
      this.accountHttpService
        .post({ action: "register", body: this.cadastro })
        .then(response => {
          if (response.data.token) {
            this.setAuthToken(response.data.token);
            this.modAuth.setUserName(response.data.username);
            if(response.data.username == "professor"){
              this.modAuth.setPermissions("professor");
            }else{
              this.modAuth.setPermissions("aluno");
            }
            this.$router.push("/bemVindo");
          } else {
            this.notify.error(response.data.message);
          }
        });
    } else {
      this.$v.$touch();
    }
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
