window.onload = function () {
    console.log("window onload");
    //下述代码在window.onload外的话，是怎样的情况？
    var div2 = document.getElementById("div2");
    div2.onclick = function () {
        console.log("div2 click");
    }
}

function div1click() {
    console.log("div1 click");
}

/*
//
window.onload = function () {
    console.log("window onload");
    var div2 = document.getElementById("div2");
    //思考：将下述7到11行代码写在window.onload回调函数外会怎样
    div2.onclick = function () {
        console.log("div2 click");
    }
    // div2.onmouseover = function () {
    //     console.log("div2 mouseover");
    // }
}
function div1click() {
    console.log("div1 click");
    //console.log("this:", this);
}


//思考下述输出顺序，理解事件流
window.onclick = function () {
    console.log("window onclick");
}
document.onclick = function () {
    console.log("document onclick");
}
//
window.onload = function () {
    console.log("window onload!");
    //修改onclick
    document.getElementById("div").onclick = function (e) {
        console.log("xx",e);
    };
    document.getElementById("inp").onclick = function (e) {
        console.log("yy",e);
    };

    //添加事件监听
    // var myFun = function (e) {
    //     console.log("myFun",e);
    // };
    // document.getElementById("div").addEventListener("click",myFun,false);
    // document.getElementById("inp").addEventListener("click",myFun,false);
    // //document.getElementById("div").removeEventListener("click",myFun);
}

//
window.onload = function (e) {
    // console.log("window onload");
    // console.log("e:", e);
    // console.log(e.target);
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // 测试1
        // console.log(e.clientX,e.clientY);
        // console.log(this, "-----", e.target.id);

        // 测试2
        console.log(e);
        console.log(e.__proto__);
        console.log(e.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__.__proto__);

        // 测试3
        // for(var k in e){
        //     console.log(k,e[k]);
        // }
        // for(var k in e.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__.__proto__){
        //     console.log(k);
        // }
    }
    div1.onclick = eventHandler;
    div2.onclick = eventHandler;

    //自定义事件监听、事件分发
    // document.addEventListener("xx",function(){console.log("11")});
    // document.dispatchEvent(new Event("xx"));
}






window.onload = function () {
    console.log("window onload!");
    //修改onclick
    document.getElementById("div").onclick = function (e) {
        console.log("xx",e);
    };
    document.getElementById("inp").onclick = function (e) {
        console.log("yy",e);
    };

    //添加事件监听
    // var myFun = function (e) {
    //     console.log("myFun",e);
    // };
    // document.getElementById("div").addEventListener("click",myFun,false);
    // document.getElementById("inp").addEventListener("click",myFun,false);
    // //document.getElementById("div").removeEventListener("click",myFun);

    //
    //addEventListener();//可以为元素分配多个处理函数（而非覆盖）

}

//测试2 DOM0级事件处理

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };//思考：是覆盖还是两个语句都会输出？
    div2.onclick = eventHandler;
    //div2.onclick = null;//取消事件响应
}



//测试3 DOM2级事件处理
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    // div1.addEventListener("click",eventHandler,false);//第3个参数可选
    div1.addEventListener("click",function(){
        console.log("xx");
    });//思考：是覆盖还是两个语句都会输出？

    div2.addEventListener("click",eventHandler);
    //div2.addEventListener("click",eventHandler,false);
    //div2.removeEventListener("click",eventHandler);//取消响应

    //自定义事件、事件分发、事件监听
    div2.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
    div2.dispatchEvent(new Event("MyEvent"));
}



//自定义事件（创建、分发、捕获的综合案例）
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // console.log(e.target);
        // console.log(this);
        var myEvent = new Event("MyEvent");
        // div2.dispatchEvent(myEvent);//若改我div1分发的话会怎样
        div1.dispatchEvent(myEvent);

    }
    div1.onclick = eventHandler;

    //下述代码部分，参见事件流部分
    div2.addEventListener("MyEvent",function (e) {
        console.log("div2 listener",e.type);
    },false);//改为true

    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式
}


//DOM0级事件响应 定义在哪里？
document.body.__proto__.hasOwnProperty("onclick");//false
document.body.__proto__.__proto__.hasOwnProperty("onclick");//true

//DOM2级事件响应  定义在哪里？
document.body.__proto__.hasOwnProperty("addEventListener");//false
"addEventListener" in document;//true
document.body.__proto__.__proto__.__proto__.__proto__.__proto__.hasOwnProperty("addEventListener");//true



window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click");
    },false);

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);//若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);//若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序

}



//测试3 DOM2级事件处理
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    // div1.addEventListener("click",eventHandler,false);//第3个参数可选
    div1.addEventListener("click",function(){
        console.log("xx");
    });//思考：是覆盖还是两个语句都会输出？

    div2.addEventListener("click",eventHandler);
    //div2.addEventListener("click",eventHandler,false);
    //div2.removeEventListener("click",eventHandler);//取消响应

    //自定义事件、事件分发、事件监听
    document.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
    document.dispatchEvent(new Event("MyEvent"));
}

//自定义事件（创建、分发、捕获的综合案例）
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // console.log(e.target);
        // console.log(this);
        var myEvent = new Event("MyEvent");
        // div2.dispatchEvent(myEvent);//若改我div1分发的话会怎样
        div1.dispatchEvent(myEvent);

    }
    div1.onclick = eventHandler;

    div2.addEventListener("MyEvent",function (e) {
        console.log("div2 listener",e.type);
    },false);//改为true

    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式
}


*/