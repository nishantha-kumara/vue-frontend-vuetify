<template>
    <v-list>
        <v-list-group v-for="(nav,i) in navs" :key="i">
            <v-list-tile slot="item" :to="{name:'status'}">
                <v-list-tile-action>
                    <v-icon>{{nav.icu}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{nav.name}}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action v-if="nav.sub">
                    <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-if="nav.sub" v-for="" :to="{name:'users'}">
                <v-list-tile-content>
                    <v-list-tile-title>{{nav.sub.name}}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-icon>{{nav.sub.icu}}</v-icon>
                </v-list-tile-action>
            </v-list-tile>
        </v-list-group>
    </v-list>
</template>

<script>
    export default {
        data: function () {
            return {
                drawer: true,
                navs: [
                    {
                        name: 'Home', icu: 'home', link: 'status'
                    },
                    {
                        name: 'Users', icu: 'pets',
                        sub: {name: 'All users', icu: 'speaker', link: 'users'}
                    },
                    {
                        name: 'Product', icu: 'shopping_basket',
                        sub: {name: 'Full View', icu: 'toys'}
                    },
                    {
                        name: 'Gallery', icu: 'play_circle_filled',
                        sub: {name: 'Full View', icu: 'looks'}
                    },
                    {
                        name: 'Contact us', icu:
                        'phone'
                    },
                ]
            }
        },
    }
</script>