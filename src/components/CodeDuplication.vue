
<template>
    <div class="section">
        <div class="slide">
            <h3>Copy/Paste</h3>
            <div class="row mt-4">
                <div class="col-md-5">
                    <div class="mt-4">
                        <apexchart width="100%" type="bar" :options="optionsCD" :series="seriesCD"></apexchart>
                    </div>
                </div>
                <div class="col-md-7 align-self-center">
                    <div class="align-middle explanation">
                        These metrics are calculated using the open source project <a href="https://github.com/kucherenko/jscpd">jscpd</a>.<br />
                        Metrics:
                    </div>
                    <ul class="features-list">
                        <li>Tokens</li>
                        <li>Lines</li>
                    </ul>
                </div>
            </div>
        </div>
         <div class="slide">
            <h3>Explanation</h3>
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
                        show: false
                    },
                    min: 0,
                    max: 100
                },
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        colors: ['#fff']
                    },
                    formatter: function (val, opt) {
                        return `${opt.w.globals.labels[opt.dataPointIndex]}:  ${val}%`
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
                    Math.round(this.report.allAvgs['Code duplication']['percentage'] * 100),
                    Math.round(this.report.allAvgs['Code duplication']['percentageTokens'] * 100)
                ]
            }]
            
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