<template lang="pug">

	section.section
		article.media.box
			figure.media-left
				p.image.is-64x64
					template(v-if="!!college.logos && !!college.logos.length")
						img(
							:src="college.logos[0]"
							ref="img_item"
						)
					template(v-else)
						.noimg 
							strong {{ college.school.substr(0,1) }}
							strong {{ college.school.substr(1,1) }}
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
				.contentz
					p 
						strong {{ college.school }} 
						small esta es la imagen {{ thereIsImage }} <br/> 
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
      thereIsImage: 0,
      searchQuery: "",
      colleges: []
    };
  },
  mounted() {
    let existImage = !!this.$refs.img_item;
    this.thereIsImage = existImage ? this.$refs.img_item.offsetHeight : 0;
  },
  methods: {
    // existImage() {
    //   let existImage = !!this.$refs.img_item;
    //   return existImage ? this.$refs.img_item.offsetHeight === 64 : false;
    // }
  }
};
</script>

<style lang="scss">
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
.image {
  position: relative;
  .noimg {
    background: #ccc;
    height: 64px;
    left: 0;
    line-height: 64px;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    width: 64px;
  }
}
</style>