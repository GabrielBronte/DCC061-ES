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

    public allTopics: CadastroQuizModel[] = [];
    public quizSelecionado: CadastroQuizModel = new CadastroQuizModel();
    public showQuizCard = true;
    public tituloCard = "Titulo do Card";
    public corpoCard = "Clique para realizar a primeira tentativa";


    //public submitFunction = new Function();
    public exibirModalRealizaQuiz = false;
    public tituloModal = "";
    public corpoModal = "";
    public cachorro = new Function();

    mounted(){
      this.quizHttpService
        .get({ action: "GetAllTopics"})
        .then(response => {
          if (response.data != null) {
              this.allTopics= response.data;
              console.log(this.allTopics)

          } else {
            this.notify.error("Não foi possivel receber os Quizzes!");
          }
        });
    }

    public handleJogar (quizId: number){
    console.log(quizId);
    }

    public proximaQuestao(){
        console.log("teste")
    }

    
    public alteraShowModal(){
      this.exibirModalRealizaQuiz == false? 
        this.exibirModalRealizaQuiz=true : this.exibirModalRealizaQuiz=false;
    }

    

   




};
</script>
<style lang="scss" src="./Quiz.scss" scoped></style>
