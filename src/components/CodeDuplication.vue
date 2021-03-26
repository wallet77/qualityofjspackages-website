
<template>
    <div class="section">
        <div class="slide">
            <h3>Code duplication decreases your code quality</h3>
            <div class="row mt-4">
                <div class="col-md-2"></div>
                <MainChart type="bar" :options="optionsCD" :series="seriesCD" v-if="display" />
                <div class="col-md-3 align-self-center explanation">
                    Possible impact:
                    <ul class="features-list">
                        <li>Decrease maintainability</li>
                        <li>Decrease code readability</li>
                        <li>Increase security risks</li>
                        <li>Increase code base size</li>
                    </ul>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
         <div class="slide">
            <h3>Code duplication percentiles</h3>
            <div class="row mt-4">
                <div class="col-md-5">
                    <div class="mt-4">
                        <apexchart width="100%" type="bar" :options="optionsCDDetails" :series="seriesCDDetails" :col="7" v-if="display"></apexchart>
                    </div>
                </div>
                <div class="col-md-5 align-self-center">
                    <div class="row mt-4">
                        <div class="col-md-4 valueImportant info align-self-center">
                            Lines
                        </div>
                        <div class="col-md-4 valueImportant info align-self-center">
                            <span class="subTitle text-center">Min</span>
                            <br />
                            <span class="valueSucceed">~{{ Math.round(report.percentage.min) }}%</span>
                        </div>
                        <div class="col-md-4 valueImportant info align-self-center">
                            <span class="subTitle text-center">Max</span>
                            <br />
                            <span class="valueCritical">~{{ Math.round(report.percentage.max) }}%</span>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-4 valueImportant info align-self-center">
                            Tokens
                        </div>
                        <div class="col-md-4 valueImportant info align-self-center">
                            <span class="subTitle text-center">Min</span>
                            <br />
                            <span class="valueSucceed">~{{ Math.round(report.percentageTokens.min) }}%</span>
                        </div>
                        <div class="col-md-4 valueImportant info align-self-center">
                            <span class="subTitle text-center">Max</span>
                            <br />
                            <span class="valueCritical">~{{ Math.round(report.percentageTokens.max) }}%</span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
const MainChart = () => import('@/components/MainChart')
import {barOptions, mergeObject} from '../variables'

const extendOptions = mergeObject(barOptions, {
    dataLabels: {
        style: {
            fontSize: '1em'
        }
    },
    legend: {
        offsetX: 0,
        offsetY: 0
    }
})
export default {
    name: 'CodeDuplication',
    props: {
        report: Object,
        display: Boolean
    },
    components: {
        MainChart
    },
    data () {
        return {
            optionsCD: barOptions,
            seriesCD: [{
                name: 'Average',
                data: [
                    Math.round(this.report['percentage'].avg),
                    Math.round(this.report['percentageTokens'].avg)
                ]
            }],
            optionsCDDetails: extendOptions,
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
