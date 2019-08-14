const state = {
    moduleTip: '欢迎使用Vuex模块',
};

const getters = {
	moduleTip: state => state.moduleTip,
};

const mutations = {
    SET_MODULETIP(state, data) {
        state.moduleTip = data;
    },
};

const actions = {};

export default {
	state,
	getters,
	mutations,
	actions
}
