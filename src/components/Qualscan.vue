
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
                <div class="col-md-7 align-self-center">
                    <div class="align-middle explanation">
                        This metric is the average of a full scanning, done with the tool <a href="https://github.com/wallet77/qualscan">Qualscan</a>.<br />
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

<style lang="scss" scoped>
.valueImportant {
    font-size: 2em;
    font-weight: bold;
    color: #3599b3;
}
a, a.visited {
    color:#3599b3;
    text-decoration: underline;
}
.explanation {
    font-size: 1.8em;
}
ul {
  list-style: none;
  list-style-position: inside;
}
ul li:before {
  content: "•";
  font-size: 130%;
  line-height: 0;
  margin: 0 0.3rem 0 -0.25rem;
  position: relative;
  top: 0.08rem;
  color: #4b9655;
}
li {
    font-size: 1.5em;
    margin-left: 30px;
}
</style>