//1. data
//2. mycharts
var mychart = echarts.init(document.getElementById("chart"));
option = {
    //color:['rgb(238,63,77,0.65)','rgb(236,155,173,0.8)','rgb(252,161,6,0.7)','rgb(244,206,105)','rgb(208,222,170)','rgb(140,194,105)','rgb(93,190,138)','rgb(147,213,220)','rgb(147,181,207)','rgb(17,101,154,0.7)','rgb(94,121,135,0.8)','rgb(73,92,105)','rgb(20,35,32,0.8)','rgb(19,24,36,0.8)','rgb(0,0,0,0.8)'],
    //color:['rgb(249,236,195,0.8)','rgb(214,227,197)','rgb(192,217,188)','rgb(162,200,173)','rgb(133,180,160)','rgb(94,147,139)','rgb(93,147,139)','rgb(74,125,124)','rgb(66,114,118)','rgb(65,101,109)','rgb(62,100,113)','rgb(60,100,115)','rgb(54,90,106)','rgb(47,78,98)','rgb(42,70,91)','rgb(35,57,81)'],
    //color:['rgb(182,42,45,0.9)','rgb(182,42,45,0.7)','rgb(244,105,74,0.8)','rgb(244,105,74,0.6)','rgb(238,171,41,0.8)','rgb(238,171,41,0.6)','rgb(108,166,128,0.6)','rgb(108,166,128,0.8)','rgb(83,122,72,0.6)','rgb(83,122,72,0.7)','rgb(126,145,186,0.85)','rgb(126,145,186,1)','rgb(101,92,133,0.85)','rgb(101,92,133,1)','rgb(87,79,115,0.95)'],
    color:['rgb(189,63,66)','rgb(246,135,110)','rgb(241,188,84)','rgb(167,202,179)','rgb(137,184,153)','rgb(134,162,127)','rgb(145,161,196)','rgb(124,116,151)','rgb(96,88,122)'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    /*图例，颜色*/
    legend: {
        textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 15,
          },
          itemWidth: 28,
        data: ['宣泄','寂寞','甜蜜','思念','治愈','励志','快乐','安静','伤感'],
        /*selected: {
            '爱情':false,
            '赞美':false,
            '友情':false,
            '励志':false,
            '闲适':false,
            '抒怀':false,
            '思乡':false,
            '思念':false,
            '送别':false,
            '孤寂':false,
            '愁苦':false,
            '忧国忧民':false,
            '咏史怀古':false,
            '壮志难酬':false,
            '讽刺':false
        }*/
    },
    /*图的位置*/
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value'
    },
    /*改成植物数据*/
    xAxis: {
        type: 'category',
        data: [ '传统', '世界', '新世纪', '金属', '乡村', '中国风', '后摇', '古风', '布鲁斯', '摇滚', '说唱', '电子', '轻音乐', 'R&B', '爵士', '古典', '流行', '民谣'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    /*一个情感对应一个{}*/
    series: [
        {
            
            name: '宣泄',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [ 1, 2, 0, 1, 1, 2, 3, 0, 4, 4, 5, 5, 6, 18, 3, 8, 5, 9]
        },
        {
            name: '寂寞',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [1, 2, 1, 4, 0, 4, 5, 3, 2, 2, 9, 5, 3, 5, 7, 6, 9, 10]
        },
        {
            name: '甜蜜',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [ 4, 3, 6, 1, 3, 2, 0, 5, 7, 7, 4, 10, 6, 5, 8, 8, 22, 13]
        },
        {
            name: '思念',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [1, 1, 1, 2, 3, 2, 3, 1, 1, 1, 3, 1, 6, 3, 4, 3, 9, 3]
        },
        {
            name: '治愈',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [1, 1, 4, 5, 1, 1, 3, 0, 0, 0, 2, 1, 0, 6, 6, 1, 3, 3]
        },
        {
            name: '励志',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [3, 2, 1, 3, 5, 5, 7, 4, 4, 4, 2, 5, 5, 6, 7, 5, 7, 19]
        },
        {
            name: '快乐',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [ 0, 1, 2, 2, 2, 5, 0, 4, 3, 3, 3, 1, 4, 3, 6, 5, 1, 18]
        },
        {
            name: '安静',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [5, 3, 0, 0, 5, 5, 2, 2, 4, 4, 4, 3, 3, 3, 4, 6, 3, 12]
        },
        {
            name: '伤感',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [ 1, 2, 3, 2, 0, 4, 4, 5, 11, 11, 7, 10, 17, 15, 17, 25, 31, 52]
        }

    ]
};
mychart.setOption(option);