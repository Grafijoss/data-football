import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		searchQuery: "aja",
		schools: []
	},
	mutations: {
		changeSearch(state, payload = {}) {
			state.searchQuery = payload.search
		}
	}
})

export default store
