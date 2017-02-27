import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import yjButton from './components/Button';
Vue.use(yjButton);
import routes from './route.js';
import 'animate.css';
// import VueResource from 'vue-resource';
// Vue.use(VueResource);
import axios from 'axios';
// Vue.use(axios); // 错误用法
Vue.prototype.$http = axios;
const router = new VueRouter(routes);
const vm = new Vue({
	router,
	el: '#app',
	...App
	// render: (h)=>h(App)
});