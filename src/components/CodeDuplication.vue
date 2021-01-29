
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
            <h3>Explanations</h3>
             <div class="row mt-4">
                <div class="col-md-5">
                    <div class="mt-4">
                        <apexchart width="100%" type="bar" :options="optionsCD" :series="seriesCD"></apexchart>
                    </div>
                </div>
                <div class="col-md-7 align-self-center">
                    <div class="align-middle explanation">
                        These metrics are calculated using the open source project <a href="https://github.com/kucherenko/jscpd" target="_blank" rel="noopener noreferrer">jscpd</a>.<br />
                        Metrics:
                    </div>
                    <ul class="features-list">
                        <li>Tokens</li>
                        <li>Lines</li>
                    </ul>
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
                    min: 0,
                    max: 100
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
                },
                stroke: {
                    lineCap: 'round'
                }
            },
            seriesCD: [{
                data: [
                    Math.round(this.report['percentage'].avg * 100),
                    Math.round(this.report['percentageTokens'].avg * 100)
                ]
            }]
            
        }
    }
}
</script>
