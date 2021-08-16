<template src="./Quiz.html"></template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Auth from "../../store/modules/Auth/Auth.module";
import { getModule } from "vuex-module-decorators";
import store from "../../store";
import httpClient from "@/core/http-client";
import { CadastroQuizModel } from "../cria-quiz/models/cadastroQuiz.model";
import { CadastroQuestaoModel } from "../cria-quiz/models/cadastroQuestao.model";
import { CadatroAlternativasModel } from "../cria-quiz/models/cadastroAlternativas.model";
import Notify from "@/core/notify";
import QuizCard from "@/components/QuizCard/QuizCard.vue";
import Modal from "@/components/modal/Modal.vue";

@Component({
  components:{
    quizCard: QuizCard,
    modal: Modal,

  }
})

export default class Quiz extends Vue  {
    public notify = Notify();
    public quizHttpService = httpClient(`Quiz`,`https://localhost:5001/api`);

    public allQuizzes: CadastroQuizModel[] = [];
    public quizSelecionado: CadastroQuizModel = new CadastroQuizModel();
    public showQuizCard = true;
    public tituloCard = "Titulo do Card";
    public corpoCard = "Clique para realizar a primeira tentativa";
    public selecionarCard = new Function();


    public submitFunction = new Function();
    public exibirModalExclusao = false;
    public tituloModal = "";
    public corpoModal = "";

  fecharModalExclusao() {
    this.exibirModalExclusao = false;
  }


    public PopulaQuizzes(){
        this.quizHttpService
        .get({ action: "GetAllQuizzes"})
        .then(response => {
          if (response.data != null) {
              this.allQuizzes= response.data;
              console.log(this.allQuizzes)
          } else {
            this.notify.error("Não foi possivel receber os Quizzes!");
          }
        });
    }

    jogarQuiz(){
      //this.selecionarCard = funcao que abre o modal para começar a jogar o quiz
    }




};
</script>
<style lang="scss" src="./Quiz.scss" scoped></style>
