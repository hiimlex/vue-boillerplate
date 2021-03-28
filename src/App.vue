<template>
	<div id="app">
		<div id="nav"><router-link to="/">Home</router-link></div>
		<router-view />
	</div>
</template>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	outline: 0;
	box-sizing: border-box;
	margin: 0;
}
</style>
