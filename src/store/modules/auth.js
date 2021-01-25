import api from '../../api/imgur'
import qs from 'qs'
import { router } from '../../main'

const state = {
    token: localStorage.getItem('imgur_token')
}
const getters = {
    isLoggedIn: (state) => { return !!state.token }
}
const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        const queryString = qs.parse(hash.replace('#', ''))
        commit('setToken', queryString.access_token)
        localStorage.setItem('imgur_token', queryString.access_token)
        router.push('/')
    },
    logout: ({ commit }) => {
        commit('setToken', null)
        localStorage.removeItem('imgur_token')

    }
}
const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}