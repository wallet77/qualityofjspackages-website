
<template>
    <div class="section">
        <div class="slide">
            <h3>Overall quality</h3>
            <div class="row mt-4">
                <div class="col-md-5">
                    <div class="mt-4">
                        <apexchart width="100%" type="radialBar" :options="options" :series="series"></apexchart>
                    </div>
                </div>
                <div class="col-md-7 align-self-center explanation">
                    <div class="align-middle">
                        This metric is the average of a full scanning, done with the tool <a href="https://github.com/wallet77/qualscan" target="_blank" rel="noopener noreferrer">Qualscan</a>.<br />
                        Here is an overview of what is taken into account:
                    </div>
                    <ul class="features-list">
                        <li>Project's size</li>
                        <li>Number of dependencies</li>
                        <li>Weight of all dependencies</li>
                        <li>Percentage of code duplication</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="slide">
            <h3>Overall quality</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'qualscan',
    props: {
        report: Object
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
                    show: false,
                    floating: false,
                    position: 'right',
                    offsetX: 100,
                    offsetY: 350,
                    formatter: function (val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
                    }
                },
                stroke: {
                    lineCap: 'round'
                }
            },
            series: [Math.round(this.report.avgQuality)]
        }
    }
}
</script>
