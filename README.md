# Typescript Basic Note

## 类型声明

##### | 连接符

``` typescript
// 使用 | 来连接多个类型(联合类型)
let a: string | boolean;
a = "Jater";
a = "Frankie";
a = true;
```



##### & 连接符

``` ts
// & 表示同时
let l: { name: string } & { age: number }
l = {
    name: "Jater",
    age: 21
}
```



##### any

``` ts
// any: 关闭TS的类型检测
let b: any;
b = "Jater";
b = 10;
b = true;
```



##### unknown

``` ts
// unknown: 未知类型
let c: unknown;
c = 10;
c = "Jater";
c = true

// 因为b的类型是any, 它可以赋值给任意变量
a = b

// unknown: 类型安全的any
// unknown不能直接赋值给其他变量
// a = c
if (typeof c === "boolean") {
    a = c
}
```



##### 类型断言

``` ts
// 类型断言: 用来告诉解析器 变量的实际类型
a = c as boolean;
a = <boolean>c;
```



##### never

``` ts
// never: 永远不会返回结果
function func01(): never {
    throw new Error("Fuck U");
}
```



##### object

``` ts
// object 表示一个js对象
// {} 用来指定对象中可以包含那些属性
let d: {
    name: string,
    age: number
};
d = { name: "Jater", age: 10 }
// ? 可选属性
let e: {
    name: string,
    age?: number
};
e = { name: "Jater" }
```



##### [prop:string]:any

``` ts
// [propName: string]: any 表示任意类型的属性
let f: {
    name: string,
    [propName: string]: any
}
f = { name: "Jater", c: "male" }
```



##### array

``` ts
/**
 * 数组的类型声明
 *      1. 类型[]
 *      2. Array<类型>
 */
// array
// string[] 字符串数组
let h: string[];
h = ['1', '2', '3'];
let i: Array<number>;
i = [1, 2, 3];
```



##### 元组

``` ts
// 元组: 固定长度的数组
let j: [string, string]; // length = 2
j = ["Jater", "Frankie"];
```



##### enum

``` ts
enum gender {
    male = 1,
    female = 0
}
let k: { name: string, gender: gender }
k = {
    name: "Jater",
    gender: gender.male
}
```



##### 自定义类型

``` ts
type myType = 1 | 2 | 3 | 4 | 5;
let m: myType;
```



##### 设置函数的类型声明

``` ts
// 语法: (形参: 类型, 形参: 类型 ...) => 返回值类型
let g: (a: number, b: number) => number
g = function func02(num1, num2): number {
    return num1 + num2;
}
```

-----



## 编译选项

#### 监听TS文件编译

1. **监听单个文件**

> **`tsc file.ts -w`**

2. **监听多个文件**

> 1. **新建`tsconfig.json`文件**
> 2. **`tsc -w`**



#### `tsconfig.json`基本配置

``` json
{
    "include": [
        "./src/**/*"
    ],
    // "exclude": [],
    // "extends": "",
    "compilerOptions": {
        "target": "ES6",
        "module": "ES6",
        // "lib": [],
        "outDir": "./dist",
        // "outFile": "./dist/app.js",
        "allowJs": true,
        "checkJs": true,
        "removeComments": false,
        "noEmit": false,
        "noEmitOnError": true,
        "alwaysStrict": true,
        "noImplicitAny": true,
        "noImplicitThis": true,
        "strictNullChecks": false,
        "strict": true
    }
}
```

##### include

> **指定需要编译的文件**
>
> **: 任意文件夹
>
> *: 任意文件
>
> ``` json
> "include": [
>     "./src/**/*"
> ],
> ```

-----

##### exclude

>**指定不包含的文件**
>
>**"exclude": []**

-----

##### extends

> **继承某个配置文件**

-----

##### compilerOptions

> **编译器选项**

###### target

> **编译版本 默认ES3**
>
> **'`ES3`', '`ES5`', '`ES6`'/'`ES2015`', '`ES2016`', '`ES2017`', '`ES2018`', '`ES2019`', '`ES2020`', '`ESNext`'**

###### module

