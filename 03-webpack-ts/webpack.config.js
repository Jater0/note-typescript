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
        // 告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false
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