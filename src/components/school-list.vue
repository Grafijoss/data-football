<template lang="pug">
.container
		.wrrp-list.columns(v-if="!!colleges.length")
			.column(
				:class="pathPage === 'favorites' ? 'is-6' : 'is-4'"
				v-for="(c, index) in colleges"
				:key="c.id"
			)
				df-school-listItem(
					:college="c"
				)
			.clear
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
  computed: {
    pathPage() {
      return this.$route.path.replace("/", "");
    }
  },
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
  &.columns {
    margin-bottom: 30px;
    @media screen and (min-width: 764px) {
      display: block;
    }
    .column {
      @media screen and (min-width: 764px) {
        float: left;
      }
    }
  }
}
h2.title-noresult {
  padding-top: 30px;
  text-align: center;
}
</style>
