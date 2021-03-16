export const colors = [
    '#008FFB',
    '#00E396',
    '#FEB019',
    '#FF4560',
    '#775DD0',
    '#546E7A',
    '#26a69a',
    '#D10CE8'
];

export const mergeObject = (target, source) => {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object) {
            if(!target[key]) target[key] = {}
            Object.assign(source[key], mergeObject(target[key], source[key]))
        }
    }

    // Join `target` and modified `source`
    Object.assign(target || {}, source)
    return target
}

export const clone = (a) => {
    return JSON.parse(JSON.stringify(a))
}

export const radialOptions = {
    chart: {
        foreColor: '#ccc',
    },
    plotOptions: {
        radialBar: {
            size: undefined,
            inverseOrder: true,
            hollow: {
                margin: 0,
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
    },
    responsive: [{
        breakpoint: 600,
        options: {
            legend: {
                show: true,
                floating: false,
                position: 'bottom',
                offsetX: 0,
                offsetY: 0,
            }
        }
    }]
};

export const barOptions = {
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
    },
    responsive: [{
        breakpoint: 600,
        options: {
            legend: {
                show: true,
                floating: false,
                position: 'bottom',
                offsetX: 0,
                offsetY: 0,
            }
        }
    }]
};

export const barPercentilesOptions = mergeObject(clone(barOptions), {
    title: {
        text: false,
        align: 'center',
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            distributed: true
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
            return val
        }
    },
    legend: {
        show: false
    },
    tooltip: {
        enabled: false
    }
})
