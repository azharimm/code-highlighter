import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import highlight from "./highlight";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
        auth,
        highlight
	},
});
