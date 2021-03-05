// 下面的output的path需要绝对路径，所以引入node的path模块 
const path = require('path')

// 导入vue-loader的配合使用的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 设定打包模式 development：开发模式 出来的文件可读，production：生产 不可读但文件更小
    mode:'development',
    // 定义入口文件
    entry: './src/main.js',
    
    // 定义出口文件
    output: {
        // 定义打包的文件名
        filename:'bundle.js',
        // __dirname文当前路径，也就是说 输出位置在当前路径的dist文件夹（没有就新建）
        path:path.resolve(__dirname,'dist')
    },

    // 打包规则
    module:{
        // 具体定义 对象数组 一个对象一组规则
        rules:[{
        // 正则表达式语法，寻找对应文件
        test:/\.vue$/,
        // 配置对应loader
        loader:'vue-loader'
        }]
    },

    // 插件的配置
    plugins:[
        new VueLoaderPlugin()
    ]
    
}