
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));
console.log(n1.toString());
console.log(n1.toExponential(2));

console.log(NaN === NaN);
console.log(isNaN("12,3"));
console.log(Math.floor(3.8));
console.log(Math.floor(-3.8));
console.log(Math.ceil(3.2));
console.log(Math.ceil(-3.2));
console.log(Math.round(-3.2));
console.log(Math.round(-3.5));
console.log(Math.round(-3.8));

var str1="A".localeCompare("b"); 
console.log(str1);

var str2="abcdefghi";
console.log(str2.slice(0,-1));
console.log(str2.substr(0,3));
console.log(str2.substring(0,7)); // 超出 0-str.length 范围的，会被截断
var str3=str2.split(" ");
console.log(str3[0]);

var str4 = "   a bc  ";
console.log(str4.trim());
console.log(str2.concat(str4));
