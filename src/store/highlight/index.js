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
    async fetchListHighlight({ commit }, user) {
        let response = await api.post('/code/list?sortBy=createdAt&sort=DESC&page=1&limit=3&highlighted=0', user);
        let data;
        if(response.data.error) {
            data = [];
        }else {
            data = response.data.data;
        }
        commit('SET_LIST_HIGHLIGHT', data);
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
    },
    async deleteHighlight({ commit }, data ) {
        try {
            let response = await api.post('https://highlight-code-api.jefrydco.vercel.app/api/code/delete', data);
            if(!response.data.success) {
                throw {
                    response: {
                        data: 'Terjadi kesalahan! silakan coba lagi'
                    },
                    error: new Error()
                }
            }
            commit('DELETE_HIGHLIGHT', data);
            commit('SET_ERROR', {isErr: false, errMsg: null});
        }catch(e) {
            commit('SET_ERROR', {isErr: true, errMsg: e.response.data});
            return Promise.reject(e)
        }
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
    },
    SET_LIST_HIGHLIGHT(state, listHighlight) {
        state.listHighlight = listHighlight;
    },
    SET_ERROR(state, {isErr, errMsg}) {
        state.error.isError = isErr;
        state.error.errMsg = errMsg;
    },
    DELETE_HIGHLIGHT(state, { id }) {
        let newListHighlight = state.listHighlight.filter(lh => lh.id != id);
        state.listHighlight = newListHighlight
    }
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
