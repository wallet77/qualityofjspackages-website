
<template>
    <div class="section">
        <div class="slide">
            <h3>Overall quality</h3>
            <div class="row mt-4">
                <MainChart type="radialBar" :options="options" :series="series" />
                <div class="col-md-7 align-self-center explanation">
                    <div class="align-middle">
                        Powered by <a href="https://github.com/wallet77/qualscan" target="_blank" rel="noopener noreferrer">Qualscan</a>
                    </div>
                    <ul class="features-list"> Here is an overview of what is taken into account:
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
            <h3>Details</h3>
            <div class="row mt-4">
                <MainChart type="radialBar" :options="optionsDetails" :series="seriesDetails" />
                <div class="col-md-2 valueImportant info align-self-center">
                    {{ report.min }}%
                    <hr />
                    Min
                </div>
                <div class="col-md-2 valueImportant info align-self-center">
                    {{ report.max }}%
                    <hr />
                    Max
                </div>
                <div class="col-md-2 valueImportant info align-self-center">
                    {{ report.total }}
                    <hr />
                    Total packages
                </div>
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
            series: [Math.round(this.report.avg)],
            optionsDetails: radialOptions,
            seriesDetails: [this.report.percentiles['75'], this.report.percentiles['50'], this.report.percentiles['25'], Math.round(this.report.avg)]
        }
    }
}
</script>
