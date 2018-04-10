<template>
    <v-layout row justify-center>
        <v-dialog v-model="func.status" persistent width="30%">
            <v-card>
                <v-card-title>
                    <span class="headline">User Profile</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md12>
                                <v-text-field label="Legal first name" required v-model="func.name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 md6>
                                <v-text-field label="Email" required v-model="func.email"></v-text-field>
                            </v-flex>
                            <v-flex xs12 md6>
                                <v-text-field
                                        label="Enter your password"
                                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (e1 = !e1)"
                                        :type="e1 ? 'password' : 'text'" v-model="func.password">
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn light @click.native="dialog">Close</v-btn>
                    <v-btn primary @click.native="saveUser">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar
                :append-icon="'visibility'"
                :timeout="6000"
                :top="true"
                :right="true"
                :multi-line="true"
                :success="false"
                v-model="snackbar">
            <v-icon>error_outline</v-icon>
             Error : Please check and retry
            <v-btn flat class="pink--text" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>

    </v-layout>
</template>

<script>
    import axios from 'axios'
    import {getHeaders, baseUrl} from "../../config/env";

    export default {
        data: function () {
            return {
                e1: true,
                func: {},
                snackbar: false,
            }
        },
        props: ['edit'],

        methods: {
            dialog: function () {
                this.func.password=''
                this.$root.$emit('send', false)
            },
            saveUser: function () {
                axios.put(baseUrl + 'api/user/' + this.func.id, this.func, {headers: getHeaders()})
                    .then((response) => {
                        if (response.data.status == 200) {
                            this.$parent.fetchAllUsers()
                            this.dialog()
                        } else {
                            console.log(response.data)
                            this.snackbar = true
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            }
        },
        watch: {
            edit: function (nv, ov) {
                this.func = Object.assign({}, nv)
            }
        },
        mounted() {

        }
    }
</script>