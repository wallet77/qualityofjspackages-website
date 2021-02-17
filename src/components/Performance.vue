<template>
    <div class="section">
        <div class="slide">
            <h3>Performance</h3>
            <div class="row mt-4">
                <MainChart type="bar" :options="optionsDep" :series="seriesDep" :col=6 />
                <!-- <div class="col-md-6 valueImportant">
                    <span class="subTitle">Size of dependencies tree</span>
                    <br />
                    <span class="valueCritical">~{{ report.depSize.weight.avg.toFixed(2) | filesize }}</span>
                    <br />
                    <span class="details">max: </span><span class="details">{{ report.depSize.weight.max.toFixed(0) | filesize}}</span>
                    <br />
                    <span class="details">min: </span><span class="details">{{ report.depSize.weight.min.toFixed(0) | filesize }}</span>
                </div> -->
                <MainChart type="bar" :options="optionsDepSize" :series="seriesDepSize" :col=6 />
            </div>
        </div>
    </div>
</template>

<script>
import filesize from 'filesize'
import MainChart from '@/components/MainChart'
import {barOptions, mergeObject, clone, colors} from '../variables'

const options = mergeObject(clone(barOptions), {
    xaxis: {
        categories: ['Direct dependencies', 'Sub dependencies']
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
        offsetX: 200,
        offsetY: 100,
        formatter: function (val) {
            return val
        }
    }
})
const optionsSize = mergeObject(clone(barOptions), {
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 6,
            columnWidth: '45%',
            distributed: true,
        }
    },
    colors: colors,
    yaxis: {
        show: false,
    },
    labels: ['Average', 'Median', 'Third quartile', '90th'],
    xaxis: {
        categories: ['Average', 'Median', 'Third quartile', '90th'],
        labels: {
            style: {
                colors: colors,
                fontSize: '20px'
            }
        }
    },
    dataLabels: {
        offsetX: 0,
        offsetY: 0,
        textAnchor: 'middle',
        style: {
            fontSize: '15px'
        },
        formatter: function (val) {
            return filesize(val, { base: 10 })
        }
    },
    legend: {
        show: false
    },
    tooltip: {
        enabled: false
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
            optionsDepSize: optionsSize,
            seriesDepSize: [{
                data: [
                    this.report.depSize.weight.avg,
                    this.report.depSize.weight.percentiles['50'],
                    this.report.depSize.weight.percentiles['75'],
                    this.report.depSize.weight.percentiles['90']
                ]
            }],
        }
    }
}
</script>
