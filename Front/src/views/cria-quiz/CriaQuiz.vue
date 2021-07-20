<template src="./CriaQuiz.html"></template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Auth from "../../store/modules/Auth/Auth.module";
import { getModule } from "vuex-module-decorators";
import store from "../../store";
import httpClient from "@/core/http-client";
import { CadastroQuizModel } from "./models/cadastroQuiz.model";
import { CadastroQuestaoModel } from "./models/cadastroQuestao.model";
import { CadatroAlternativasModel } from "./models/cadastroAlternativas.model";
import Notify from "@/core/notify";

@Component({})

export default class CriaQuiz extends Vue  {
  public notify = Notify();
  public quizHttpService = httpClient(`Quiz`,`https://localhost:5001/api`);


  public cadastroAlternativaLetraA: CadatroAlternativasModel = new CadatroAlternativasModel();
  public cadastroAlternativaLetraB: CadatroAlternativasModel = new CadatroAlternativasModel();
  public cadastroAlternativaLetraC: CadatroAlternativasModel = new CadatroAlternativasModel();
  public cadastroAlternativaLetraD: CadatroAlternativasModel = new CadatroAlternativasModel();
  public cadastroQuestao: CadastroQuestaoModel = new CadastroQuestaoModel();
  public cadastroQuiz: CadastroQuizModel = new CadastroQuizModel();
  
  public numeroQuestoes = 1;

  @Watch("numeroQuestoes")
  public AumentouNumeroQuestoes() {
    if (this.numeroQuestoes) {
      this.AcumulaDados();
      this.ResetaDados();
    }
  }

  get DuasOuMaisQuestoes(){
    if(this.numeroQuestoes > 1)
      return false;
    else return true;
  }

  public AcumulaDados(){
    this.cadastroQuestao.alternativas.push(this.cadastroAlternativaLetraA,this.cadastroAlternativaLetraB,this.cadastroAlternativaLetraC,this.cadastroAlternativaLetraD);
    this.cadastroQuiz.questao.push(this.cadastroQuestao);
  }

  public ResetaDados(){
    this.cadastroAlternativaLetraA = new CadatroAlternativasModel();
    this.cadastroAlternativaLetraB = new CadatroAlternativasModel();
    this.cadastroAlternativaLetraC = new CadatroAlternativasModel();
    this.cadastroAlternativaLetraD = new CadatroAlternativasModel();
    this.cadastroQuestao = new CadastroQuestaoModel();
  }
  public ProximaQuestao(){
    this.numeroQuestoes++;
  }


  public CadastrarQuiz() {
    this.ProximaQuestao();
      this.quizHttpService
        .post({ action: "quizRegister", body: this.cadastroQuiz })
        .then(response => {
          if (response.data.id) {
              this.notify.success("Quiz criado com sucesso!");
              this.ResetaDados();
              this.numeroQuestoes=1;
              this.cadastroQuiz=new CadastroQuizModel();
          } else {
            this.notify.error("Ocorreu um erro inesperado!");
          }
        });
  }



};
</script>
<style lang="scss" src="./CriaQuiz.scss" scoped></style>
