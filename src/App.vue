<template lang="pug">
	#app
		df-search(
			v-model="collegesFiltered"
			:colleges="colleges"
		)
		template(v-if="!!collegesFiltered.searchQuery.length")
			df-school-list(
				:colleges="collegesFiltered.filter"
			)
		template(v-else)
			df-school-list(
				:colleges="colleges"
			)
		template(v-if="showModal")
			new-modal(
				:typeModal="typeModal"
				:college="infoModalSchool"
			)
</template>

<script>
import store from "store";
import collegesService from "./services/colleges";
import DfSearch from "./components/layout/search";
import DfSchoolList from "./components/school-list";

export default {
  name: "app",

  data() {
    return {
      searchQuery: "",
      colleges: [],
      collegesFiltered: { searchQuery: "", collegesFiltered: [] },
      showModal: false,
      infoModalSchool: null,
      typeModal: "add"
    };
  },
  components: {
    DfSearch,
    DfSchoolList
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.colleges.length}`;
    }
  },
  created() {
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
        this.colleges = store.get("colleges");
      } else {
        collegesService.getAll().then(res => {
          // this.colleges = res;
          store.set("colleges", res);
          this.colleges = res;
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