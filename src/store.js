import Vue from "vue";
import Vuex from "vuex";
import storePersist from "store";
import collegesService from "@/services/colleges";

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
  },
  actions: {
    setCollegesAsync(context, payload = []) {
      const colleges =
        storePersist.get("colleges") && !!storePersist.get("colleges").length;
      if (colleges) {
        return context.commit("setColleges", {
          colleges: storePersist.get("colleges")
        });
      } else {
        return collegesService.getAll().then(res => {
          storePersist.set("colleges", res);
          context.commit("setColleges", { colleges: res });
        });
      }
    },
    setFavoritesAsync(context) {
      const favorites = storePersist.get("favorites");
      const favoritesExist = favorites && !!favorites.length;
      if (favoritesExist) context.commit("setfavorites", { favorites });
    }
  }
});

export default store;
