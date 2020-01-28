<template lang="pug">
	section.wrrp-search
		.columns
			.column.is-1.colssearch.logo(
				v-on:click="goHome()"
			)
				strong D
					span F
			.column.is-1.colssearch.filter

			.column.is-9.colssearch.colsearch

			.column.is-1.colssearch.colfavorites
				.bt-favorites(
						:class="favorites.length > 0 ? 'active' : ''"
						v-on:click="goFavorites()"
					)
					i.iconfavorite(
						:class="favorites.length > 0 ? 'icon-heart' : 'icon-heart-broken'"
					)
					.wrrp-num-favorites 
						strong {{ favorites.length }}
</template>

<script>
export default {
  name: "df-header",
  data() {
    return {};
  },
  mounted() {},
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
    pathPage() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    goHome() {
      if (this.pathPage !== "") this.$router.push({ name: "home" });
    },
    goFavorites() {
      const favorites = !!this.favorites.length;
      if (favorites && this.pathPage !== "favorites") {
        this.$router.push({ name: "favorites" });
      }
    }
  }
};
</script>

<style lang="scss">
.wrrp-search {
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
}

.colssearch {
  &.logo {
    cursor: pointer;
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
  &.colsearch {
    position: relative;
    .delete-query {
      color: #ccc;
      cursor: pointer;
      height: 50px;
      line-height: 50px;
      position: absolute;
      right: 14px;
      text-align: center;
      transform: translateY(-50%);
      top: 50%;
      width: 50px;
    }
  }
  &.colfavorites {
    position: relative;
    .bt-favorites {
      color: #ccc;
      font-size: 24px;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      &.active {
        color: #00d1b2;
        cursor: pointer;
      }
    }
    .wrrp-num-favorites {
      background: #000;
      bottom: -2px;
      border-radius: 50%;
      font-size: 10px;
      height: 20px;
      line-height: 20px;
      position: absolute;
      right: -12px;
      text-align: center;
      width: 20px;
      strong {
        color: #ccc;
      }
    }
  }
}
</style>
