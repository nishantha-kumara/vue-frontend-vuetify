<template>
    <div>
        <v-layout loginWindow>
            <v-container>
                <v-layout>
                    <v-flex xs12 sm4 offset-sm4>
                        <v-card class="white darken-1">
                            <v-form @submit.prevent="getToken">
                                <v-card-title primary-title>
                                    <v-flex sm12>
                                        <h3 class="headline">Login to continue</h3>
                                    </v-flex>
                                    <v-flex sm12>
                                        <v-text-field label="Username"
                                                      v-model="login.username"
                                                      v-validate="'required|email|min:5'"
                                                      data-vv-name="username"
                                                      :error-messages="errors.collect('username')">
                                        </v-text-field>
                                        <v-text-field
                                                label="Enter your password"
                                                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                                :append-icon-cb="() => (e1 = !e1)"
                                                :type="e1 ? 'password' : 'text'"
                                                :error-messages="errors.collect('password')"
                                                data-vv-name="password"
                                                v-validate="'required|max:10'"
                                                v-model="login.password">
                                        </v-text-field>
                                    </v-flex>
                                </v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn light @click.native="">Reset</v-btn>
                                    <v-btn primary dark type="submit">Login</v-btn>
                                </v-card-actions>
                            </v-form>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-layout>

        <!--components-->
        <v-snackbar
                :append-icon="'visibility'"
                :timeout="6000"
                :top="true"
                :right="true"
                :multi-line="true"
                :success="false"
                v-model="snackbar">
            <v-icon>error_outline</v-icon>
            Login failed
            <v-btn flat class="pink--text" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>

    </div>

</template>


<script>
    import axios from 'axios'
    import {getHeaders, baseUrl, clientSecret, userId, isLogged} from '../config/env'

    export default {
        $validates: true,
        data: function () {
            return {
                e1: true,
                snackbar: false,
                login: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            getToken: function () {

                this.$validator.validateAll()
                    .then((result) => {
                        if (result) {
                            const userData = {
                                client_id: userId,
                                client_secret: clientSecret,
                                grant_type: 'password',
                                username: this.login.username,
                                password: this.login.password,
                                scope: ''
                            }

                            axios.post(baseUrl + 'oauth/token', userData)
                                .then((response) => {
                                    if (response.status == 200) {
                                        const authUser = {
                                            accessToken: response.data.access_token,
                                            refreshToken: response.data.refresh_token
                                        }
                                        window.localStorage.setItem('authUser', JSON.stringify(authUser))
                                        this.$router.push({name: 'status'})
                                    } else {
                                        this.snackbar = true;
                                    }
                                })
                                .catch((error) => {
                                    this.snackbar = true;
                                });
                        }
                    });

            },
        },
        mounted() {
            if (isLogged()) {
                this.$router.push({name: 'status'})
            }
        }
    }
</script>