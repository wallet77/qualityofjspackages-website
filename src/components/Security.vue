
<template>
    <div class="section">
        <div class="slide">
            <h3>Security</h3>
            <div class="row mt-4">
                <MainChart type="bar" :options="options" :series="series" />
                <div class="col-md-7 align-self-center explanation">
                    <div class="align-middle">
                        Powered by <a href="https://docs.npmjs.com/cli/v6/commands/npm-audit" target="_blank" rel="noopener noreferrer">NPM audit</a>.<br />
                        <br />
                        Possible values:
                    </div>
                    <ul class="features-list">
                        <li>Critical</li>
                        <li>High</li>
                        <li>Moderate</li>
                        <li>Low</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="slide">
            <h3>Details</h3>
            <div class="row mt-4" v-bind:key="level" v-for="(metric, level) in report">
                <div class="col-md-2 valueImportant info align-self-center">
                    {{level}}
                </div>
                <div class="col-md-3 valueImportant info align-self-center">
                    {{ metric.min }}
                    <hr />
                    Min
                </div>
                <div class="col-md-3 valueImportant info align-self-center">
                    {{ metric.max }}
                    <hr />
                    Max
                </div>
                <div class="col-md-3 valueImportant info align-self-center">
                    {{ metric.total }}
                    <hr />
                    Total packages
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    </div>
</template>

<script>
import MainChart from '@/components/MainChart'
import {colors} from '../variables'
export default {
    name: 'security',
    props: {
        report: Object
    },
    components: {
      MainChart
    },
    data () {
        const data = []
        const labels = []
        for (const level in this.report) {
            data.push(this.report[level].avg.toFixed(2))
            labels.push(level)
        }
        return {
            options: {
                chart: {
                    foreColor: '#ccc',
                    toolbar: {
                        show: false
                    }
                },
                tooltip: {
                    enabled: false
                },
                grid: {
                    show: false,
                },
                colors: colors,
                plotOptions: {
                    bar: {
                        borderRadius: 6,
                        columnWidth: '45%',
                        distributed: true,
                    }
                },
                xaxis: {
                    categories: labels,
                    labels: {
                        style: {
                            colors: colors,
                            fontSize: '20px'
                        }
                    }
                },
                legend: {
                    show: false
                }
            },
            series: [{
                data: data,
            }]
        }
    }
}
</script>
