<template src="./Error.html"></template>
<script lang="ts">
import store from "@/store";
import Auth from "@/store/modules/Auth/Auth.module";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

@Component({})
export default class ErrorComponent extends Vue {
  public errorCode = "";
  public title = "";
  public infos: string[] = new Array<string>();
  public message = "";
  public action = "";
  constructor() {
    super();
  }

  public created() {
    const modAuth = getModule(Auth, store);
    this.errorCode = this.$route.params.errorCode.toString();
    switch (this.errorCode) {
      case "400":
        this.title = "Bad Request";
        this.message =
          "O código de status 400, ou erro de Solicitação incorreta, significa que a solicitação HTTP que foi enviada ao servidor tem sintaxe inválida.";
        this.action = "home";
        break;
      case "401":
        this.title = "Unauthorized";
        this.message =
          "O código de status 401, ou um erro não autorizado, significa que o usuário que está tentando acessar o recurso não foi autenticado ou não foi autenticado corretamente. Isso significa que o usuário deve fornecer credenciais para poder visualizar o recurso protegido.";
        modAuth.accessToken
          ? (this.action = "home")
          : (this.action = "account/login");
        break;
      case "403":
        this.title = "Forbidden";
        this.message =
          "O código de status 403, ou um erro Proibido, significa que o usuário fez uma solicitação válida, mas o servidor está se recusando a atendê-la, devido à falta de permissão para acessar o recurso solicitado. Se você encontrar um erro 403 inesperadamente, existem algumas causas típicas explicadas aqui.";
        modAuth.accessToken
          ? (this.action = "home")
          : (this.action = "account/login");
        break;
      case "404":
        this.title = "Not Found";
        this.message =
          "O código de status 404, ou um erro Não encontrado, significa que o usuário pode se comunicar com o servidor, mas não consegue localizar o arquivo ou recurso solicitado.";
        modAuth.accessToken
          ? (this.action = "home")
          : (this.action = "account/login");
        break;
      case "500":
        this.title = "Internal Server Error";
        this.message =
          "O código de status 500, ou Erro interno do servidor, significa que o servidor não pode processar a solicitação por um motivo desconhecido. Às vezes, esse código aparece quando erros 5xx mais específicos são mais apropriados.";
        modAuth.accessToken
          ? (this.action = "home")
          : (this.action = "account/login");
        break;
      case "502":
        this.title = "Bad Gateway";
        this.message =
          "O código de status 502, ou erro de Gateway inválido, significa que o servidor é um servidor proxy ou gateway e não está recebendo uma resposta válida dos servidores back-end que realmente devem atender à solicitação.";
        modAuth.accessToken
          ? (this.action = "home")
          : (this.action = "account/login");
        break;
      case "503":
        this.title = "Service Unavailable";
        this.message =
          "O código de status 503, ou erro de Serviço Indisponível, significa que o servidor está sobrecarregado ou em manutenção. Este erro implica que o serviço fique disponível em algum momento.";
        modAuth.accessToken
          ? (this.action = "home")
          : (this.action = "account/login");
        break;
      case "504":
        this.title = "Gateway Timeout";
        this.message =
          "O código de status 504, ou erro de tempo limite do gateway, significa que o servidor é um servidor proxy ou gateway e não está recebendo uma resposta dos servidores de back-end dentro do período permitido.";
        modAuth.accessToken
          ? (this.action = "home")
          : (this.action = "account/login");
        break;
      default:
        this.title = "Unexpected Error";
        this.message = "Um erro não esperado ocorreu.";
        modAuth.accessToken
          ? (this.action = "home")
          : (this.action = "account/login");
        break;
    }
  }

  public redirect() {
    this.$router.push(`/${this.action}`);
  }
}
</script>
<style lang="scss" src="./Error.scss"></style>
