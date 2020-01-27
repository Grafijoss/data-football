import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		searchQuery: "aja",
		schools: [],
		favorites: []
	},
	mutations: {
		changeSearch(state, payload = {}) {
			state.searchQuery = payload.search
		},
		setfavorites(state, payload = []) {
			state.favorites = payload.favorites
		}
	}
})

export default store
