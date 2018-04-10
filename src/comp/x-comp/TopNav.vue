<template>
    <v-toolbar dark class="primary">
        <v-icon>wifi_tethering</v-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
        <v-menu bottom left transition="slide-x-transition">
            <v-btn icon slot="activator" dark>
                <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile @click="">
                    <v-list-tile-title>
                        <v-icon>account_circle</v-icon>
                        Profile
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-title>
                        <v-icon>settings</v-icon>
                        Settings
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="logOut">
                    <v-list-tile-title>
                        <v-icon>power_settings_new</v-icon>
                        Logout
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>


<script>
    export default {
        methods: {
            logOut: function () {
                window.localStorage.removeItem('authUser')
                this.$router.push({name: 'home'})
            }
        }
    }
</script>