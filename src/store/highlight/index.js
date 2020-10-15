import api from "../../api";

const state = {
	listHighlight: [],
    listBahasa: [],
    settingHighlight: {
        lang: null,
        fileName: null,
        highlight: null,
    },
	isEdit: false,
	error: {
		isError: false,
		errMsg: null,
	},
};

const getters = {
	listHighlight(state) {
		return state.listHighlight;
	},
	listBahasa(state) {
		return state.listBahasa;
	},
	settingHighlight(state) {
		return state.settingHighlight;
    },
	error(state) {
		return state.error;
	},
};

const actions = {
	async fetchListBahasa({ commit }) {
		let response = await api.get("/options");
		commit("SET_LIST_BAHASA", response.data.data.languages);
    },
    setSelectedBahasa({commit}, bahasa) {
        console.log(bahasa);
        commit('SET_SELECTED_BAHASA', bahasa);
    },
    setFileName({ commit }, fileName) {
        commit('SET_FILE_NAME', fileName);
    },
    setRowHighlight({ commit }, highlight) {
        commit('SET_ROW_HIGHLIGHT', highlight);
    }
};

const mutations = {
	SET_LIST_BAHASA(state, data) {
		state.listBahasa = data;
    },
    SET_SELECTED_BAHASA(state, bahasa) {
        state.settingHighlight.lang = bahasa;
    },
    SET_FILE_NAME(state, fileName) {
        state.settingHighlight.fileName = fileName;
    },
    SET_ROW_HIGHLIGHT(state, highlight) {
        state.settingHighlight.highlight = highlight;
    }
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
