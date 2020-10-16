import api from '../../api';

const state = {
    userId: "OBBT4tTgoOKeXwMUlKLv",
    userName: "jbwock",
    isAuthenticated: true,
    error: {
        isError: false,
        errMsg: null
    }
};

const getters = {
	getUserId(state) {
		return state.userId;
    },
    getUserName(state) {
		return state.userName;
	},
	getIsAuthenticated(state) {
		return state.isAuthenticated;
    },
    getError(state) {
        return state.error;
    }
};

const actions = {
	async login({commit}, data) {
        try {
            let response = await api.post(`api/user/login`, data);
            if(response.data.error) {
                throw {
                    response: {
                        data: 'Nama user tidak ditemukan!'
                    },
                    error: new Error()
                }
            }
            if(!response.data.success) {
                if(response.data.error) {
                    throw {
                        response: {
                            data: 'Nama user harus diisi'
                        },
                        error: new Error()
                    }
                }
            }
            const userId = response.data.data.id;
            const userName = response.data.data.name;
            commit('SET_USER', {userId, userName});
            commit('SET_ERROR', {isError: false, errMsg: null});
        }catch(e) {
            commit('SET_ERROR', {isError: true, errMsg: e.response.data});
            return Promise.reject(e);
        }
    },
    async register({commit}, data) {
        try {
            let response = await api.post(`api/user/register`, data);
            if(response.data.error) {
                throw {
                    response: {
                        data: 'Nama sudah digunakan, gunakan nama lain!'
                    },
                    error: new Error()
                }
            }
            if(!response.data.success) {
                throw {
                    response: {
                        data: 'Nama harus diisi!'
                    },
                    error: new Error()
                }
            }
            console.log(response.data);
            const userId = response.data.data.id;
            const userName = response.data.data.name;
            commit('SET_USER', {userId, userName});
            commit('SET_ERROR', {isError: false, errMsg: null});
        }catch(e) {
            commit('SET_ERROR', {isError: true, errMsg: e.response.data});
            return Promise.reject(e);
        }
    },
    logout({commit}) {
        commit('SET_USER', {userId: null, userName: null, isAuthenticated: false});
    }
};

const mutations = {
	SET_ERROR(state, {isError, errMsg}) {
        state.error.isError = isError;
        state.error.errMsg = errMsg;
    },
    SET_USER(state, {userId, userName, isAuthenticated = true}) {
        state.userId = userId;
        state.userName = userName;
        state.isAuthenticated = isAuthenticated;
    }
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
