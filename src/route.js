import Route1 from './components/Route1.vue';
import Route2 from './components/Route2.vue';

export default {
	routes: [
		{path: '/home', component: Route1},
		{path: '/list', component: Route2}
	]
}