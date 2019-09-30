import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: ''
    },
    actions: {
        updateUsername (ctx, username) {
            console.log(username)
            ctx.commit('updateUsername', username) // mutations中的updateusername
        }
    },
    mutations: {
        updateUsername (state, username) {
            state.username = username
        }
    }
})
