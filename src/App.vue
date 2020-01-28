<template lang="pug">
	#app
		router-view
		template(v-if="showModal")
			new-modal(
				:typeModal="typeModal"
				:college="infoModalSchool"
			)
</template>

<script>
import store from "store";
import collegesService from "./services/colleges";
export default {
  name: "app",

  data() {
    return {
      showModal: false,
      infoModalSchool: null,
      typeModal: "add"
    };
  },
  components: {},
  computed: {
    collegesApp() {
      return this.$store.state.colleges;
    }
  },
  created() {
    const favorites = store.get("favorites");
    const favoritesExist = favorites && !!favorites.length;
    if (favoritesExist) this.$store.commit("setfavorites", { favorites });
    this.getAllsColleges();
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
      const colleges = store.get("colleges") && !!store.get("colleges").length;
      if (colleges) {
        this.$store.commit("setColleges", { colleges: store.get("colleges") });
      } else {
        collegesService.getAll().then(res => {
          store.set("colleges", res);
          this.$store.commit("setColleges", { colleges: res });
        });
      }
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
