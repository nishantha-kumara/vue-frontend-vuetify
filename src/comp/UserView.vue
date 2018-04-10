<template>
    <div>
        <v-layout row wrap>
            <v-flex sm3 xs2 v-for="user in users" :key="user.id">
                <v-card>
                    <v-card-media src="https://unsplash.it/500/300/?random"
                                  height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{user.name}}</h3>
                            <div><b>Email : </b>{{user.email}}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn fab dark primary :to="{name:'chat',params:{set:user}}">
                            <v-icon dark>chat</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>

                        <v-btn primary dark @click="editUser(user)">Edit</v-btn>
                        <v-btn error dark @click="removeUser(user.id)">Remove</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <edit-modal :edit="user"></edit-modal>

    </div>
</template>


<script>

    import axios from 'axios'
    import {getHeaders, baseUrl} from '../config/env'

    import editView from './page-comp/EditUser.vue'

    export default {
        data: function () {
            return {
                users: [],
                user: [],
                loader: true
            }
        },
        methods: {
            fetchAllUsers: function () {
                axios.get(baseUrl + 'api/user', {headers: getHeaders()})
                    .then((response) => {
                        this.users = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            editUser: function (user) {
                this.user = user
                this.user.status = true
            },
            removeUser: function (id) {
                axios.delete(baseUrl + 'api/user/' + id, {headers: getHeaders()})
                    .then((response) => {
                        if (response.data.status == 200) {
                            this.fetchAllUsers()
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            loaderShow: function () {
                window.addEventListener("load", function (event) {
                    this.loader = false
                });
            }
        },
        components: {
            'edit-modal': editView
        },
        mounted() {
            this.fetchAllUsers();

            this.$root.$on('send', (obj) => {
                this.user = obj;
            })

            this.loaderShow()

        }
    }


</script>