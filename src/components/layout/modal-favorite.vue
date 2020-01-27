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
								img(
							:src="college.logos[0]"
							ref="img_item"
						)
						.media-content
							.field
								p.control
									textarea.textarea(
										placeholder="Add a comment..."
										v-model="comment"
									)
				.modal-card-foot
					div.button.is-success(
						v-on:click="addFavorite()"
					) Add to favorites
					div.button(
						v-on:click="closeModal()"
					) Cancel
</template>

<script>
import store from "store";

export default {
  name: "modal-new",
  props: ["college"],
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
  computed: {},
  methods: {
    closeModal() {
      this.$bus.$emit("close-modal-favorite");
    },
    addFavorite() {
      let favorites = [];
      let newFavorite = JSON.parse(JSON.stringify(this.college));
      newFavorite["comment"] = this.comment;
      favorites.push(newFavorite);
      store.set("favorites", favorites);
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
}
</style>