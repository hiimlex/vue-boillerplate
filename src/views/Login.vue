<template>
	<div class="container">
		<v-card elevation="8" class="card">
			<div class="dot-1"></div>

			<div class="dot-2"></div>

			<div class="card-title">Faça seu login</div>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "login",

	data() {
		return {};
	},
};
</script>

<style lang="less">
.container {
	display: flex;

	height: 100vh;

	align-items: center;

	justify-content: center;

	width: 100%;

	background: #efefef;

	.card {
		width: 48vw;

		height: auto;

		padding: 24px;

		outline: 0;

		position: relative;

		.card-title {
			font-size: 24px;

			text-align: center;

			font-weight: 600;
		}

		.dot-1 {
			position: absolute;

			width: 120px;

			height: 120px;

			border-radius: 50%;
		}
	}
}
</style>
