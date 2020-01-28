<template lang="pug">
	.modal
		.modal-background
		.modal-content.modal-nc
			.modal-card
				header.modal-card-head
					p.modal-card-title {{ college.school }} 
					button.delete(
						v-on:click="closeModal()"
					)
				.modal-card-body
					article.media
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
						.media-content
							.field
								p.control
									template(
										v-if="typeModal === 'add'"
									)
										textarea.textarea(
											placeholder="Add a comment..."
											v-model="comment"
										)
									template(v-else)
										p.title.is-5 {{ college.comment }}
				.modal-card-foot
					div.button.is-success(
						v-on:click="addFavorite()"
					) {{ typeModal === 'add' ?  'Add to favorites' : 'Remove to favorites'}}
					div.button(
						v-on:click="closeModal()"
					) Cancel
</template>

<script>
import store from "store";

export default {
  name: "modal-new",
  props: ["college", "typeModal"],
  data() {
    return {
      comment: ""
    };
  },
  watch: {},
  created() {
    const comment = !!this.college.comment;
    this.comment = comment ? this.college.comment : "";
  },
  mounted() {},
  beforeDestroy() {},
  computed: {
    favorites() {
      return this.$store.state.favorites;
    }
  },
  methods: {
    isFavorite(college) {
      const favorites = this.favorites;
      const favoritesExist = favorites && !!favorites.length;
      const ifExist = item => item.id === college.id;
      let existItem = null;
      if (favoritesExist) {
        existItem = favorites.findIndex(ifExist);
      } else {
        return false;
      }
      return {
        exist: existItem !== -1,
        index: existItem
      };
    },
    closeModal() {
      this.$bus.$emit("close-modal-favorite");
    },
    addFavorite() {
      let favorites = [];
      if (this.isFavorite(this.college).exist) {
        let stateFavorites = JSON.parse(JSON.stringify(this.favorites));
        stateFavorites.splice(this.isFavorite(this.college).index, 1);
        favorites = stateFavorites;
      } else {
        let stateFavorites = JSON.parse(JSON.stringify(this.favorites));
        let newFavorite = JSON.parse(JSON.stringify(this.college));
        newFavorite["comment"] = this.comment;
        stateFavorites.push(newFavorite);
        favorites = stateFavorites;
      }
      store.set("favorites", favorites);
      this.$store.commit("setfavorites", { favorites });
      this.closeModal();
    }
  }
};
</script>

<style lang="scss">
.modal {
  display: block;
  .modal-nc {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
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
}
</style>
