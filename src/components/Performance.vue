
<template>
    <div class="section">
        <div class="slide">
            <h3>Performance</h3>
            <div class="row mt-4">
                <MainChart type="bar" :options="optionsDep" :series="seriesDep" />
                <div class="col-md-7 align-self-center">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainChart from '@/components/MainChart'
import {barOptions, mergeObject, clone} from '../variables'

const options = mergeObject(clone(barOptions), {
    xaxis: {
        categories: ['Direct dep', 'Sub dep']
    },
    dataLabels: {
        style: {
            fontSize: '15px'
        },
        formatter: function (val) {
            return `${val}`
        }
    },
    legend: {
        show: true,
        floating: false,
        position: 'right',
        offsetX: 0,
        offsetY: 0,
        formatter: function (val) {
            return val
        }
    }
})
export default {
    name: 'dependencies',
    props: {
        report: Object
    },
    components: {
      MainChart
    },
    data () {
        return {
            optionsDep: options,
            seriesDep: [{
                name: 'Average',
                data: [
                    this.report.depSize.directDependencies.avg.toFixed(2),
                    this.report.depSize.dependencies.avg.toFixed(2)
                ],
            }, {
                name: 'Median',
                data: [
                    Math.round(this.report.depSize.directDependencies.percentiles['50']),
                    Math.round(this.report.depSize.dependencies.percentiles['50'])
                ]
            }, {
                name: 'Third quartile',
                data: [
                    Math.round(this.report.depSize.directDependencies.percentiles['75']),
                    Math.round(this.report.depSize.dependencies.percentiles['75'])
                ]
            }, {
                name: '90th percentile',
                data: [
                    Math.round(this.report.depSize.directDependencies.percentiles['90']),
                    Math.round(this.report.depSize.dependencies.percentiles['90'])
                ]
            }],
        }
    }
}
</script>
