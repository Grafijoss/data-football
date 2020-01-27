<template lang="pug">
	.wrrp-list(v-if="!!colleges.length")
		df-school-listItem(
			v-for="(c, index) in colleges"
			:college="c"
			:key="c.id"
		)
	h2.title.is-5.title-noresult(v-else) No results
</template>

<script>
import DfSchoolListItem from "./school-list-item";

export default {
  name: "school-list",
  props: ["colleges"],
  data() {
    return {
      collegesPrueba: []
    };
  },
  components: {
    DfSchoolListItem
  },
  created() {
    this.collegesPrueba.push(this.colleges[0]);
  },
  computed: {},

  methods: {
    search() {}
  }
};
</script>

<style lang="scss">
.wrrp-list {
  .section {
    padding: 15px 1.5rem 2px;
  }
}
h2.title-noresult {
  padding-top: 30px;
  text-align: center;
}
</style>