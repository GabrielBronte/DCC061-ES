import Vue from "vue";
import Vuex, { Payload, Store } from "vuex";
import Auth from "./modules/Auth/Auth.module";
import Load from "./modules/Load/Load.module";
import VuexPersist from "vuex-persist";
import { State } from "./state";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex", // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localStorage
  reducer: (state: State) => ({ auth: state.auth })
});

const store = new Vuex.Store({
  modules: {
    auth: Auth,
    load: Load
  },
  plugins: [vuexLocalStorage.plugin]
});

export default store;
