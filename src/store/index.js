import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: ''
    },
    actions: {
        updateUsername (ctx, username) {
            ctx.commit('updateUsername', username) // mutations中的updateusername
        },
        clearUsername (ctx) {
            ctx.commit('clearUsername')
        }
    },
    mutations: {
        updateUsername (state, username) {
            state.username = username
        },
        clearUsername (state, username) {
            state.username = ''
        }
    }
})
