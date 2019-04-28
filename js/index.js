$(function () {
    //滑动主功能实现函数
    $("#fullpage").fullpage({
        navigation: true,
        navigationPosition: "right",
        scrollingSpeed: 1500,
        navigationTooltips: ["主页","自我介绍","能力值","我的项目","联系我"],
       

        //离开当前屏幕调用的函数
        onLeave(index, nextIndex, direction) {
            //开始滚！动背景 hhhh
            if (nextIndex == 1) {
                $(".bg").stop();
                $(".bg").animate({
                    "backgroundPositionX": "20%",
                    "backgroundPositionY": "20%"
                }, 1500);
                
            }
            if (nextIndex == 2) {
                $(".bg").stop();
                $(".bg").animate({
                    "backgroundPositionX": "40%",
                    "backgroundPositionY": "40%"
                }, 1500);
            }
            if (nextIndex == 3) {
                $(".bg").stop();
                $(".bg").animate({
                    "backgroundPositionX": "60%",
                    "backgroundPositionY": "50%"
                }, 1500);
            }
            if (nextIndex == 4) {
                $(".bg").stop();
                $(".bg").animate({
                    "backgroundPositionX": "50%",
                    "backgroundPositionY": "80%"
                }, 1500);
            }
            if (nextIndex == 5) {
                $(".bg").stop();
                $(".bg").animate({
                    "backgroundPositionX": "30%",
                    "backgroundPositionY": "100%"
                }, 1500);
            }
            //滚动背景功能结束
        }
        //导航栏实现

    });
    //导航滚动
    $("#nav-home").click(function () {
        $.fn.fullpage.moveTo(1);
    })
    $("#nav-introduction").click(function () {
        $.fn.fullpage.moveTo(2);
    })
    $("#nav-ability").click(function () {
        $.fn.fullpage.moveTo(3);
    })
    $("#nav-obj").click(function () {
        $.fn.fullpage.moveTo(4);
    })
    $("#nav-call").click(function () {
        $.fn.fullpage.moveTo(5);
    })
    //导航滚动结束
    // nav切换
    
   
    // nav切换结束
    //echarts图表绘制开始
    var myPower = echarts.init(document.getElementById("power"));
    var dataStyle = { 
        normal: {
            label: {show:false},
            labelLine: {show:false},
            shadowBlur: 40,
            shadowColor: 'rgba(40, 40, 40, 0.5)',
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(0,0,0,0)',
            label: {show:false},
            labelLine: {show:false}
        },
        emphasis : {
            color: 'rgba(0,0,0,0)'
        }
    };
    option = {
         color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
        tooltip : {
            show: true,
            formatter: "{a} <br/> ({d}%)"
        },
        legend: {
            itemGap:12,
            right: '87%',
            top:'40%',
            data:['JavaScript','HTML5','CSS3','node.js','Vue']
        },
        series : [
            {
                name:'JavaScript',
                type:'pie',
                clockWise:true,
                radius : [180,205],
                itemStyle : dataStyle,
                hoverAnimation: true,
           
                data:[
                    {
                        value:300,
                        name:'JavaScript'
                        
                    },
                    {
                        value:100,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
             
                ]
            }, 
             {
                name:'HTML5',
                type:'pie',
                clockWise:true,
                radius : [150, 175],
                itemStyle : dataStyle,
                hoverAnimation: true,
               
                data:[
                    {
                        value:562, 
                        name:'HTML5'
                    },
                    {
                        value:100,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'node.js',
                type:'pie',
                clockWise:true,
                hoverAnimation: true,
                radius : [120, 145],
                itemStyle : dataStyle,
               
                data:[
                    {
                        value:41, 
                        name:'node.js'
                    },
                    {
                        value:100,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'CSS3',
                type:'pie',
                clockWise:true,
                hoverAnimation: true,
                radius : [90, 115],
                itemStyle : dataStyle,
               
                data:[
                    {
                        value:590, 
                        name:'CSS3'
                    },
                    {
                        value:100,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'Vue',
                type:'pie',
                clockWise:true,
                hoverAnimation: true,
                radius : [60, 85],
                itemStyle : dataStyle,
               
                data:[
                    {
                        value:45, 
                        name:'Vue'
                    },
                    {
                        value:100,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
             
    
        ]
    };
    myPower.setOption(option);
    //echarts图表绘制结束

});