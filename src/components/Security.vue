
<template>
  <div class="section">
    <div class="slide">
      <h1>JS modules security vulnerabilities</h1>
      <div class="row mt-4">
        <MainChart
          v-if="display"
          type="bar"
          :options="options"
          :series="series"
        />
        <div class="col-md-7 align-self-center explanation">
          <div>
            Powered by <a
              href="https://docs.npmjs.com/cli/v6/commands/npm-audit"
              target="_blank"
              rel="noopener noreferrer"
            >NPM audit</a>.
          </div>
          <div class="row mt-4">
            <div class="col-md-3 valueImportant">
              <span class="subTitle">Max Critical</span>
              <br>
              <span class="valueCritical">{{ report.critical.max }}</span>
            </div>
            <div class="col-md-3 valueImportant">
              <span class="subTitle">Max High</span>
              <br>
              <span class="valueWarn">{{ report.high.max }}</span>
            </div>
            <div class="col-md-3 valueImportant">
              <span class="subTitle">Max Moderate</span>
              <br>
              <span class="valueWarn">{{ report.moderate.max }}</span>
            </div>
            <div class="col-md-3 valueImportant">
              <span class="subTitle">Max Low</span>
              <br>
              <span class="valueInfo">{{ report.low.max }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const MainChart = () => import('@/components/MainChart')
import {colors} from '../variables'

const customColors = [
    colors[3],
    colors[2],
    colors[6],
    colors[0]
]
export default {
    name: 'Security',
    components: {
      MainChart
    },
    props: {
        report: Object,
        display: Boolean
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
                colors: customColors,
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true,
                    }
                },
                xaxis: {
                    categories: labels,
                    labels: {
                        style: {
                            colors: customColors,
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
