data_ke = {
    "银杏科": 3,
    "松科": 600,
    "杉科": 233,
    "柏科": 451,
    "木兰科": 93,
    "蜡梅科": 4,
    "樟科": 50,
    "三白草科": 2,
    "马兜铃科": 27,
    "八角科": 1,
    "莲科": 1172,
    "睡菜科": 59,
    "睡莲科": 28,
    "莼菜科": 53,
    "金鱼藻科": 63,
    "毛良科": 2,
    "小壁科": 4,
    "木通科": 3,
    "罂粟科": 7,
    "金缕梅科": 233,
    "杜仲科": 16,
    "榆科": 217,
    "大麻科": 104,
    "桑科": 518,
    "荨麻科": 44,
    "杨梅科": 7,
    "壳斗科": 138,
    "桦木科": 124,
    "商陆科": 1,
    "仙人掌科": 4,
    "藜科": 99,
    "苋科": 7,
    "石竹科": 21,
    "蓼科": 105,
    "芍药科": 434,
    "龙脑香科": 11,
    "山茶科": 490,
    "梧桐科": 274,
    "锦葵科": 349,
    "怪柳科": 34,
    "西番莲科": 21,
    "葫芦科": 269,
    "杨柳科": 1639,
    "十字花科": 137,
    "杜鹃花科": 96,
    "柿科": 28,
    "报春花科": 257,
    "景天科": 2,
    "蔷薇科": 2285,
    "含羞草科": 12,
    "云实科": 13,
    "蝶形花科": 971,
    "千屈菜科": 24,
    "瑞香科": 4,
    "菱科": 244,
    "石榴科": 128,
    "檀香科": 17,
    "桑寄生科": 16,
    "冬青科": 9,
    "黄杨科": 2,
    "大戟科": 10,
    "鼠李科": 244,
    "葡萄科": 58,
    "无患子科": 71,
    "械树科": 211,
    "橄榄科": 1,
    "苦木科": 19,
    "棟科": 36,
    "芸香科": 511,
    "菜藜科": 2,
    "凤仙花科": 2,
    "五加科": 15,
    "伞形科": 79,
    "企形科": 28,
    "茄科": 38,
    "苑丝子科": 17,
    "马鞭草科": 42,
    "唇形科": 1,
    "芝麻科": 24,
    "木棒科": 936,
    "木幄科": 3,
    "木犀科": 1,
    "玄参科": 154,
    "紫威科": 38,
    "紫井科": 34,
    "茜草科": 44,
    "菊科": 1481,
    "泽泻科": 2,
    "棕榈科": 106,
    "天南星科": 119,
    "浮萍科": 315,
    "鸭距草科": 27,
    "灯心草科": 3,
    "莎草科": 186,
    "禾本科": 8207,
    "香蒲科": 165,
    "芭蕉科": 135,
    "姜科": 89,
    "百合科": 153,
    "拔莫科": 2,
    "薯蓣科": 12,
    "兰科": 30,
    "石莼科": 2,
    "灵芝科": 235,
    "多孔菌科": 21,
    "松萝科": 82,
    "地钱科": 322,
    "土马鬓科": 303,
    "蕨科": 61,
    "蘋科": 265,
}