>**模块规范**
>
>**'`None`', '`CommonJS`', '`AMD`', '`System`', '`UMD`', '`ES6`', '`ES2015`', '`ES2020'` or '`ESNext`'**

###### lib

> **使用的库**
>
> **'`ES5`', '`ES6`', '`ES2015`', '`ES7`', '`ES2016`', '`ES2017`', '`ES2018`', '`ESNext`', '`DOM`', '`DOM.Iterable`', '`WebWorker`', '`ScriptHost`', '`ES2015.Core`', '`ES2015.Collection`', '`ES2015.Generator`', '`ES2015.Iterable`', '`ES2015.Promise`', '`ES2015.Proxy'`, '`ES2015.Reflect`', '`ES2015.Symbol`', '`ES2015.Symbol.WellKnown`', '`ES2016.Array.Include`', '`ES2017.object`', '`ES2017.Intl`', '`ES2017.SharedMemory`', '`ES2017.String`', '`ES2017.TypedArrays`', '`ES2018.Intl`', '`ES2018.Promise`', '`ES2018.RegExp`', '`ESNext.AsyncIterable`', '`ESNext.Array`', '`ESNext.Intl`', '`ESNext.Symbol`'**

###### outDir

> **js输出的文件夹**

###### outFile

> **将ts合并成一个文件输出**

###### allowJs

> **是否将js文件编译, 默认false**

###### checkJs

> **是否检查js文件的规范**

###### removeComments

> **是否去除注释, 默认false**

###### noEmit

> **是否生成编译后的文件, 默认false**

###### noEmitOnError

> **当error时不生成编译文件, 默认false**

###### alwaysStrict

> **用来设置编译之后的文件是否开启strict(严格)模式, 默认false**
>
> **当引用模块, 自动开启strict模式**

###### noImplicitAny

> **不允许使用Any类型**

###### noImplicitThis

> **不允许使用不明确类型的this**

###### strict

> **所有严格检查的总开关**

###### strictNullChecks

> **严格检查 空值**

-----



## Webpack with Ts

#### Webpack-TS配置

> 1. **初始化项目, 生成`package.json`: `npm init -y`**
>
> 2. **依赖: `npm install -D webpack webpack-cli typescript ts-loader`**
>
> 3. **创建`webpack.config.js`**
> 4. **创建`tsconfig.json`**
> 5. **`npm install -D html-webpack-plugin` 帮助我们自动生成HTML文件**
> 6. **`npm install -D webpack-dev-server`  webpack developer server**
> 7. **`npm install -D @babel/core @babel/preset-env babel-loader core-js` JS兼容浏览器**
> 8. **`npm install -D less less-loader css-loader style-loader` less支持**
> 9. **`npm i -D postcss postcss-loader postcss-preset-env` css兼容浏览器**

##### `webpack.config.js`

``` js
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack中的配置信息都应该写到module.exports
module.exports = {
    mode: "production",
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件的输出路径
    output: {
        // 指定打包文件的输出路径
        path: path.resolve(__dirname, 'dist'),
        // 包含后文件的名
        filename: "bundle.js",
        
        environment: {
            // 告诉webpack不使用箭头函数
            arrowFunction: false,
            // 不使用const
            const: false
        }
    },

    // webpack打包时要使用的文件
    module: {
        // 指定加载规则
        rules: [
            {
                // test: 指定 规则生效的文件
                test: /\.ts$/,
                // 使用ts-loader处理以ts结尾的文件, 从后向前执行
                use: [
                    // 配置loader
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        // 指定core-js版本
                                        "corejs": "3",
                                        // 使用corejs的方式
                                        // usage: 按需引入
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/
            }, 
            // less 文件处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    // npm i -D postcss postcss-loader postcss-preset-env
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    // 配置webpack的插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // custom title
            // title: "Jater TS",
            // custom html template
            template: "./src/index.html"
        }),
    ],

    // 用来设置引用模块
    resolve: {
        extensions: [".ts", ".js"]
    }
}
```

##### `package.json`

