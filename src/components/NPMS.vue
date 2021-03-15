
<template>
    <div class="section">
        <div class="slide">
            <h3>npms.io results</h3>
            <div class="row mt-4">
                <MainChart type="bar" :options="optionsNpms" :series="seriesNpms" />
                <div class="col-md-7 align-self-center explanation">
                    <div>
                        Powered by <a href="https://npms.io" target="_blank" rel="noopener noreferrer">Npms.io</a>.
                    </div>
                    <br />
                    Here is an overview of what is taken into account:
                    <ul class="features-list">
                        <li>Quality <span class="details">(Has linter?, Has readme?, Has tests? ...)</span></li>
                        <li>Maintenance <span class="details">(Commit frequency, Release frequency, ...)</span></li>
                        <li>Popularity <span class="details">(Number of downloads, Number of stars, ...)</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainChart from '@/components/MainChart'
import {colors} from '../variables'
export default {
    name: 'npms',
    props: {
        report: Object
    },
    components: {
      MainChart
    },
    data () {
        return {
            optionsNpms: {
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
            seriesNpms: [{
                data: [Math.round(this.report.final.avg * 100), Math.round(this.report.quality.avg * 100), Math.round(this.report.maintenance.avg * 100), Math.round(this.report.popularity.avg * 100)],
            }],
        }
    }
}
</script>
