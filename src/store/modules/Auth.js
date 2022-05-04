export default {
  state: {
    text: "",
  },
  getters: {
    name(state) {
      return state.text;
    },
  },
  mutations: {
    setName(state, name) {
      state.text = name;
    },
  },
  actions: {
    setName({ commit }, name) {
      commit("setName", name);
    },
  },
};
