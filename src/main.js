import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VeeValidator from 'vee-validate'
import Echo from 'laravel-echo'
import Pusher from 'vue-pusher'

import 'vuetify/dist/vuetify.css'
import './stylus/main.styl'
import './css/style.css'


import {routes} from './config/routes'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VeeValidator)


window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'f6d2a095a4641712d835', //Add your pusher key here
    cluster:'ap2'
});


const router = new VueRouter({
    routes,
    mode: 'history'
})


router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.auth) {
        const user = JSON.parse(window.localStorage.getItem('authUser'))

        if (user && user.accessToken) {
            next()
        } else {
            next({'name': 'home'})
        }
    }

    next()
})


new Vue({
    el: '#app',
    router,
    render: h => h(App),

})


