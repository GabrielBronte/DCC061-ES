<template src="./ChangePassword.html"></template>

<script lang="ts">
import Vue from "vue";
import Notify from "@/core/notify";
import httpClient from "@/core/http-client";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import HttpClient from "@/core/http-client/http-client";
import notify from "@/core/notify";
import store from "@/store";
import { Emit, Prop, Watch } from "vue-property-decorator";
import { ChangePasswordModel } from "./models/ChangePassword.model";
import Auth from "@/store/modules/Auth/Auth.module";
import * as registerValidations from "./form-validations";

@Component({
  name: "change-password",
  validations: {
    ...registerValidations.validations
  }
})
export default class ChangePassword extends Vue {
  
  @Prop()
  public open = true;
  public disabledLogin = false;
  public showActualPassword = false;
  public showNewPassword = false;
  public showConfirmPassword = false;
  public changePasswordModel: ChangePasswordModel = new ChangePasswordModel();
  private httpClientAccount = httpClient("account");
  private notify = notify();
  private modAuth = getModule(Auth, store);

  public changePassword() {
    if (!this.$v.$invalid) {
      this.httpClientAccount
        .post({
          action: "change-password",
          body: this.changePasswordModel
        })
        .then(e => {
          this.notify.success("Senha alterada com sucesso.");
          this.resetModel();
          this.closeModal();
        });
    } else {
      this.$v.$touch();
    }
  }

  private resetModel() {
    this.changePasswordModel = new ChangePasswordModel();
    this.showActualPassword = false;
    this.showNewPassword = false;
    this.showConfirmPassword = false;
  }

  get loginErrors() {
    return registerValidations.loginErrors(this.$v.changePasswordModel);
  }

  get actualPasswordErrors() {
    return registerValidations.actualPasswordErrors(
      this.$v.changePasswordModel
    );
  }

  get newPasswordErrors() {
    return registerValidations.newPasswordErrors(this.$v.changePasswordModel);
  }

  get confirmedPasswordErrors() {
    return registerValidations.confirmedPasswordErrors(
      this.$v.changePasswordModel
    );
  }

  @Emit("close-modal")
  public closeModal() {
    this.resetModel();
    return !this.open;
  }

  @Watch("open")
  private resetForm() {
    if (this.modAuth.userName) {
      this.changePasswordModel.userName = this.modAuth.userName;
      this.disabledLogin = true;
    }
    this.$v.changePasswordModel.$reset();
  }

}
</script>
<style lang="scss" src="./ChangePassword.scss" scoped></style>
