<template lang="pug">
	section.wrrp-search
		.columns
			.column.is-1.colssearch.logo
				strong D
					span F
			.column.is-1.colssearch.filter
				.dropdown
					.dropdown-trigger
						.button.is-info
							span.icon.is-small
								i.icon-filter
					.dropdown-menu
						.dropdown-content
							a.dropdown-item division
							a.dropdown-item.is-active conference
			.column.is-9.colssearch.colsearch
				input.input.is-large(
					type="text",
					placeholder="Search college",
					v-model="searchQuery"
				)
			.column.is-1.colssearch
</template>

<script>
export default {
  name: "search",
  props: ["colleges"],
  data() {
    return {
      searchQuery: "",
      filteredItems: []
    };
  },
  watch: {
    searchQuery(val) {
      console.log("este es el val del buscador");
      console.log(val);
      // this.$emit("input", val);
      this.getFilteredItems(val);
    }
  },
  created() {
    // this.collegesPrueba.push(this.colleges[0]);
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.colleges.length}`;
    }
  },

  methods: {
    getFilteredItems(match) {
      console.log("aquii");
      let fiterColleges = this.colleges.filter(college => {
        return (
          college.school
            .toString()
            .toLowerCase()
            .indexOf(match.toLowerCase()) >= 0
        );
      });
      this.$emit("input", fiterColleges);
    }
  }
};
</script>

<style lang="scss">
@import "../../scss/main.scss";

.wrrp-search {
  padding: 20px;
  width: 100%;
}

.colssearch {
  &.colsearch {
    // input {
    //   width: 50px;
    // }
  }
  &.logo {
    font-size: 36px;
    line-height: 78px;
    padding: 0;
    text-align: center;
    position: relative;
    border: solid 1px #00d1b2;
    span {
      color: #00d1b2;
    }
  }
  &.filter {
    line-height: 78px;
    padding: 0;
    text-align: center;
    position: relative;
    .button.is-info {
      height: 78px;
      line-height: 78px;
      background: none;
      color: #ccc;
      font-size: 24px;
    }
    .dropdown-menu {
      top: calc(100% - 20px);
      text-align: left;
      .dropdown-item {
        position: relative;
        &.is-active {
          &::after {
            font-family: "icomoon";
            content: "\ea10";
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}
</style>