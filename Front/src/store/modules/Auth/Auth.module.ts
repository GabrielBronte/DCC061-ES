import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { AuthState } from "./model/Auth.state";
import router from "@/router";

@Module({
  namespaced: true,
  stateFactory: true,
  name: "auth"
})
export default class Auth extends VuexModule {
  public userInfo: AuthState = new AuthState();

  @Mutation
  public setAccessToken(accessToken: string) {
    this.userInfo.accessToken = accessToken;
  }

  @Mutation
  public setPermissions(permissions: string[]) {
    this.userInfo.permissions = permissions;
  }

  @Mutation
  public setUserName(userName: string) {
    this.userInfo.userName = userName;
  }

  @Mutation
  public setAdministrationCode(administrationCode: number) {
    this.userInfo.administrationCode = administrationCode;
  }

  @Mutation
  public resetState(){
    this.userInfo = {...new AuthState()};
  }

  get accessToken() {
    return this.userInfo.accessToken;
  }

  get userName(){
    return this.userInfo.userName;
  }

  get permissions() {
    return this.userInfo.permissions;
  }
  
  get administrationCodes() {
    return this.userInfo.administrationCode;
  }

  @Action
  public logout() {
    this.context.commit("setAccessToken", "");
    if (router.currentRoute.fullPath != "/account/login") {
      router.push("/account/login");
    }
  }
}
