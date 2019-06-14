window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    document.addEventListener("myEvent",function(){console.log("xx")},false);
    div1.addEventListener("myEvent",function(){console.log("yy")},false);
    div2.addEventListener("myEvent",function(){console.log("zz")},false);
    
    // console.log("dispatchEvent" in div1);
    // console.log("dispatchEvent" in div2);

    var myEvent = new Event("myEvent");
    //console.log(myEvent.cancelBubble);

    //事件对象从顶层（不精确）节点流动到目标（精确）节点
    // div1.dispatchEvent(myEvent);
    div2.dispatchEvent(myEvent);//若3个都捕获(true) xx,yy,zz 若3个都是冒泡(false)则zz
}