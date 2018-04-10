import HomePage from '../comp/Home.vue'
import Dashbord from '../comp/Dashbord.vue'
import userView from '../comp/UserView.vue'
import status from '../comp/page-comp/Status.vue'

export const routes = [
    {path: '/', name: 'home', component: HomePage, meta: {title: 'Home'}},
    {
        path: '/dashboard/', component: Dashbord, meta: {auth: true, title: 'Home'},
        children: [
            {path: '', name: 'status', component: status},
            {path: 'users', name: 'users', component: userView},
            {path: 'chat', name: 'chat', component: require('../comp/ChatView.vue')}
        ]
    }
]