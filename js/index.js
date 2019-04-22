$(function () {
    //滑动主功能实现函数
    $("#fullpage").fullpage({
        navigation: false,
        navigationPosition: "left",
        scrollingSpeed: 1200,

        //离开当前屏幕调用的函数
        onLeave(index, nextIndex, direction) {
            //开始滚！动背景 hhhh
            if (nextIndex == 1) {
                $(".bg").animate({"backgroundPositionX": "20%", "backgroundPositionY": "20%"}, 1500);
            }
            if (nextIndex == 2) {
                $(".bg").animate({"backgroundPositionX": "40%", "backgroundPositionY": "40%"}, 1500);
            }
            if (nextIndex == 3) {
                $(".bg").animate({"backgroundPositionX": "60%", "backgroundPositionY": "50%"}, 1500);
            }
            if (nextIndex == 4) {
                $(".bg").animate({"backgroundPositionX": "50%", "backgroundPositionY": "80%"}, 1500);
            }
            if (nextIndex == 5) {
                $(".bg").animate({"backgroundPositionX": "30%", "backgroundPositionY": "100%"}, 1500);
            }
            //滚动背景功能结束
        }
        //导航栏实现

    });

    $(".nav-home").click(function () {
        $.fn.fullpage.moveTo(1);
    })
    $(".nav-introduction").click(function () {
        $.fn.fullpage.moveTo(2);
    })
    $(".nav-ability").click(function () {
        $.fn.fullpage.moveTo(3);
    })
    $(".nav-obj").click(function () {
        $.fn.fullpage.moveTo(4);
    })
    $(".nav-call").click(function () {
        $.fn.fullpage.moveTo(5);
    })


});