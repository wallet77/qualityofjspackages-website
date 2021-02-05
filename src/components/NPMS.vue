
<template>
    <div class="section">
        <div class="slide">
            <h3>npms.io results</h3>
            <div class="row mt-4">
                <MainChart type="bar" :options="options" :series="series" />
                <div class="col-md-7 align-self-center explanation">
                    <div class="align-middle">
                        Powered by <a href="https://npms.io" target="_blank" rel="noopener noreferrer">Npms.io</a>.<br />
                        Here is an overview of what is taken into account:
                    </div>
                    <ul class="features-list">
                        <li>Final score</li>
                        <li>Quality</li>
                        <li>Maintenance</li>
                        <li>Popularity</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainChart from '@/components/MainChart'
import {colors} from '../variables'
export default {
    name: 'npms',
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
                labels: ['Final score', 'Quality', 'Maintenance', 'Popularity'],
                xaxis: {
                    categories: [
                        ['Final', 'score'],
                        'Quality',
                        'Maintenance',
                        'Popularity'
                    ],
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
                data: [Math.round(this.report.final.avg * 100), Math.round(this.report.quality.avg * 100), Math.round(this.report.maintenance.avg * 100), Math.round(this.report.popularity.avg * 100)],
            }],
            optionsDetails: {
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
                            show: false,
                        },
                        startAngle: -180,
                        endAngle: 180
                    }
                },
                labels: ['Third quartile', 'Median', 'First quartile', 'Average'],
                legend: {
                    show: true,
                    floating: true,
                    position: 'right',
                    offsetX: 0,
                    offsetY: 350,
                    fontSize: '20px',
                    formatter: function (val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
                    }
                },
                stroke: {
                    lineCap: 'round'
                }
            },
            seriesDetails: [this.report.quality.percentiles['75'], this.report.quality.percentiles['50'], this.report.quality.percentiles['25'], Math.round(this.report.quality.avg)]
        }
    }
}
</script>
