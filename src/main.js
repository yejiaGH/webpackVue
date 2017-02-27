import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './route.js';
const router = new VueRouter(routes);
const vm = new Vue({
	router,
	el: '#app',
	...App
	// render: (h)=>h(App)
});