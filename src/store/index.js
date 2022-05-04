import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/Auth.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    cnt(state) {
      return state.count;
    },
  },
  mutations: {
    changeCount(state, number) {
      state.count += number;
    },
  },
  actions: {
    changeCount(context, number) {
      context.commit("changeCount", number);
    },
  },
  modules: {
    Auth,
  },
});
