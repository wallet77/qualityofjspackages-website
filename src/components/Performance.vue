<template>
    <div class="section">
        <div class="slide">
            <h3>Dep. size</h3>
            <div class="row mt-4">
                <MainChart type="bar" :options="optionsDep" :series="seriesDep" :col=6 />
                <MainChart type="bar" :options="optionsDepSize" :series="seriesDepSize" :col=6 />
            </div>
        </div>
        <div class="slide">
            <h3>Project's size</h3>
            <div class="row mt-4">
                <MainChart type="bar" :options="optionsEntrycount" :series="seriesEntrycount" :col=6 />
                <MainChart type="bar" :options="optionsSize" :series="seriesSize" :col=6 />
            </div>
        </div>
        <div class="slide">
            <h3>Require time</h3>
            <div class="row mt-4">
                <div class="col-md-3"></div>
                <MainChart type="bar" :options="optionsRequireTime" :series="seriesRequireTime" :col=6 />
                <div class="col-md-3"></div>
            </div>
        </div>
    </div>
</template>

<script>
import filesize from 'filesize'
import MainChart from '@/components/MainChart'
import {barOptions, mergeObject, clone, colors} from '../variables'
import prettyMs from 'pretty-ms'

const options = mergeObject(clone(barOptions), {
    title: {
        text: 'Number of dependencies',
        align: 'center',
    },
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
const optionsDepSize = mergeObject(clone(barOptions), {
    title: {
        text: 'Average weight of dependencies',
        align: 'center',
    },
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
const optionsSize = mergeObject(clone(options), {
    title: {
        text: 'Project\'s size',
        align: 'center',
    },
    xaxis: {
        categories: ['Size', 'Unpacked size']
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
})
const optionsEntrycount = mergeObject(clone(optionsDepSize), {
    title: {
        text: 'Number of files',
        align: 'center',
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 6,
            columnWidth: '45%',
            distributed: true,
        }
    },
    dataLabels: {
        formatter: function (val) {
            return Math.round(val)
        }
    },
})

const optionsRequireTime = mergeObject(clone(optionsDepSize), {
    title: {
        text: 'Time to load module',
        align: 'center',
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 6,
            columnWidth: '45%',
            distributed: true,
        }
    },
    dataLabels: {
        formatter: function (val) {
            return prettyMs(val / 1000000)
        }
    },
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
            optionsDepSize: optionsDepSize,
            seriesDepSize: [{
                data: [
                    this.report.depSize.weight.avg,
                    this.report.depSize.weight.percentiles['50'],
                    this.report.depSize.weight.percentiles['75'],
                    this.report.depSize.weight.percentiles['90']
                ]
            }],
            optionsSize: optionsSize,
            seriesSize: [{
                name: 'Average',
                data: [
                    this.report.packageSize.size.avg.toFixed(2),
                    this.report.packageSize.unpackedSize.avg.toFixed(2)
                ],
            }, {
                name: 'Median',
                data: [
                    Math.round(this.report.packageSize.size.percentiles['50']),
                    Math.round(this.report.packageSize.unpackedSize.percentiles['50'])
                ]
            }, {
                name: 'Third quartile',
                data: [
                    Math.round(this.report.packageSize.size.percentiles['75']),
                    Math.round(this.report.packageSize.unpackedSize.percentiles['75'])
                ]
            }, {
                name: '90th percentile',
                data: [
                    Math.round(this.report.packageSize.size.percentiles['90']),
                    Math.round(this.report.packageSize.unpackedSize.percentiles['90'])
                ]
            }],
            optionsEntrycount: optionsEntrycount,
            seriesEntrycount: [{
                data: [
                    this.report.packageSize.entryCount.avg,
                    this.report.packageSize.entryCount.percentiles['50'],
                    this.report.packageSize.entryCount.percentiles['75'],
                    this.report.packageSize.entryCount.percentiles['90']
                ]
            }],
            optionsRequireTime: optionsRequireTime,
            seriesRequireTime: [{
                data: [
                    this.report.requireTime.entrypointTime.avg,
                    this.report.requireTime.entrypointTime.percentiles['50'],
                    this.report.requireTime.entrypointTime.percentiles['75'],
                    this.report.requireTime.entrypointTime.percentiles['90']
                ]
            }],
        }
    }
}
</script>
