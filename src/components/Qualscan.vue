
<template>
    <div class="section">
        <div class="slide">
            <h3>Overall quality</h3>
            <div class="row mt-4">
                <MainChart type="radialBar" :options="options" :series="series" />
                <div class="col-md-7 align-self-center explanation">
                    <div>
                        Powered by <a href="https://github.com/wallet77/qualscan" target="_blank" rel="noopener noreferrer">Qualscan</a>
                    </div>
                    <br />
                    Here is an overview of what is taken into account:
                    <ul class="features-list">
                        <li>Project's size</li>
                        <li>Number of dependencies</li>
                        <li>Weight of all dependencies</li>
                        <li>Percentage of code duplication</li>
                        <li>And more</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="slide">
            <h3>Percentiles</h3>
            <div class="row mt-4">
                <MainChart type="radialBar" :options="optionsDetails" :series="seriesDetails" />
                <div class="col-md-2 valueImportant info align-self-center">
                    {{ report.qualscan.min }}%
                    <hr />
                    Min
                </div>
                <div class="col-md-2 valueImportant info align-self-center">
                    {{ report.qualscan.max }}%
                    <hr />
                    Max
                </div>
                <div class="col-md-2 valueImportant info align-self-center">
                    {{ report.qualscan.total }}
                    <hr />
                    Total packages
                </div>
            </div>
        </div>
        <div class="slide">
            <h3>Details</h3>
            <div class="row mt-4">
                <div class="col-md-2"></div>
                <MainChart type="bar" :options="optionsProgress" :series="seriesProgress" :col=8 />
                <div class="col-md-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import MainChart from '@/components/MainChart'
import {radialOptions} from '../variables'
export default {
    name: 'qualscan',
    props: {
        report: Object
    },
    components: {
        MainChart
    },
    data () {
        const seriesProgress = [{
            name: 'info',
            data: []
        }, {
            name: 'succeed',
            data: []
        }, {
            name: 'warn',
            data: []
        }, {
            name: 'fail',
            data: []
        }]
        const categories = []

        for(const cmdName in this.report.details) {
            const cmd = this.report.details[cmdName]

            categories.push(cmdName.split(' '))
            seriesProgress[0].data.push(cmd.info ? cmd.info : 0)
            seriesProgress[1].data.push(cmd.succeed ? cmd.succeed : 0)
            seriesProgress[2].data.push(cmd.warn ? cmd.warn : 0)
            seriesProgress[3].data.push(cmd.fail ? cmd.fail : 0)
        }

        const optionsProgress = {
                chart: {
                    height: '100%',
                    stacked: true,
                    stackType: '100%',
                    foreColor: '#ccc',
                    toolbar: {
                        show: false
                    },
                },
                grid: {
                    show: false,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        colors: {
                            backgroundBarColors: ['transparent']
                        }
                    },
                },
                stroke: {
                    width: 0,
                },
                tooltip: {
                    enabled: false
                },
                xaxis: {
                    categories: categories,
                    labels: {
                        show: false
                    },
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                },
                yaxis: {
                    max: 100,
                    labels: {
                        style: {
                            fontSize: '15px',
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    fontSize: '20px',
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
        }

        return {
            options: {
                chart: {
                    foreColor: '#ccc',
                },
                plotOptions: {
                    radialBar: {
                        size: undefined,
                        inverseOrder: true,
                        hollow: {
                            margin: 5,
                            size: '48%',
                            background: 'transparent',
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                show: true,
                                color: '#3599b3',
                                offsetY: 20,
                                fontSize: '5em'
                            }
                        },
                        track: {
                            show: true,
                        },
                        startAngle: -180,
                        endAngle: 180
                    }
                },
                labels: ['Average quality'],
                legend: {
                    show: false
                },
                stroke: {
                    lineCap: 'round'
                }
            },
            series: [Math.round(this.report.qualscan.avg)],
            optionsDetails: radialOptions,
            seriesDetails: [
                this.report.qualscan.percentiles['75'],
                this.report.qualscan.percentiles['50'],
                this.report.qualscan.percentiles['25'],
                Math.round(this.report.qualscan.avg)],
            optionsProgress: optionsProgress,
            seriesProgress: seriesProgress
        }
    }
}
</script>