``` json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "serve": "webpack serve --open chrome.exe"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.13.10",
    "@babel/preset-env": "^7.13.10",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^3.0.0",
    "core-js": "^3.9.1",
    "css-loader": "^5.1.3",
    "html-webpack-plugin": "^5.3.1",
    "less": "^4.1.1",
    "less-loader": "^8.0.0",
    "postcss": "^8.2.8",
    "postcss-loader": "^5.2.0",
    "postcss-preset-env": "^6.7.0",
    "style-loader": "^2.0.0",
    "ts-loader": "^8.0.18",
    "typescript": "^4.2.3",
    "webpack": "^5.27.0",
    "webpack-cli": "^4.5.0",
    "webpack-dev-server": "^3.11.2"
  }
}
```

-----



## O O P

##### 创建一个类

``` ts
class Person {
    name: string = "Jater";
    // readonly: 只读
    readonly age: number = 21;
    static gender: string = "male";

    hello() {
        console.log("Hello");
    }

    static smile() {
        console.log("Smile");
    }
}
```



##### constructor构造器

``` ts
class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    say() {
        console.log(`${this.name} is ${this.age}`);
    }
}

const dog = new Animal("Dog", 10)
dog.say()
const duck = new Animal("Duck", 1)
duck.say()
const brid = new Animal("Brid", 3)
brid.say()
const cat = new Animal("Cat", 15)
cat.say()
```



##### extends继承

``` ts
(function () {
    class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.age = age;
            this.name = name;
        }
        say() {
            console.log("Animal Say...");
        }
    }
    class Dog extends Animal {
        say() {
            console.log("旺旺旺");
        }
        run() {
            console.log("Dog is running");
        }
    }
    class Cat extends Animal {

    }
    const dog = new Dog("Black", 21);
    const cat = new Cat("AA", 11);
    dog.say()
    dog.run()
    cat.say()
})();
```



##### super

``` ts
(() => {
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        say() {
            console.log("Animal Say...");
        }
    }

    class Dog extends Animal {
        age: number;

        constructor(name: string, age: number) {
            super(name);
            this.age = age;
        }

        say() {
            super.say()
            console.log("Hello");
        }
    }
    const dog = new Dog("Frankie", 23);
    dog.say()
})();
```



##### abstract

``` ts
(() => {
    abstract class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        abstract say(): void;
    }

    class Dog extends Animal {
        say() {
            console.log("Hello");
        }
    }

    const dog = new Dog("Frankie");
    dog.say()
})();
```



##### interface

``` ts
(() => {
    interface Animal {
        name: string;
        age: number;
    }
    interface Animal {
        gender: string;
        say(): string;
    }
    class Dog implements Animal {
        name: string;
        age: number;
        gender: string;
        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        say(): string {
            return `${this.name}: ${this.age} & ${this.gender}`
        }
    }
    const dog = new Dog("Frankie", 23, "male");
    console.log(dog);
})();
```



##### 属性封装

``` ts
(() => {
    class Animal {
        private _name: string;
        private _age: number;
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        get name(): string {
            return this._name;
        }

        set name(name: string) {
            this._name = name
        }

        get age(): number {
            return this._age
        }

        set age(age: number) {
            this._age = age;
        }

        say() {
            console.log("Animal Say...");
        }
    }
    const person = new Animal("Jater", 21);
    console.log(person);
})();
```



##### 泛型

``` ts
function fn<T>(a: T): T {
    return a;
}

fn("Jater");
fn<string>("Jater");

function fun2<T, K>(a: T, b: K): T {
    return a;
}

fun2<string, number>("Jater", 123)

interface Inter {
    length: number;
}

function fun3<T extends Inter>(a: T): number {
    return a.length;
}

fun3("123");

class MyClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass<string>("Jater")
```

-----



## Demo

### 贪吃蛇

#### `index.html`

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>贪吃蛇</title>
</head>
<body>
    <!-- 主容器 -->
    <div id="main">
        <!-- 屏幕 -->
        <div id="stage">
            <!-- Snake -->
            <div id="snake">
                <div></div>
            </div>
            <div id="food">
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
        <!-- 记分牌 -->
        <div id="score-panel">
            <div>
                Score: <span id="score">0</span>
            </div>
            <div>
                level: <span id="level">1</span>
            </div>
        </div>
    </div>
</body>
</html>
```



#### `style.less`

``` less
// 变量
@bg-color: #B7D4A8;

