import Vue from 'vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'
import AuthHandler from './views/AuthHandler'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{ path: '/oauth2/callback', component: AuthHandler }]
})
new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app')







// client Id:fcb2b69744ef311

// client Secret :047920e7d5b1314aeae8af0dbae2a4a9a0b3f40c