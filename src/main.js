import Vue from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import router from "./routes";
import store from "./store";

const options = {};
Vue.use(Toast, options);
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
	store,
}).$mount("#app");
