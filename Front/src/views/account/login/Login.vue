<template src="./Login.html"></template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import store from "../../../store";
import Auth from "../../../store/modules/Auth/Auth.module";
import { getModule } from "vuex-module-decorators";
import httpClient from "@/core/http-client";
import { KeyValue } from "@/core/utils/models/KeyValue";
import { LoginModel } from "../model/login.model";
import * as registerValidations from "./form-validations";
import Notify from "@/core/notify";

@Component({
  validations: {
    ...registerValidations.validations
  }
})
export default class Login extends Vue {
  public remenderMe = true;
  public showPassword = false;
  public regional: KeyValue[] = [];
  public login: LoginModel = new LoginModel();
  public changePasswordModal = false;

  private modAuth = getModule(Auth, store);
  public notify = Notify();
  logoUrl = require("../../../assets/logo.png");

  public accountHttpService = httpClient("Account", process.env.VUE_APP_API_URL);

  created() {
    this.modAuth.resetState();
  }

  public authorization() {
    if (!this.$v.$invalid) {
      
      this.accountHttpService
        .post({ action: "login", body: this.login })
        .then(response => {
          if (response.data.token) {
            this.setAuthToken(response.data.token);
            this.modAuth.setUserName(response.data.username);
            // this.modAuth.setPermissions(response.data.permissions);

            // this.modAuth.setAdministrationCode(
            //   response.data.administrationCode
            // );

            this.$router.push("/main");
          } else {
            this.notify.error(response.data.message);
          }
        });
    } else {
      this.$v.$touch();
    }
  }

  public createAccount(){
    this.$router.push("/account/cadastro");
  }

  public setAuthToken(token: string) {
    this.modAuth.setAccessToken(token);
  }


  get userNameErrors() {
    return registerValidations.userNameErrors(this.$v.login);
  }

  get passwordErrors() {
    return registerValidations.passwordErrors(this.$v.login);
  }
}
</script>
<style lang="scss" src="./Login.scss" scoped></style>
