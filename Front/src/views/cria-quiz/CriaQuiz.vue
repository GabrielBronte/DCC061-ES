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
    
    public cadastroAlternativas: CadatroAlternativasModel = {
        descricao : "BRONTE",
        comentario :"crau BRONTE",
        eCorreto : true
    };
    public cadastroQuestao: CadastroQuestaoModel = {
        pergunta : "BRONTEBRONTEBRONTEBRONTEBRONTE?",
        alternativas: [this.cadastroAlternativas]
    };
    public cadastroQuiz: CadastroQuizModel = {
        topico : "as fadas com BRONTE",
        questao : [this.cadastroQuestao]
    };

    mounted(){
        console.log(this.cadastroQuiz)
    }


  public CadastrarQuiz() {
      this.quizHttpService
        .post({ action: "quizRegister", body: this.cadastroQuiz })
        .then(response => {
          if (response.data.id) {
              this.notify.success("Quiz criado com sucesso!");

          } else {
            this.notify.error(response.data.message);
          }
        });
  }



};
</script>
<style lang="scss" src="./CriaQuiz.scss" scoped></style>
