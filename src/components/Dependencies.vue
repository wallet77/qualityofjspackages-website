
<template>
    <div class="section">
        <div class="slide">
            <h3>Dependencies</h3>
            <div class="row mt-4">
                <MainChart type="bar" :options="optionsUpdates" :series="seriesUpdates" />
                <div class="col-md-7 align-self-center">
                    <div class="row mt-4">
                        <div class="col-md-6 valueImportant">
                            <span class="subTitle text-center">Unused dependencies</span>
                            <br />
                            <span class="valueWarn">~{{ report.check.dependencies.avg.toFixed(2) }}</span>
                            <br />
                            <span class="details">max: </span><span class="details">{{ report.check.dependencies.max.toFixed(0) }}</span>
                            <br />
                            <span class="details">min: </span><span class="details">{{ report.check.dependencies.min.toFixed(0) }}</span>
                        </div>
                        <div class="col-md-6 valueImportant">
                            <span class="subTitle">Number of range version</span>
                            <br />
                            <span class="valueCritical">~{{ report.exactVersions.dependencies.avg.toFixed(2) }}</span>
                            <br />
                            <span class="details">max: </span><span class="details">{{ report.exactVersions.dependencies.max.toFixed(0) }}</span>
                            <br />
                            <span class="details">min: </span><span class="details">{{ report.exactVersions.dependencies.min.toFixed(0) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainChart from '@/components/MainChart'
import {colors} from '../variables'
export default {
    name: 'dependencies',
    props: {
        report: Object
    },
    components: {
      MainChart
    },
    data () {
        return {
            optionsUpdates: {
                title: {
                    text: 'Average number of updates',
                    align: 'center',
                },
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
                labels: ['Major', 'Minor', 'Patch'],
                xaxis: {
                    categories: [
                        'Major',
                        'Minor',
                        'Patch'
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
            seriesUpdates: [{
                data: [
                    this.report.updates.major.avg.toFixed(2),
                    this.report.updates.minor.avg.toFixed(2),
                    this.report.updates.patch.avg.toFixed(2)
                ],
            }],
        }
    }
}
</script>
