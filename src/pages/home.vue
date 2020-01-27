<template lang="pug">
	main
		df-search(
			v-model="collegesFiltered"
			:colleges="colleges"
		)
		df-school-list(
			:colleges="collegesFiltered.filter"
		)
</template>

<script>
import DfSearch from "@/components/layout/search";
import DfSchoolList from "@/components/school-list";

export default {
  name: "home",

  data() {
    return {
      searchQuery: "",
      collegesFiltered: [],
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
    favorites() {
      return this.$store.state.favorites;
    },
    colleges() {
      return this.$store.state.colleges;
    }
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss"></style>
