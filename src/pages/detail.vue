<template lang="pug">
	main
		h1 este es el detalle
</template>

<script>
export default {
  name: "detail",

  data() {
    return {
      idCollege: null
    };
  },
  components: {},
  computed: {},
  created() {
    this.idCollege = this.$route.params.id;
  },
  methods: {}
};
</script>

<style lang="scss"></style>
