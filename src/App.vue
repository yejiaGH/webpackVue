<template>
	<div>
		<div>App Vue</div>
		<Home></Home>
		<Navs></Navs>
		<yj-button>useButton</yj-button>
	</div>	
</template>
<style>
	div {
		background: red;
	}
</style>
<script>
	import Home from './components/Home.vue';
	import Navs from './components/Navs.vue';
	export default {
		components: {
			Home,
			Navs
		},
		mounted () {
			this.$http.get('/hello');
		}
	}
</script>