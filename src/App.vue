<template>
	<v-app>
		<router-view></router-view>
	</v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "App",

	data: () => ({
		//
	}),
});
</script>

<style lang="less">
body {
	box-sizing: border-box;
	outline: 0;
	margin: 0;
	font-family: "Poppins", sans-serif;
	background: #dad7d7;
}
</style>
