<template lang="pug">
	#app
		df-search(
			v-model="collegesFiltered"
			:colleges="colleges"
		)
		df-school-list(
			:colleges="!!collegesFiltered.length ? collegesFiltered : colleges"
		)
</template>

<script>
import collegesService from "./services/colleges";
import DfSearch from "./components/layout/search";
import DfSchoolList from "./components/school-list";

export default {
  name: "app",

  data() {
    return {
      searchQuery: "",
      colleges: [],
      collegesFiltered: []
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
  },
  methods: {
    getAllsColleges() {
      console.log(collegesService);
      console.log("aqui entra");
      collegesService.getAll().then(res => {
        console.log(res);
        this.colleges = res;
      });
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