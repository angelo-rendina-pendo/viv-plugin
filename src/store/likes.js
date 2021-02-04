export default {
    namespaced: true,
    state: {
        likes: 0
    },
    mutations: {
        increment (state) {
            state.likes++;
        }
    },
    actions: {
        like (context) {
            context.commit('increment');
        }
    },
    getters: {
        likes: (state) => state.likes
    }
};
