
<template>
    <div class="section">
        <div class="slide">
            <h3>npms.io results</h3>
            <div class="row mt-4">
                <div class="col-md-5">
                    <div class="mt-4">
                        <apexchart width="100%" type="bar" :options="options" :series="series"></apexchart>
                    </div>
                </div>
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
        <!-- <div class="slide">
            <h3>Details</h3>
            <div class="row mt-4">
                <div class="col-md-5">
                    <apexchart width="100%" type="radialBar" :options="optionsDetails" :series="seriesDetails"></apexchart>
                </div>
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
        </div> -->
    </div>
</template>

<script>
const colors = [
      '#008FFB',
      '#00E396',
      '#FEB019',
      '#FF4560',
      '#775DD0',
      '#546E7A',
      '#26a69a',
      '#D10CE8'
]
export default {
    name: 'npms',
    props: {
        report: Object
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
