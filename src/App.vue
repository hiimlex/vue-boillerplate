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
	font-family: "Poppins", sans-serif;
	outline: 0;
	margin: 0;
	box-sizing: border-box;
}
</style>