// (203,119,85), (194,161,130), (182,182,184), (196,200,183), (158,104,78)
function drawSun() {
    var chartDom = document.getElementById('sun');
    var myChart = echarts.init(chartDom);
    var option;

    var data = [{
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '禾本科',
            itemStyle: {
                color: 'rgba(158,104,78,1)',
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:382',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(158,104,78,1)'
                },
            }, {
                name: '诗句中频率:7825',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(158,104,78,1)'
                }
            }]
        }
        ]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '蔷薇科',
            itemStyle: {
                color: 'rgba(203,119,85,1)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:404',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,1)'
                }
            }, {
                name: '诗句中频率:1881',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,1)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '菊科',
            itemStyle: {
                color: 'rgba(203,119,85,0.9)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:117',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,0.9)'
                }
            }, {
                name: '诗句中频率:1364',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,0.9)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '杨柳科',
            itemStyle: {
                color: 'rgba(203,119,85,0.8)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:384',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,0.8)'
                }
            }, {
                name: '诗句中频率:1225',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,0.8)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '莲科',
            itemStyle: {
                color: 'rgba(203,119,85,0.7)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:154',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,0.7)'
                }
            }, {
                name: '诗句中频率:1018',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,0.7)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '蝶形花科',
            itemStyle: {
                color: 'rgba(194,161,130,1)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:43',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,1)'
                }
            }, {
                name: '诗句中频率:928',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,1)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '木樨科',
            itemStyle: {
                color: 'rgba(194,161,130,1)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:47',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,1)'
                }
            }, {
                name: '诗句中频率:889',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,1)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '桑科',
            itemStyle: {
                color: 'rgba(194,161,130,0.9)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:31',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.9)'
                }
            }, {
                name: '诗句中频率:487',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.9)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '芸香科',
            itemStyle: {
                color: 'rgba(194,161,130,0.8)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:29',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.8)'
                }
            }, {
                name: '诗句中频率:482',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.8)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '山茶科',
            itemStyle: {
                color: 'rgba(194,161,130,0.7)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:15',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.7)'
                }
            }, {
                name: '诗句中频率:475',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.7)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '柏科',
            itemStyle: {
                color: 'rgba(194,161,130,0.6)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:10',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.6)'
                }
            }, {
                name: '诗句中频率:441',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.6)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '松科',
            itemStyle: {
                color: 'rgba(194,161,130,0.5)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:174',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.5)'
                }
            }, {
                name: '诗句中频率:426',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.5)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '锦葵科',
            itemStyle: {
                color: 'rgba(196,200,183,1)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:31',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,1)'
                }
            }, {
                name: '诗句中频率:318',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,1)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '锦葵科',
            itemStyle: {
                color: 'rgba(196,200,183,0.9)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:31',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.9)'
                }
            }, {
                name: '诗句中频率:318',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.9)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '浮萍科',
            itemStyle: {
                color: 'rgba(196,200,183,0.8)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:7',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.8)'
                }
            }, {
                name: '诗句中频率:308',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.8)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '地钱科',
            itemStyle: {
                color: 'rgba(196,200,183,0.7)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:16',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.7)'
                }
            }, {
                name: '诗句中频率:306',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.7)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '芍药科',
            itemStyle: {
                color: 'rgba(196,200,183,0.6)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:129',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.6)'
                }
            }, {
                name: '诗句中频率:305',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.6)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [{
            name: '梧桐科',
            itemStyle: {
                color: 'rgba(196,200,183,0.55)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '标题频率:129',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.55)'
                }
            }, {
                name: '诗句中频率:305',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.55)'
                }
            }]
        }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [
            {
                name: '土马鬓科',
                itemStyle: {
                    color: 'rgba(196,200,183,0.5)'
                },
                label: {
                    rotate: 'radial',
                    fontSize: 14,
                },
                nodeClick: "false",
                children: [{
                    name: '标题频率:3',
                    value: 2,
                    nodeClick: "false",
                    itemStyle: {
                        color: 'rgba(196,200,183,0.5)'
                    }
                }, {
                    name: '诗句中频率:300',
                    value: 2,
                    nodeClick: "false",
                    itemStyle: {
                        color: 'rgba(196,200,183,0.5)'
                    }
                }]
            }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [
            {
                name: '蘋科',
                itemStyle: {
                    color: 'rgba(182,182,184,1)'
                },
                label: {
                    rotate: 'radial',
                    fontSize: 14,
                },
                nodeClick: "false",
                children: [{
                    name: '标题频率:2',
                    value: 2,
                    nodeClick: "false",
                    itemStyle: {
                        color: 'rgba(182,182,184,1)'
                    }
                }, {
                    name: '诗句中频率:263',
                    value: 2,
                    nodeClick: "false",
                    itemStyle: {
                        color: 'rgba(182,182,184,1)'
                    }
                }]
            }]
    },
    {
        name: '',
        itemStyle: {
            color: '#da0d68'
        },
        nodeClick: "false",
        children: [
            {
                name: '报春花科',
                itemStyle: {
                    color: 'rgba(182,182,184,0.5)'
                },
                label: {
                    rotate: 'radial',
                    fontSize: 14,
                },
                nodeClick: "false",
                children: [{
                    name: '标题频率:2',
                    value: 2,
                    nodeClick: "false",
                    itemStyle: {
                        color: 'rgba(182,182,184,0.5)'
                    }
                }, {
                    name: '诗句中频率:225',
                    value: 2,
                    nodeClick: "false",
                    itemStyle: {
                        color: 'rgba(182,182,184,0.5)'
                    }
                }]
            }]
    }
    ];

    option = {
        visualMap: {
            type: 'continuous',
            min: 227,
            max: 8207,
            right: 0,
            // hoverLink:'true',
            inRange: {
                color: ['#B6B6B8', '#C4C8B7', '#C2A182', '#CB7755', '#9E684E']
                // color:['#9E684E', '#CB7755', '#C2A182', '#C4C8B7', '#B6B6B8']
            }
        },
        series: {
            type: 'sunburst',
            label: {
                rotate: 'radial',
                color: 'rgba(0, 0, 0, 0.9)',
            },
            data: data,
            radius: [0, '95%'],
            sort: null,
            emphasis: {
                focus: 'ancestor'
            },
            levels: [{}, {
                r0: '10%',
                r: '10%',
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    rotate: 'tangential'
                }
            }, {
                r0: '10%',
                r: '60%',
                label: {
                    align: 'right'
                }
            }, {
                r0: '60%',
                r: '62%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
                itemStyle: {
                    borderWidth: 3
                }
            }]
        }
    };

    option && myChart.setOption(option);
    myChart.on('click', params => {
        // console.log('params::', params.name);
        sun_card(params.name);
        // $('.main').fadeOut(350);
        // $('.info').css({"display":"flex", "flex-direction": "row"});
        // $('.info').fadeIn(350);
    })
};

