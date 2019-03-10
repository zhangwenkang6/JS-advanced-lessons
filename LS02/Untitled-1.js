
var a = 123;
var b = new Number(a);

console.log(a == b);
console.log(a === b);//true or false 为什么

//临时包装对象
var str = "abcde";
console.log(str.length);//5 临时包装成了String对象
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值

var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]
var a;
console.log(a);//undefined
//注意：分清未定义与未声明的区别 undefined与 undeclare
//没有加var 直接使用a是否会报错？

function foo(x,y) {
    console.log(x,y);//1 undefined
}
foo(1);

function fee() {
    //没有返回值的情况
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined


//null 需要注意的一点
console.log(typeof null);//object

var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2));//如果是非数字，则先转换为字符串，然后在转成整型
console.log(parseFloat("23.456xy"));//同上，结果为23.456
//注意：parseInt和parseFloat都为全局方法，即window全局对象的方法
console.log(parseInt === window.parseInt);
console.log(parseFloat === window.parseFloat);
//思考：函数、对象属性、对象方法之间的关系
//思考：在node.js中全局对象是什么？


console.log(Math.ceil(a2));
console.log(Math.floor(a2));
console.log(Math.round(a2));
a3 = 5e2;//指数形式
console.log(a3);
console.log(typeof Math);//输出function 还是 object ？

//NaN
var x = Number("xis021");//试着转成Number类型
console.log(x);//NaN
isNaN(x);//true
typeof NaN;

console.log(Math.log(-1));//NaN
console.log(Math.acos(2));//NaN
console.log(NaN === NaN);//false


//Infinity与-Infinity
var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
isFinite(y2);//false，非有限数
isFinite(23);//true，有限数

//0与-0
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0

var num1 = 20.367;
num1=num1.toFixed(2); //保留特定位数的小数，超出进行四舍五入，返回值为字符串
console.log(num1);
var num2=20.564;
var numobject = new Number(num2.toFixed(2));
console.log(numobject);

var num3 = 123456.789;
num3=num3.toPrecision(1); //指数表示法，括号中表示保留的数字位数(四舍五入),不足补零
console.log(num3);