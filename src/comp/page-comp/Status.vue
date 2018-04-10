<template>
    <div>
        <h3>Status</h3>
        <v-layout row wrap>
            <v-flex sm3 >
                <v-date-picker v-model="picker"></v-date-picker>
            </v-flex>
            <v-flex sm9 xs2>
                <line-chart></line-chart>
            </v-flex>
            <v-flex sm6 xs2>
                <do-nut></do-nut>
            </v-flex>
            <v-flex sm6 xs2>
                <pie-chart></pie-chart>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

    import VueCharts from 'vue-chartjs'
    import {Bar, Line} from 'vue-chartjs'

    import LineChart from 'vue-chartjs/src/examples/LineExample'
    import Donut from 'vue-chartjs/src/examples/DoughnutExample'
    import Pie from 'vue-chartjs/src/examples/PieExample'

    export default {
        data: function () {
            return {
                picker:null
            }
        },
        components: {
            'line-chart': LineChart,
            'do-nut': Donut,
            'pie-chart':Pie
        },

        mounted() {

        }
    }
</script>