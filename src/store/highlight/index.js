import Vue from "vue";
import api from "../../api";

const state = {
	listHighlight: [],
    listBahasa: [],
    settingHighlight: {
        lang: null,
        fileName: null,
        highlight: null,
        code: null
    },
    result: null,
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
    result(state) {
        return state.result;
    },
	error(state) {
		return state.error;
	},
};

const actions = {
	async fetchListBahasa({ commit }) {
		let response = await api.get("/api/options");
		commit("SET_LIST_BAHASA", response.data.data.languages);
    },
    async fetchListHighlight({ commit }, user) {
        let response = await api.post('/api/code/list?sortBy=createdAt&sort=DESC&page=1&limit=3&highlighted=0', user);
        let data;
        if(response.data.error) {
            data = [];
        }else {
            data = response.data.data;
        }
        commit('SET_LIST_HIGHLIGHT', data);
    },
    setSelectedBahasa({commit, dispatch}, { lang, data }) {
        commit('SET_SELECTED_BAHASA', lang);
        dispatch('generateHighlight', data);
    },
    setFileName({ commit, dispatch }, { data }) {
        commit('SET_FILE_NAME', data.fileName);
        dispatch('generateHighlight', data);
    },
    setRowHighlight({ commit, dispatch }, { data }) {
        commit('SET_ROW_HIGHLIGHT', data.highlight);
        dispatch('generateHighlight', data);
    },
    setCode({ commit, dispatch }, { data }) {
        commit('SET_CODE', data);
        dispatch('generateHighlight', data);
    },
    async deleteHighlight({ commit }, data ) {
        try {
            let response = await api.post('api/code/delete', data);
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
    },
    async generateHighlight({ commit }, data) {
        try {
            let params = '';
            commit('SET_RESULT', null);
            if(data.lang == null || data.lang == '') {
                Vue.$toast.warning('Silakan pilih bahasa pemrograman!', {timeout: 1000, position: 'top-center'});
                return;
            }
            if(data.code == null || data.code == '') {
                Vue.$toast.warning('Silakan isi kode program!', {timeout: 1000, position: 'top-center'});
                return;
            }
            params = params + 'lang='+data.lang;
            if(data.fileName != null && data.fileName != '') {
                params = params + '&fileName='+data.fileName;
            }
            if(data.highlight != null && data.highlight != '') {
                params = params + '&highlight='+data.highlight;
            }
        
            let response = await api.post(`api?${params}`, {code: data.code});
            commit('SET_RESULT', response.data.data);
        }catch(e) {
            console.log(e)
            return Promise.reject(e);
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
    SET_CODE(state, data) {
        const { code } = data;
        state.settingHighlight.code = code.toString();
    },
    SET_RESULT(state, result) {
        state.result = result;
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
