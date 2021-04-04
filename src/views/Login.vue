<template>
	<v-container class="container"
		><v-card class="mx-auto card" min-width="600">
			<div class="title">
				<span class="logo">FarmWeather</span>
			</div>
		</v-card></v-container
	>
</template>

<script>
export default {
	name: "login",
	data() {
		return {
			type: true,
			show: false,
		};
	},
};
</script>

<style lang="less">
.container {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.card {
		padding: 12px;

		.title {
			padding: 12px 0 0 8px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;

			.logo {
				text-align: center;
				font-weight: bold;
			}
		}
	}
}
</style>
