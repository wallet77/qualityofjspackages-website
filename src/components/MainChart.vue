<template>
    <div :class="'col-md-' + col">
        <div class="mt-4">
            <apexchart width="100%" :type="type" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
const VueApexCharts = () => import('vue-apexcharts')
Vue.component('apexchart', VueApexCharts)
export default {
    name: 'MainChart',
    props: {
        report: Object,
        type: String,
        options: Object,
        series: Array,
        col: {
            type: Number,
            default: function () {
                return 5
            }
        }
    }
}
</script>
