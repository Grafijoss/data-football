<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container.is-fluid
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}

      .container.results
        .columns
          .column(v-for="t in tracks") {{ t.school }} - {{ t.mascot}}
</template>

<script>
import collegesService from "./services/colleges";

// const tracks = [
//   { name: "Muchacha", artist: "Luis Alberto Spinetta" },
//   { name: "Hoy aca en el baile", artist: "El Pepo" },
//   { name: "I was made for loving you", artist: "Kiss" }
// ];

export default {
  name: "app",

  data() {
    return {
      searchQuery: "",
      tracks: []
    };
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },

  methods: {
    search() {
      console.log(collegesService);
      console.log("aqui entra");
      collegesService.search(this.searchQuery).then(res => {
        console.log(res);
        this.tracks = res.data;
      });
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 50px;
}
</style>