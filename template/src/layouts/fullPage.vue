<template lang="pug">
.fullPage
  router-view.inview

</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.fullPage {
	width: 100%;
	height: 100vh;
	position: relative;
	background: url("http://unsplash.it/1200x800/?random") center center no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	&:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(to bottom right, #002f4b, #dc4225);
		opacity: 0.6;
	}
}
</style>
