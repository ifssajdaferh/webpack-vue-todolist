//main.js作用 作为程序入口文件
//main.js作用 1.创建 实例化vue的根实例
//main.js作用 2.挂载app组件



// 下载vue包并导入vue对象
import Vue from 'vue'

// 导入app.vue组件
import App from './App.vue'

// 创建实例并进行一些定义
new Vue({
    el:'#app',
    // 添加components选项
    components:{
    //  组件名＋组件
    App
    // es6语法：前后相同 可缩写
    },
    template:'<App/>'

})