function sun_card(p_name) {
    var plists = ['禾本科', '蔷薇科', '菊科', '杨柳科', '莲科', '蝶形花科', '木樨科', '桑科', '芸香科', '山茶科',
        '柏科', '松科', '锦葵科', '浮萍科', '芍药科', '梧桐科', '蘋科', '十字花科', '棕榈科', '百合科']
    var tag = false;

    var i;
    for (i = 0; i < plists.length; i++) {
        if (p_name == plists[i]) {
            tag = true;
            break;
        }
    }
    if (tag) {
        var echartdom = document.getElementById("map");
        piant_lbars(echartdom, p_name);
        $("#info-div").html(lbar_txts(p_name));
        $(".return").show();
        $('.main').fadeOut(350);
        // $('.info').css({"display":"flex", "flex-direction": "row"});
        $('.info').fadeIn(350);
    }
};

function lbar_txts(p_name) {
    title = "<h2>" + p_name + ":</h2>";
    str1 = "<p class = 'info'>全唐诗中共提到该科" + lplants_txt[p_name][0] + "种植物。";
    str2 = "其中出现次数最多的是" + lplants_txt[p_name][1] + "，";
    str3 = "具体出现的次数为" + lplants_txt[p_name][2] + "次。<br/>";
    str4 = p_name+"中包含的植物有："+import_text(p_name);
    return title + str1 + str2 + str3 + str4
}
var plants_pchart;

function import_lbardata(p_name) {
    data = [];
    lists = plants_lbar_data[p_name];
    for (i = 0; i < lists.length; i++) {
        dic = {};
        dic['value'] = lists[i];
        if (lists[i] > 300) {
            dic['itemStyle'] = {
                'color': 'rgb(213,146,119)'
            }
        }
        else if (lists[i] > 100) {
            dic['itemStyle'] = {
                'color': 'rgb(191,161,127)'
            }
        }
        else{
            dic['itemStyle'] = {
                'color': 'rgb(199,201,187)'
            }
        }
        data.push(dic)
    }
    return data;
}

function piant_lbars(dom, p_name) {
    plants_pchart = echarts.init(dom);
    data = import_lbardata(p_name);
        lbars_option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true
                    }
                }
            },
            calculable: true,
            /* legend: {
                data: ['1', '2', '3'],
            }, */
            grid: {
                top: '12%',
                left: '1%',
                right: '10%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: plants_lbar_text[p_name]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    //name: 'Budget (million USD)',
                    /*axisLabel: {
                        formatter: function (a) {
                            a = +a;
                            return isFinite(a)
                                ? echarts.format.addCommas(+a / 1000)
                                : '';
                        }
                    }*/
                }
            ],
            /* dataZoom: [
                {
                    show: true,
                    start: 20,
                    end: 100
                },
                {
                    type: 'inside',
                    start: "0%",
                    end: "100%"
                },
                {
                    show: true,
                    yAxisIndex: 0,
                    filterMode: 'empty',
                    width: 30,
                    height: '80%',
                    showDataShadow: false,
                    left: '93%'
                }
            ], */
            series: [
                {
                    name: '出现数目',
                    type: 'bar',
                    data: data,
                    barMaxWidth: 60
                }
            ]
        };
    plants_pchart.setOption(lbars_option);
};


function hide() {
    $('.info').fadeOut(1000);
    $('.main').fadeIn(1000);
}

function import_text(p_name){
    lists = plants_lbar_text[p_name];
    text = ""
    len = lists.length < 10?lists.length:10;
    for(i = 0;i < len;i++){
        if(i != 0)
        {
            text +="、";
        }
        text += lists[i];
    }
    console.log("text:"+text);
    return text;
}