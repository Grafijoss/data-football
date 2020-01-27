import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchQuery: "aja",
    colleges: [],
    favorites: []
  },
  mutations: {
    changeSearch(state, payload = {}) {
      state.searchQuery = payload.search;
    },
    setColleges(state, payload = []) {
      state.colleges = payload.colleges;
    },
    setfavorites(state, payload = []) {
      state.favorites = payload.favorites;
    }
  }
});

export default store;
