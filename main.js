import Vue from 'vue'
import App from './App'
// 按需导入 $http 对象
import { $http } from '@escook/request-miniprogram'

uni.$http = $http
//请求根路径
$http.baseUrl = 'https://www.uinav.com'

$http.beforeRequest = function (options) {
  uni.showLoading({
    title:"数据加载中"
  })
}
$http.beforeRequest = function (options) {
  uni.hideLoading()
}

// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
