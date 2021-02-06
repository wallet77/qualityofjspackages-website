
<template>
    <div class="section">
        <div class="slide">
            <h3>Code duplication</h3>
            <div class="row mt-4">
                <MainChart type="bar" :options="optionsCD" :series="seriesCD" />
                <div class="col-md-7 align-self-center explanation">
                    <div class="align-middle">
                        Code duplication decreases your code quality.
                    </div>
                    <br />
                    <ul class="features-list">Possible impact:
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
import MainChart from '@/components/MainChart'
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
        report: Object
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
