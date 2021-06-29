import { LoadState } from './model/Load.state';
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import store from "../../index";
import Vue from "vue";
const vm: any = new Vue({ store: store });

@Module({ namespaced: true, name: "load" })
export default class Load extends VuexModule {
    public loadState: LoadState = new LoadState();

    @Mutation
    public queue() {
        this.loadState.queue.push(true);
    }

    @Mutation
    public dequeue() {
        if (this.loadState.queue.length > 0) {
            this.loadState.queue.pop();
        }
    }

    @Action
    public showLoading(loading: boolean) {
        if (loading && (this.loadState.loading == undefined || !this.loadState.loading.isActive)) {
            this.queue();
            this.loadState.loading = vm.$loading.show();
        }
    };

    @Action
    public hideLoading() {
        this.dequeue();
        if (this.loadState.queue.length == 0) {
            this.loadState.loading.hide();
        }
    };
}
