var erachart;
function piant_eras(dom, index) {
    erachart = echarts.init(dom);
    era_option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['诗中出现的数目', '诗中出现的数目']
        },
        xAxis: [
            {
                type: 'category',
                data: ['初唐', '盛唐', '中唐', '晚唐'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '出现的数目（首）',
                /* min: 0,
                 max: 250,
                 interval: 50,
                 axisLabel: {
                     formatter: '{value} ml'
                 }*/
            },
            {
                type: 'value',
                name: '',
                /*min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} °C'
                }*/
            }
        ],
        series: [
            {
                name: '蒸发量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '平均温度',
                type: 'line',
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };
    erachart.setOption(era_option);
};