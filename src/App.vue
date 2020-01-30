<template lang="pug">
	#app
		router-view
		template(v-if="showModal")
			new-modal(
				:typeModal="typeModal"
				:college="infoModalSchool"
			)
		df-spinner(
			v-if="spinner"
		)
</template>

<script>
import DfSpinner from "@/components/layout/spinner";
export default {
  name: "app",

  data() {
    return {
      spinner: false,
      showModal: false,
      infoModalSchool: null,
      typeModal: "add"
    };
  },
  components: { DfSpinner },
  computed: {
    collegesApp() {
      return this.$store.state.colleges;
    }
  },
  created() {
    this.spinner = true;
    this.$store.dispatch("setCollegesAsync").then(() => {
      this.spinner = false;
    });
    this.$store.dispatch("setFavoritesAsync");
    this.$bus.$on("open-modal-favorite", school => {
      this.showModal = true;
      this.typeModal = "add";
      this.infoModalSchool = school;
    });
    this.$bus.$on("open-modal-delete", school => {
      this.showModal = true;
      this.typeModal = "delete";
      this.infoModalSchool = school;
    });
    this.$bus.$on("close-modal-favorite", () => {
      this.showModal = false;
      this.infoModalSchool = null;
    });
  },
  methods: {
    getAllsColleges() {
      this.$store.dispatch("setCollegesAsync", []);
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
@import "./scss/dficonsset.scss";
#app {
  padding: 10px;
}
.results {
  margin-top: 50px;
}
</style>
