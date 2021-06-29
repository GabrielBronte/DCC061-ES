<template src="./Demo.html"></template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Notify from "@/core/notify";
import { Item } from "@/models/Item";
import httpClient from "@/core/http-client";
import { mask } from "vue-the-mask";

@Component({
  directives: {
    mask,
  },
})
export default class Demo extends Vue {
  public dummyHttpClient = httpClient("dummy");
  public notify = Notify();

  public item: Item = new Item();

  public classroomNameError = "";
  public studentNumberError = "";
  public chairNumberError = "";

  public data: Item[] = [];

  public headers: any[] = [
    { text: "ID", value: "id" },
    { text: "Nome da Turma", value: "classroomName" },
    { text: "Nº Alunos", value: "studentNumber" },
    { text: "Nº Cadeiras", value: "chairNumber" },
    { text: "Ações", value: "actions", sortable: false, align: "center" },
  ];

  public messages: string[] = [];
  public dialog = false;

  public dialogManager = false;
  public edition = false;
  public editionId = "0";

  public footerOptions = {
    "items-per-page-options": [3, 5, 10],
    "items-per-page-text": "Registros por página",
  };

  public created() {
    this.searchItems();
  }

  public addItem() {
    this.dialogManager = true;
    this.edition = false;
    this.item = new Item();
    this.clearErrorMessages();
  }

  public editItem(id: string, item: Item) {
    this.dialogManager = true;
    this.edition = true;
    this.editionId = id;
    this.item.classroomName = item.classroomName;
    this.item.studentNumber = item.studentNumber;
    this.item.chairNumber = item.chairNumber;
    this.clearErrorMessages();
  }

  public get modalTitle() {
    return this.edition ? "Editar Turma" : "Cadastrar Turma";
  }

  public clearErrorMessages() {
    this.classroomNameError = "";
    this.studentNumberError = "";
    this.chairNumberError = "";
  }

  public saveData() {
    if (this.item.classroomName == "") {
      this.classroomNameError = "Informe o nome da turma";
    } else if (this.item.classroomName.length > 50) {
      this.classroomNameError = "O nome da turma não pode ser maior que 50";
    } else this.classroomNameError = "";

    if (this.item.studentNumber <= 0) {
      this.studentNumberError = "Informe uma quantidade maior que 0";
    } else this.studentNumberError = "";

    if (this.item.chairNumber <= 0) {
      this.chairNumberError = "Informe uma quantidade maior que 0";
    } else this.chairNumberError = "";

    if (
      this.classroomNameError != "" ||
      this.studentNumberError != "" ||
      this.chairNumberError != ""
    )
      return;

    if (!this.edition) {
      this.dummyHttpClient
        .post({ body: this.item })
        .then((result) => {
          this.notify.success("Dados cadastrados com sucesso.");
          this.searchItems();
          this.item = new Item();
        })
        .catch(() => {
          this.notify.error("Erro ao cadastrar os dados.");
        });
    } else {
      this.dummyHttpClient
        .put({ action: this.editionId, body: this.item })
        .then((result) => {
          this.notify.success("Dados alterados com sucesso.");
          this.searchItems();
          this.item = new Item();
        })
        .catch(() => {
          this.notify.error("Erro ao alterar os dados.");
        });
    }

    this.dialogManager = false;
  }

  public searchItems() {
    this.dummyHttpClient
      .get({ action: "list" })
      .then((result) => {
        this.data = result.data;
      })
      .catch((error) => {
        this.notify.error("Erro ao buscar os dados.");
      });
  }

  public deleteItem(id: string) {
    this.dummyHttpClient
      .delete({ action: `${id}` })
      .then(() => {
        this.notify.success("Item excluído com sucesso.");
        this.searchItems();
      })
      .catch(() => {
        this.notify.error("Erro ao excluir item.");
      });
  }

  public validateItems() {
    this.dummyHttpClient.get({ action: "validate" }).then((result) => {
      if (!result.data.valid) {
        this.messages = result.data.reviews;
        this.dialog = true;
      } else {
        this.notify.success("Todos os dados estão corretos.");
      }
    });
  }

  public sendItems() {
    this.dummyHttpClient
      .get({ action: "send" })
      .then((e) => {
        this.notify.success("Dados enviados com sucesso.");
      })
      .catch();
  }
}
</script>
<style lang="scss" src="./Demo.scss" scoped></style>
