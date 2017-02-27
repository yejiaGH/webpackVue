<template>
	<div>
		<router-link to="/home">首页</router-link>
		<router-link to="/list">列表</router-link>
		<transition enter-active-class="animated fadeInUp" leave-active-class="out">
			<router-view></router-view>
		</transition>			
	</div>
</template>
<style>
	.out {
		display: none;
	}
</style>