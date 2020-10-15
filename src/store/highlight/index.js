const state = {
    listHighlight: [],
    listBahasa: [],
    selectedBahasa: null,
    isEdit: false,
    error: {
        isError: false,
        errMsg: null
    }
};

const getters = {
    listHighlight(state) {
        return state.listHighlight;
    },
    listBahasa(state) {
        return state.listBahasa;
    },
    selectedBahasa(state) {
        return state.selectedBahasa;
    },
    error(state) {
        return state.error;
    }
}

const actions = {
    //
}

const mutations = {
    //
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}