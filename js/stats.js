$(function () {

    var heroLine = echarts.init(document.getElementById('hero-line'))
    var heroLineOption = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar', 'stack', 'tiled']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    heroLine.setOption(heroLineOption)

    var heroStacked = echarts.init(document.getElementById('hero-stacked'));
    var heroStackedOption = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
            show: false
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    heroStacked.setOption(heroStackedOption)

    var heroBar = echarts.init(document.getElementById('hero-bar'))
    var heroBarOption = {
        title: {
            text: '某地区蒸发量和降水量',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['蒸发量', '降水量']
        },
        toolbox: {
            show: false
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '蒸发量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        },
                        {
                            type: 'min',
                            name: '最小值'
                        }
                    ]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值'
                    }]
                }
            },
            {
                name: '降水量',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                    data: [{
                            name: '年最高',
                            value: 182.2,
                            xAxis: 7,
                            yAxis: 183,
                            symbolSize: 18
                        },
                        {
                            name: '年最低',
                            value: 2.3,
                            xAxis: 11,
                            yAxis: 3
                        }
                    ]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值'
                    }]
                }
            }
        ]
    };

    heroBar.setOption(heroBarOption)

    var heroPie = echarts.init(document.getElementById('hero-pie'))
    var heroPieOption = {
        title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                    value: 335,
                    name: '直接访问'
                },
                {
                    value: 310,
                    name: '邮件营销'
                },
                {
                    value: 234,
                    name: '联盟广告'
                },
                {
                    value: 135,
                    name: '视频广告'
                },
                {
                    value: 1548,
                    name: '搜索引擎'
                }
            ]
        }]
    };
    heroPie.setOption(heroPieOption)
    var heroMap = echarts.init(document.getElementById('hero-map'))
    var heroMapOption = {
        title: {
            text: 'iphone销量',
            subtext: '纯属虚构',
            x: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['iphone3', 'iphone4', 'iphone5']
        },
        dataRange: {
            min: 0,
            max: 2500,
            x: 'left',
            y: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            x: 'right',
            y: 'center',
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series: [{
                name: 'iphone3',
                type: 'map',
                mapType: 'china',
                roam: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data: [{
                        name: '北京',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '天津',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '上海',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '重庆',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '河北',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '河南',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '云南',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '辽宁',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '黑龙江',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '湖南',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '安徽',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '山东',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '新疆',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '江苏',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '浙江',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '江西',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '湖北',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '广西',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '甘肃',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '山西',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '内蒙古',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '陕西',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '吉林',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '福建',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '贵州',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '广东',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '青海',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '西藏',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '四川',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '宁夏',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '海南',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '台湾',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '香港',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '澳门',
                        value: Math.round(Math.random() * 1000)
                    }
                ]
            },
            {
                name: 'iphone4',
                type: 'map',
                mapType: 'china',
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data: [{
                        name: '北京',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '天津',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '上海',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '重庆',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '河北',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '安徽',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '新疆',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '浙江',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '江西',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '山西',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '内蒙古',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '吉林',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '福建',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '广东',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '西藏',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '四川',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '宁夏',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '香港',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '澳门',
                        value: Math.round(Math.random() * 1000)
                    }
                ]
            },
            {
                name: 'iphone5',
                type: 'map',
                mapType: 'china',
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data: [{
                        name: '北京',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '天津',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '上海',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '广东',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '台湾',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '香港',
                        value: Math.round(Math.random() * 1000)
                    },
                    {
                        name: '澳门',
                        value: Math.round(Math.random() * 1000)
                    }
                ]
            }
        ]
    };
    heroMap.setOption(heroMapOption)
})
