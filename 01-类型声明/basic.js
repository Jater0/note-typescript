// 使用 | 来连接多个类型(联合类型)
var a;
a = "Jater";
a = "Frankie";
a = true;
// any: 关闭TS的类型检测
var b;
b = "Jater";
b = 10;
b = true;
// unknown: 未知类型
var c;
c = 10;
c = "Jater";
c = true;
// 因为b的类型是any, 它可以赋值给任意变量
a = b;
// unknown: 类型安全的any
// unknown不能直接赋值给其他变量
// a = c
if (typeof c === "boolean") {
    a = c;
}
// 类型断言: 用来告诉解析器 变量的实际类型
a = c;
a = c;
// never: 永远不会返回结果
function func01() {
    throw new Error("Fuck U");
}
// object 表示一个js对象
// {} 用来指定对象中可以包含那些属性
var d;
d = { name: "Jater", age: 10 };
// ? 可选属性
var e;
e = { name: "Jater" };
// [propName: string]: any 表示任意类型的属性
var f;
f = { name: "Jater", c: "male" };
// 设置函数的类型声明
// 语法: (形参: 类型, 形参: 类型 ...) => 返回值类型
var g;
g = function func02(num1, num2) {
    return num1 + num2;
};
/**
 * 数组的类型声明
 *      1. 类型[]
 *      2. Array<类型>
 */
// array
// string[] 字符串数组
var h;
h = ['1', '2', '3'];
var i;
i = [1, 2, 3];
// 元组: 固定长度的数组
var j; // length = 2
j = ["Jater", "Frankie"];
// enum
var gender;
(function (gender) {
    gender[gender["male"] = 1] = "male";
    gender[gender["female"] = 0] = "female";
})(gender || (gender = {}));
var k;
k = {
    name: "Jater",
    gender: gender.male
};
// & 表示同时
var l;
l = {
    name: "Jater",
    age: 21
};
var m;
