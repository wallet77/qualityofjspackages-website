
<template>
    <div class="section">
        <div class="slide">
            <h3>Electrical consumption of npm install</h3>
            <div class="row mt-4">
                <MainChart type="bar" :options="options" :series="series" />
                <div class="col-md-3 align-self-center explanation">
                    <div>
                        Powered by <a href="https://github.com/hubblo-org/scaphandre" target="_blank" rel="noopener noreferrer">Scaphandre</a>
                    </div>
                </div>
                <MainChart type="radialBar" :options="optionsDetails" :series="seriesDetails" :col="4" />
            </div>
        </div>
    </div>
</template>

<script>
import MainChart from '@/components/MainChart'
import {colors, mergeObject, barOptions, clone, radialOptions} from '../variables'

const getReadable = (size, suffix='W', precision=2, decimal=2) => {
    let i = precision;
    const byteUnits = ['p', 'n', 'u', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    do {
        size = size / 1000;
        i++;
    } while (size > 1000);

    return `${Math.max(size, 0.1).toFixed(decimal)} ${byteUnits[i]}${suffix}`
}

const optionsConsumption = mergeObject(clone(barOptions), {
    title: {
        text: 'Consumption during dep. installation',
        align: 'center',
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 6,
            columnWidth: '45%',
            distributed: true,
        }
    },
    colors: colors,
    yaxis: {
        show: false,
    },
    labels: ['Average', 'Median', 'Third quartile', '90th'],
    xaxis: {
        categories: ['Average', 'Median', 'Third quartile', '90th'],
        labels: {
            style: {
                colors: colors,
                fontSize: '20px'
            }
        }
    },
    dataLabels: {
        offsetX: 0,
        offsetY: 0,
        textAnchor: 'middle',
        style: {
            fontSize: '15px'
        },
        formatter: function (val) {
            return getReadable(val)
        }
    },
    legend: {
        show: false
    },
    tooltip: {
        enabled: false
    }
})

export default {
    name: 'consumption',
    props: {
        report: Object
    },
    components: {
      MainChart
    },
    data () {
        return {
            options: optionsConsumption,
            series: [{
                data: [
                    this.report.npm.avg,
                    this.report.npm.percentiles['50'],
                    this.report.npm.percentiles['75'],
                    this.report.npm.percentiles['90']
                ]
            }],
            optionsDetails: mergeObject(clone(radialOptions), {
                title: {
                    text: '% elec. consumption on the host',
                    align: 'center',
                },
            }),
            seriesDetails: [
                Math.round(this.report.npm.percentiles['75'] * 100 / this.report.host.percentiles['75']),
                Math.round(this.report.npm.percentiles['50'] * 100 / this.report.host.percentiles['50']),
                Math.round(this.report.npm.percentiles['25'] * 100 / this.report.host.percentiles['25']),
                Math.round(this.report.npm.avg * 100 / this.report.host.avg)],
        }
    }
}
</script>
