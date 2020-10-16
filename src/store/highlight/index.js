import Vue from "vue";
import api from "../../api";

const state = {
	listHighlight: [],
	listBahasa: [],
	settingHighlight: {
		lang: null,
		fileName: null,
		highlight: null,
		code: null,
	},
	result: null,
	edit: {
		isEdit: false,
		id: null
	},
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
	edit(state) {
		return state.edit;
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
		let response = await api.post(
			"/api/code/list?sortBy=createdAt&sort=DESC&highlighted=0",
			user
		);
		let data;
		if (response.data.error) {
			data = [];
		} else {
			data = response.data.data;
		}
		commit("SET_LIST_HIGHLIGHT", data);
	},
	async fetchSingleHighlight({ commit, dispatch }, data) {
		let response = await api.post('api/code/single?highlighted=0', data);
		commit('SET_SINGLE_HIGHLIGHT', response.data.data);
		commit('SET_IS_EDIT', response.data.data);
		dispatch('setCode', {data: response.data.data});
	},
	setSelectedBahasa({ commit, dispatch }, { lang, data }) {
		commit("SET_SELECTED_BAHASA", lang);
		dispatch("generateHighlight", data);
	},
	setFileName({ commit, dispatch }, { data }) {
		commit("SET_FILE_NAME", data.fileName);
		dispatch("generateHighlight", data);
	},
	setRowHighlight({ commit, dispatch }, { data }) {
		commit("SET_ROW_HIGHLIGHT", data.highlight);
		dispatch("generateHighlight", data);
	},
	setCode({ commit, dispatch }, { data }) {
		commit("SET_CODE", data);
		dispatch("generateHighlight", data);
	},
	async deleteHighlight({ commit }, data) {
		try {
			let response = await api.post("api/code/delete", data);
			if (!response.data.success) {
				throw {
					response: {
						data: "Terjadi kesalahan! silakan coba lagi",
					},
					error: new Error(),
				};
			}
			commit("DELETE_HIGHLIGHT", data);
            commit("SET_ERROR", { isErr: false, errMsg: null });
            Vue.$toast.success("Highlight berhasil dihapus!", {
                timeout: 1000,
            });
		} catch (e) {
			commit("SET_ERROR", { isErr: true, errMsg: e.response.data });
			return Promise.reject(e);
		}
	},
	async generateHighlight({ commit }, data) {
		try {
			let params = "";
			if (!data.is_unduh) {
				commit("SET_RESULT", null);
			}
			if (data.lang == null || data.lang == "") {
				Vue.$toast.warning("Silakan pilih bahasa pemrograman!", {
					timeout: 1000,
				});
				return;
			}
			if (data.code == null || data.code == "") {
				Vue.$toast.warning("Silakan isi kode program!", {
					timeout: 1000,
				});
				return;
			}
			params = params + "lang=" + data.lang;
			if (data.fileName != null && data.fileName != "") {
				params = params + "&fileName=" + data.fileName;
			}
			if (data.highlight != null && data.highlight != "") {
				params = params + "&highlight=" + data.highlight;
			}
			if (data.is_unduh) {
				params = params + "&download=1";
			}

			if (!data.is_unduh) {
				let response = await api.post(`api?${params}`, {
					code: data.code,
				});
				commit("SET_RESULT", response.data.data);
                return;
            }
            delete data.is_unduh;
			
            api.post(
                `api?${params}`,
                { code: data.code },
                {
                    responseType: "arraybuffer",
                }
            ).then((response) => {
                let fileURL = window.URL.createObjectURL(
                    new Blob([response.data])
                );
                let fileLink = document.createElement("a");
                let name = data.fileName ? data.fileName : 'Untitled';
                fileLink.href = fileURL;
                fileLink.setAttribute("download", `${name}.png`);
                document.body.appendChild(fileLink);
                fileLink.click();
            });
		} catch (e) {
			console.log(e);
			return Promise.reject(e);
		}
    },
    async storeHighlight({ dispatch }, data) {
        if(data.content.highlight == null || data.content.highlight == '') delete data.content.highlight
        if(data.content.fileName == null || data.content.fileName == '') delete data.content.fileName
        let response = await api.post('api/code/store', data);
        dispatch('fetchListHighlight', {user: data.user})
        if(response.data.success) {
            Vue.$toast.success("Highlight berhasil disimpan!", {
                timeout: 1000,
            });
            dispatch('reset');
        }else {
            Vue.$toast.success("Terjadi kesalahan! highlight tidak disimpan!", {
                timeout: 1000,
            });
        }
	},
	async updateHighlight({ commit, dispatch }, data) {
		if(data.content.highlight == null || data.content.highlight == '') delete data.content.highlight
        if(data.content.fileName == null || data.content.fileName == '') delete data.content.fileName
        let response = await api.post('api/code/edit', data);
		dispatch('fetchListHighlight', {user: data.user})
		commit('SET_IS_EDIT', {isEdit: false, id: null});
        if(response.data.success) {
            Vue.$toast.success("Highlight berhasil diubah!", {
                timeout: 1000,
            });
            dispatch('reset');
        }else {
            Vue.$toast.success("Terjadi kesalahan! highlight tidak disimpan!", {
                timeout: 1000,
            });
        }
	},
	reset({ commit }) {
		commit("RESET_SETTING_HIGHLIGHT");
	},
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
	SET_ERROR(state, { isErr, errMsg }) {
		state.error.isError = isErr;
		state.error.errMsg = errMsg;
	},
	DELETE_HIGHLIGHT(state, { id }) {
		let newListHighlight = state.listHighlight.filter((lh) => lh.id != id);
		state.listHighlight = newListHighlight;
	},
	RESET_SETTING_HIGHLIGHT(state) {
		state.settingHighlight.lang = null;
		state.settingHighlight.code = null;
		state.settingHighlight.fileName = null;
		state.settingHighlight.highlight = null;
		state.result = null;
		state.edit.isEdit = false;
		state.edit.edit = null;
	},
	SET_SINGLE_HIGHLIGHT(state, data) {
		state.settingHighlight.code = data.code;
		state.settingHighlight.fileName = data.fileName;
		state.settingHighlight.highlight = data.highlight;
		state.settingHighlight.lang = data.lang;
	},
	SET_IS_EDIT(state, data) {
		state.edit.isEdit = true;
		state.edit.id = data.id;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