* {
    margin: 0;
    padding: 0;
    // 改变盒子模型的计算方式
    box-sizing: border-box;
}

body {
    font: bold 20px "Courier";
}

// 设置主窗口的样式
#main {
    width: 360px;
    height: 420px;
    background-color: @bg-color;
    margin: 100px auto; // 居中
    border: 10px solid black;
    border-radius: 40px;
    // 弹性盒模型
    display: flex;
    // 主轴的方向
    flex-flow: column;
    // 侧轴的对齐方式
    align-items: center;
    // 主轴的对齐方式
    justify-content: space-around;
    #stage {
        width: 304px;
        height: 304px;
        border: 2px solid black;
        // 开启相对定位
        position: relative;
        #snake {
            &>div {
                width: 10px;
                height: 10px;
                background-color: black;
                border: 1px solid @bg-color;
                // 开启绝对定位
                position: absolute;
            }
        }
        #food {
            width: 10px;
            height: 10px;
            position: absolute;
            background-color: @bg-color;
            display: flex;
            left: 40px;
            top: 100px;
            // 设置横轴为主轴, wrap表示自动换行
            flex-flow: row wrap;
            // 是遏制主轴和侧轴的空白空间分配到元素之间
            justify-content: space-between;
            align-content: space-between;
            &>div {
                width: 4px;
                height: 4px;
                background-color: black;
                transform: rotate(45deg);
            }
        }
    }
    #score-panel {
        width: 300px;
        display: flex;
        // 主轴的对齐方式
        justify-content: space-between;

    }
}
```



#### `index.ts`

``` ts
import "./style/index.less"
import GameControl from "./modules/GameControl"
new GameControl()
```



#### `Food.ts`

``` ts
class Food {
    element: HTMLElement;
    constructor() {
        // 获取html's food
        this.element = document.getElementById("food")!;
    }

    // 获取Food X轴坐标
    get X() {
        return this.element.offsetLeft;
    }

    // 获取Food Y轴坐标
    get Y() {
        return this.element.offsetTop;
    }

    // 修改Food坐标
    change() {
        // Random
        // top, left: [0, 290] & %10=0
        var left = Math.round(Math.random() * 29) * 10
        var top = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}

export default Food;
```



#### `ScorePanel.ts`

``` ts
class ScorePanel {
    score: number = 0;
    level: number = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分
    addScore() {
        this.scoreEle.innerHTML = ++this.score + "";
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 升级
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + "";
        }
    }
}

export default ScorePanel;
```



#### `Snake.ts`

``` ts
class Snake {
    head: HTMLElement;
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector("#snake > div")!
        this.bodies = this.element.getElementsByTagName("div")!
    }

    // 获取蛇头X坐标
    get X(): number {
        return this.head.offsetLeft;
    }

    // 获取蛇头Y坐标
    get Y(): number {
        return this.head.offsetTop;
    }

    // 设置蛇头X坐标
    set X(value: number) {
        if (this.X === value) return;
        if (value < 0 || value > 290) {
            throw new Error("Snake is Die");
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadTouchBody();
    }

    set Y(value: number) {
        if (this.Y === value) return;
        if (value < 0 || value > 290) {
            throw new Error("Snake is Die");
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadTouchBody();
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = x + "px";
            (this.bodies[i] as HTMLElement).style.top = y + "px";
        }
    }

    checkHeadTouchBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let body = this.bodies[i] as HTMLElement;
            if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
                throw new Error("Snake is Die");
            }
        }
    }
}

export default Snake;
```



#### `GameControl.ts`

``` ts
import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'


class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 属性存储
    direction: string = "";
    isLive: boolean = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init()
    }

    init() {
        // 绑定键盘按下事件
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    run() {
        let x = this.snake.X;
        let y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                x -= 10;
                break;
            case "ArrowRight":
            case "Right":
                x += 10;
                break;
        }

        this.checkEat(x, y);

        try {
            this.snake.X = x;
            this.snake.Y = y;
        } catch (e) {
            alert(`${e.message}; Game Over`);
            this.isLive = false;
        }
        this.isLive && setTimeout(
            this.run.bind(this),
            300 - (this.scorePanel.level - 1) * 30
        )
    }

    checkEat(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl
```

