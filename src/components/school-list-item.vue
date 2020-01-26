<template lang="pug">

	section.section
		article.media.box
			figure.media-left
				p.image.is-64x64
					template(v-if="this.thereIsImage && college.logos")
						img(
							:src="college.logos[0]"
							ref="img_item"
						)
					template("v-else")
						.noimg 
							strong {{ college.abbreviation }}
				.wrrp-colors-item
					.color.color1(
						:class="{'complete': !college.alt_color}"
						:style="{background: college.color }"
					)
					template(v-if="!!college.alt_color")
						.color.color2(
							:style="{background: college.alt_color }"
						)
			.media-content
				.content
					p 
						strong {{ college.school }} <br/>
						|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
				nav.level.is-mobile
					.level-left
						.level-item
							span.icon.is-small
								i.icon-heart

</template>

<script>
export default {
  name: "school-list-item",
  props: ["college"],
  data() {
    return {
      thereIsImage: true,
      searchQuery: "",
      colleges: []
    };
  },
  computed: {
    // thereIsImage() {
    //   return this.$refs.img_item.offsetHeight === 64;
    // }
  },
  mounted() {
    // console.log("estas sn las referencias sdedrtfgdfg  sdfsfasfasf");
    // console.log(!!this.$refs.img_item);
    this.thereIsImage =
      !!this.$refs.img_item && this.$refs.img_item.offsetHeight;
    // this.thereIsImage = this.$refs.img_item.offsetHeight === 64;
  },
  methods: {
    search() {}
  }
};
</script>

<style lang="scss">
// @import "../scss/main.scss";

.wrrp-colors-item {
  border-top: solid 1px #ccc;
  height: 20px;
  margin-left: -2px;
  padding-top: 25px;
  position: relative;
  width: calc(100% + 2px);
  &::before {
    content: "Color";
    font-size: 12px;
    left: 0;
    position: absolute;
    text-align: center;
    top: 5px;
    width: 100%;
  }
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
.noimg {
  background: #ccc;
  height: 64px;
  line-height: 64px;
  text-align: center;
  text-transform: uppercase;
  width: 64px;
}
</style>