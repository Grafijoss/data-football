<template lang="pug">
	main
		df-header
		template(
			v-if="!!infoDetail"
		)
			section.hero.is-primary
				.hero-body
					.container
						h1.title {{ infoDetail.school }}
			.container.container-detail
				.columns
					.column.is-4
						figure.image.is-square
							template(v-if="!!infoDetail.logos && !!infoDetail.logos.length")
								img(
									:src="infoDetail.logos[0]"
								)
							template(v-else)
								.wrrp-no-img
									img(
										src="https://picsum.photos/400/400"
									)
									.noimg 
										.letters
											strong {{ infoDetail.school.substr(0,1) }}
											strong {{ infoDetail.school.substr(1,1) }}
						.wrrp-colors-item
							.color.color1(
								:class="{'complete': !infoDetail.alt_color}"
								:style="{background: infoDetail.color }"
							)
							template(v-if="!!infoDetail.alt_color")
								.color.color2(
									:style="{background: infoDetail.alt_color }"
								)
					.column.is-8
						ul.list-detail
							li 
								strong SCHOOL: 
								| {{ !!infoDetail.school ? infoDetail.school : 'Does not have' }}
							li 
								strong ALTERNATIVE NAME: 
								| {{ !!infoDetail.alt_name3 ? infoDetail.alt_name3 : 'Does not have' }}
							li
								strong MASCOT: 
								| {{ !!infoDetail.mascotl ? infoDetail.mascotl : 'Does not have' }}
							li
								strong ABBREVIATION: 
								| {{ !!infoDetail.abbreviationl ? infoDetail.abbreviationl : 'Does not have' }}
							li
								strong ABBREVIATION: 
								| {{ !!infoDetail.abbreviationl ? infoDetail.abbreviationl : 'Does not have' }}
							li
								strong CONFERENCE: 
								| {{ !!infoDetail.conferencel ? infoDetail.conferencel : 'Does not have' }}
							li
								strong DIVISION: 
								| {{ !!infoDetail.division ? infoDetail.division : 'Does not have' }}
							li
								strong COMMENT: 
								| {{ !!infoDetail.comment ? infoDetail.comment : 'Does not have' }}
</template>

<script>
import DfHeader from "@/components/layout/header";
export default {
  name: "detail",

  data() {
    return {
      infoDetail: null,
      favorite: false
    };
  },
  components: {
    DfHeader
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
    colleges() {
      return this.$store.state.colleges;
    }
  },
  mounted() {
    this.getInfoCollege();
  },

  methods: {
    getInfoCollege() {
      const idDetail = parseInt(this.$route.params.id, 10);
      const isFavorite = this.favorites.filter(favorite => {
        return favorite.id === idDetail;
      });
      if (isFavorite.length > 0) {
        this.favorite = true;
        return (this.infoDetail = isFavorite[0]);
      }
      const isCollege = this.colleges.filter(college => {
        return college.id === idDetail;
      });
      if (isCollege.length > 0) return (this.infoDetail = isCollege[0]);
    }
  }
};
</script>

<style lang="scss">
.container-detail {
  padding: 20px 0;
  .list-detail {
    li {
      padding: 20px 0 15px 20px;
      &:nth-child(odd) {
        background: #eee;
      }
    }
  }
  .wrrp-colors-item {
    border-top: solid 1px #ccc;
    height: 20px;
    margin-left: -2px;
    margin-top: 5px;
    padding-top: 5px;
    position: relative;
    width: calc(100% + 2px);
    // &::before {
    //   content: "Color";
    //   font-size: 12px;
    //   left: 0;
    //   position: absolute;
    //   text-align: center;
    //   top: 5px;
    //   width: 100%;
    // }
    .color {
      height: 25px;
      float: left;
      margin-left: 2px;
      width: calc(50% - 2px);
      &.color1 {
        height: 20px;
      }
      &.color2 {
        height: 20px;
      }
      &.complete {
        width: 100%;
      }
    }
  }
  .wrrp-no-img {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0%;
    width: 100%;
    img {
      width: 100%;
    }
    .noimg {
      background: #ccc;
      height: 100%;
      left: 0;
      line-height: 100%;
      font-size: 100px;
      position: absolute;
      text-align: center;
      text-transform: uppercase;
      top: 0;
      width: 100%;
      .letters {
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
