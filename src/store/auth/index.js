const state = {
	userId: null,
	isAuthenticated: false,
};

const getters = {
	getUserId(state) {
		return state.userId;
	},
	getIsAuthenticated(state) {
		return state.isAuthenticated;
	},
};

const actions = {
	//
};

const mutations = {
	//
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
