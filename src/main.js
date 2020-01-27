import Vue from "vue";
import App from "@/App.vue";
import ModalNew from "@/components/layout/modal-favorite.vue";

import EventBus from '@/plugins/event-bus'

Vue.use(EventBus)
Vue.component('new-modal', ModalNew)

new Vue({
	el: "#app",
	render: h => h(App)
});
