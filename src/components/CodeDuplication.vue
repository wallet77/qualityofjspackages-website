
<template>
    <div class="section">
        <div class="slide">
            <h3>Code duplication</h3>
            <div class="row mt-4">
                <div class="col-md-5">
                    <div class="mt-4">
                        <apexchart width="100%" type="bar" :options="optionsCD" :series="seriesCD"></apexchart>
                    </div>
                </div>
                <div class="col-md-7 align-self-center explanation">
                    <div class="align-middle">
                        Code duplication decreases your code quality.<br />
                        Possible impact:
                    </div>
                    <ul class="features-list">
                        <li>Decrease maintainability</li>
                        <li>Decrease code readability</li>
                        <li>Increase security risks</li>
                        <li>Increase code base size</li>
                    </ul>
                </div>
            </div>
        </div>
         <div class="slide">
            <h3>Details</h3>
             <div class="row mt-4">
                <div class="col-md-5">
                    <div class="mt-4">
                        <apexchart width="100%" type="bar" :options="optionsCDDetails" :series="seriesCDDetails"></apexchart>
                    </div>
                </div>
                <div class="col-md-7 align-self-center">
                    <div class="row mt-4">
                        <div class="col-md-2 valueImportant info align-self-center">
                            Lines
                        </div>
                        <div class="col-md-3 valueImportant info align-self-center">
                            {{ Math.round(report.percentage.min) }}%
                            <hr />
                            Min
                        </div>
                        <div class="col-md-3 valueImportant info align-self-center">
                            {{ Math.round(report.percentage.max) }}%
                            <hr />
                            Max
                        </div>
                        <div class="col-md-3 valueImportant info align-self-center">
                            {{ report.percentage.total }}
                            <hr />
                            Total packages
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-2 valueImportant info align-self-center">
                            Tokens
                        </div>
                        <div class="col-md-3 valueImportant info align-self-center">
                            {{ Math.round(report.percentageTokens.min) }}%
                            <hr />
                            Min
                        </div>
                        <div class="col-md-3 valueImportant info align-self-center">
                            {{ Math.round(report.percentageTokens.max) }}%
                            <hr />
                            Max
                        </div>
                        <div class="col-md-3 valueImportant info align-self-center">
                            {{ report.percentageTokens.total }}
                            <hr />
                            Total packages
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    name: 'CodeDuplication',
    props: {
        report: Object
    },
    data () {
        return {
            optionsCD: {
                chart: {
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
                    }
                },
                xaxis: {
                    categories: ['Lines', 'Tokens']
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: [],
                            fontSize: '1.3em',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400
                        },
                        rotate: 45
                    },
                    min: 0
                },
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                    },
                    formatter: function (val) {
                        return `${val}%`
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: true
                    }
                },
                legend: {
                    show: true,
                    floating: false,
                    position: 'right',
                    offsetX: 100,
                    offsetY: 350,
                    formatter: function (val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
                    }
                },
                tooltip: {
                    theme: 'dark'
                }
            },
            seriesCD: [{
                name: 'Average',
                data: [
                    Math.round(this.report['percentage'].avg),
                    Math.round(this.report['percentageTokens'].avg)
                ]
            }],
            optionsCDDetails: {
                chart: {
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
                    }
                },
                xaxis: {
                    categories: ['Lines', 'Tokens']
                },
                yaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: [],
                            fontSize: '1.3em',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400
                        },
                        rotate: 45
                    },
                    min: 0,
                },
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        fontSize: '1em',
                        fontWeight: 'bold',
                    },
                    formatter: function (val) {
                        return `${val}%`
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: true
                    }
                },
                legend: {
                    show: true,
                    floating: false,
                    position: 'right',
                    offsetX: 0,
                    offsetY: 0
                },
                tooltip: {
                    theme: 'dark'
                }
            },
            seriesCDDetails: [{
                name: 'Average',
                data: [
                    Math.round(this.report['percentage'].avg),
                    Math.round(this.report['percentageTokens'].avg)
                ]
            }, {
                name: 'First quartile',
                data: [
                    Math.round(this.report['percentage'].percentiles['25']),
                    Math.round(this.report['percentageTokens'].percentiles['25'])
                ]
            }, {
                name: 'Median',
                data: [
                    Math.round(this.report['percentage'].percentiles['50']),
                    Math.round(this.report['percentageTokens'].percentiles['50'])
                ]
            }, {
                name: 'Third quartile',
                data: [
                    Math.round(this.report['percentage'].percentiles['75']),
                    Math.round(this.report['percentageTokens'].percentiles['75'])
                ]
            }]
            
        }
    }
}
</script>
