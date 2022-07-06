data_ke = {
    "军事音乐": 370,
    "行军": 131,
    "国歌": 162,
    "传统音乐": 469,
    "口头传统": 264,
    "海棚屋": 328,
    "工作歌曲": 436,
    "童谣": 349,
    "蔓藤花纹": 15,
    "本土音乐": 131,
    "世界音乐": 218,
    "非洲节拍": 398,
    "非洲节拍": 4,
    "非洲嘻哈": 357,
    "非洲重金属": 404,
    "阿帕拉": 303,
    "本加": 356,
    "邦巴": 392,
    "邦戈·弗拉瓦": 461,
    "比库西": 420,
    "开普爵士": 87,
    "Chimurenga": 196,
    "刚果伦巴舞": 161,
    "Coupé-Décalé": 193,
    "富士": 433,
    "金格": 145,
    "高寿": 307,
    "时髦生活": 129,
    "伊博高生活": 302,
    "伊博说唱": 158,
    "伊萨卡塔米亚": 352,
    "吉特": 385,
    "朱朱": 67,
    "古姆": 128,
    "加东野卡木": 447,
    "Kizomba": 167,
    "九郎": 372,
    "科威托": 269,
    "克鲁瓦": 330,
    "马科萨": 347,
    "马洛亚": 270,
    "马拉比": 296,
    "马拉本塔": 193,
    "姆巴拉克斯": 201,
    "姆巴卡": 472,
    "姆布贝": 248,
    "莫娜": 72,
    "恩登博洛": 451,
    "棕榈酒": 363,
    "雷伊": 329,
    "世嘉": 361,
    "上安电器": 149,
    "露天市场": 278,
    "夸萨": 55,
    "塔拉卜": 61,
    "扎姆罗克": 408,
    "邹楼": 461,
    "斐济里": 178,
    "哈利吉": 300,
    "丽娃": 412,
    "重量": 253,
    "流行音乐": 54,
    "Cantopop": 134,
    "曼多波": 483,
    "福建流行音乐": 376,
    "中国摇滚": 378,
    "中国嘻哈": 63,
    "中国民间音乐": 442,
    "香港摇滚": 250,
    "香港嘻哈": 44,
    "香港英语流行": 165,
    "台湾流行乐": 171,
    "台湾岩": 375,
    "台湾嘻哈": 46,
    "恩卡": 312,
    "流行音乐": 168,
    "日本爵士": 184,
    "日本摇滚": 23,
    "Kayōkyoku": 22,
    "韩国流行音乐": 318,
    "韩国摇滚": 227,
    "韩国嘻哈": 160,
    "韩国民间音乐": 97,
    "小跑": 412,
    "亚洲地下": 31,
    "贝拉": 469,
    "鲍尔": 409,
    "邦格拉": 472,
    "巴威亚": 488,
    "果阿tr": 303,
    "印度古典": 90,
    "印度古典": 335,
    "卡纳蒂奇": 52,
    "印度爵士乐": 185,
    "印度流行": 57,
    "印度摇滚": 141,
    "拉加摇滚": 355,
    "拉瓦尼": 79,
    "莫拉姆": 33,
    "拉吉尼": 179,
    "苏菲摇滚": 150,
    "马来西亚流行乐": 25,
    "马来西亚摇滚": 209,
    "马来西亚嘻哈": 231,
    "当杜特": 100,
    "印度流行": 412,
    "dan旦流行乐": 346,
    "泰国流行": 419,
    "泰式弦乐流行": 263,
    "陆通": 46
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
            name: '嘻哈',
            itemStyle: {
                color: 'rgba(158,104,78,1)',
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:382',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(158,104,78,1)'
                },
            }, {
                name: '歌曲数量:7825',
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
            name: '美声',
            itemStyle: {
                color: 'rgba(203,119,85,1)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:404',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,1)'
                }
            }, {
                name: '歌曲数量:1881',
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
            name: '热门',
            itemStyle: {
                color: 'rgba(203,119,85,0.9)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:117',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,0.9)'
                }
            }, {
                name: '歌曲数量:1364',
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
            name: '民族',
            itemStyle: {
                color: 'rgba(203,119,85,0.8)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:384',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,0.8)'
                }
            }, {
                name: '歌曲数量:1225',
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
            name: '说唱',
            itemStyle: {
                color: 'rgba(203,119,85,0.7)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:154',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(203,119,85,0.7)'
                }
            }, {
                name: '歌曲数量:1018',
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
            name: '流行',
            itemStyle: {
                color: 'rgba(194,161,130,1)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:43',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,1)'
                }
            }, {
                name: '歌曲数量:928',
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
            name: '电子',
            itemStyle: {
                color: 'rgba(194,161,130,1)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:47',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,1)'
                }
            }, {
                name: '歌曲数量:889',
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
            name: '新世纪',
            itemStyle: {
                color: 'rgba(194,161,130,0.9)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:31',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.9)'
                }
            }, {
                name: '歌曲数量:487',
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
            name: '日韩',
            itemStyle: {
                color: 'rgba(194,161,130,0.8)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:29',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.8)'
                }
            }, {
                name: '歌曲数量:482',
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
            name: '传统',
            itemStyle: {
                color: 'rgba(194,161,130,0.7)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:15',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.7)'
                }
            }, {
                name: '歌曲数量:475',
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
            name: '古典',
            itemStyle: {
                color: 'rgba(194,161,130,0.6)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:10',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.6)'
                }
            }, {
                name: '歌曲数量:441',
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
            name: 'ACG',
            itemStyle: {
                color: 'rgba(194,161,130,0.5)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:174',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(194,161,130,0.5)'
                }
            }, {
                name: '歌曲数量:426',
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
            name: '古风',
            itemStyle: {
                color: 'rgba(196,200,183,1)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:31',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,1)'
                }
            }, {
                name: '歌曲数量:318',
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
            name: '古风',
            itemStyle: {
                color: 'rgba(196,200,183,0.9)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:31',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.9)'
                }
            }, {
                name: '歌曲数量:318',
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
            name: '新潮',
            itemStyle: {
                color: 'rgba(196,200,183,0.8)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:7',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.8)'
                }
            }, {
                name: '歌曲数量:308',
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
                name: '歌手数量:16',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.7)'
                }
            }, {
                name: '歌曲数量:306',
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
            name: '欧美',
            itemStyle: {
                color: 'rgba(196,200,183,0.6)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:129',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.6)'
                }
            }, {
                name: '歌曲数量:305',
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
            name: '小众',
            itemStyle: {
                color: 'rgba(196,200,183,0.55)'
            },
            label: {
                rotate: 'radial',
                fontSize: 14,
            },
            nodeClick: "false",
            children: [{
                name: '歌手数量:129',
                value: 2,
                nodeClick: "false",
                itemStyle: {
                    color: 'rgba(196,200,183,0.55)'
                }
            }, {
                name: '歌曲数量:305',
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
                    name: '歌手数量:3',
                    value: 2,
                    nodeClick: "false",
                    itemStyle: {
                        color: 'rgba(196,200,183,0.5)'
                    }
                }, {
                    name: '歌曲数量:300',
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
                name: '乡村',
                itemStyle: {
                    color: 'rgba(182,182,184,1)'
                },
                label: {
                    rotate: 'radial',
                    fontSize: 14,
                },
                nodeClick: "false",
                children: [{
                    name: '歌手数量:2',
                    value: 2,
                    nodeClick: "false",
                    itemStyle: {
                        color: 'rgba(182,182,184,1)'
                    }
                }, {
                    name: '歌曲数量:263',
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
                name: '雷鬼',
                itemStyle: {
                    color: 'rgba(182,182,184,0.5)'
                },
                label: {
                    rotate: 'radial',
                    fontSize: 14,
                },
                nodeClick: "false",
                children: [{
                    name: '歌手数量:2',
                    value: 2,
                    nodeClick: "false",
                    itemStyle: {
                        color: 'rgba(182,182,184,0.5)'
                    }
                }, {
                    name: '歌曲数量:225',
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
    var plists = ['嘻哈', '美声', '热门', '民族', '说唱', '流行', '电子', '新世纪', '日韩', '传统',
        '古典', 'ACG', '古风', '新潮', '欧美', '小众', '乡村', '轻音乐', '金属', '纯音乐']
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
    str1 = "<p class = 'info'>曲库中共有" + lplants_txt[p_name][0] + "位歌手";
    str2 = "其中出现次数最多的是" + lplants_txt[p_name][1] + "，";
    str3 = "具体出现的次数为" + lplants_txt[p_name][2] + "次。<br/>";
    str4 = p_name + "中包含的歌手有：" + import_text(p_name);
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
        else {
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

function import_text(p_name) {
    lists = plants_lbar_text[p_name];
    text = ""
    len = lists.length < 10 ? lists.length : 10;
    for (i = 0; i < len; i++) {
        if (i != 0) {
            text += "、";
        }
        text += lists[i];
    }
    console.log("text:" + text);
    return text;
}