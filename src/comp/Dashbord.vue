<template>
    <div id="app">
        <v-app toolbar footer>
            <!--top navigation-->
            <topnav></topnav>
            <main>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex sm2>
                            <sidenav></sidenav>
                        </v-flex>
                        <v-flex sm10>
                            <router-view></router-view>
                        </v-flex>
                    </v-layout>
                </v-container>
            </main>
            <v-footer class="indigo">
                <span class="white--text">© 2017</span>
            </v-footer>
        </v-app>
    </div>
</template>

<script>

    import axios from 'axios'
    import {isLogged} from '../config/env'

    import topnav from './x-comp/TopNav.vue'
    import sidenav from './x-comp/SideNav.vue'
    import usercontent from './UserView.vue'


    export default {
        data: function () {
            return {

            }
        },
        methods: {


        },


        components: {
            topnav, sidenav, usercontent
        },
        mounted: function () {
            if (!isLogged()) {
                this.$router.push({name: 'home'})
            }
        }

    }
</script>


