<template lang="pug">
	#app
		img(src="./assets/logo.png")
		h1 {{ msg }} aja
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Hola mayra ya funciono el eslint"
    };
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
