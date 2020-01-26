<template lang="pug">
	.wrrp-list(v-if="!!colleges.length")
		df-school-listItem(
			v-for="(c, index) in colleges"
			:college="c"
			:key="c.id"
		)
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
</style>