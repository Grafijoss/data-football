import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import ModalNew from "@/components/layout/modal-favorite.vue";

import EventBus from "@/plugins/event-bus";
import store from "./store";

import routes from "@/routes";
import toElipsis from '@/filters/elipsis'

const router = new VueRouter({ routes, mode: "history" });

Vue.use(VueRouter);
Vue.use(EventBus);
Vue.component("new-modal", ModalNew);
Vue.use(toElipsis);

new Vue({
	el: "#app",
	render: h => h(App),
	store,
	router
});
