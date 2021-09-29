<template>
  <div class="app__content-container">
    <div class="card__container">
      <div class="card__content">
        <template v-if="isFetching">
          <h1><Skeleton :width="400" :height="40" /></h1>
          <p><Skeleton :width="150" :height="20" /></p>
          <p><Skeleton :width="300" :height="20" /></p>
          <p><Skeleton :width="250" :height="20" /></p>
          <Skeleton :width="125" :height="30" />
        </template>
        <template v-else-if="character">
          <h1>{{ character.name }}</h1>
          <p>{{ subtitle }}</p>
          <p>Last known location: {{ character.location.name }}</p>
          <p>First seen in: {{ firstSeenIn }}</p>
          <FavouritesButton :character="character" />
        </template>
      </div>
      <Skeleton v-if="isFetching" :width="300" :height="300" />
      <img v-else-if="character" :src="character.image" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import FavouritesButton from "@/components/FavouritesButton.vue";
import Skeleton from "@/components/Skeleton.vue";

export default {
  components: {
    FavouritesButton,
    Skeleton,
  },

  methods: {
    fetchDetails() {
      this.$store.dispatch("character/fetch", parseInt(this.$route.params.id));
    },
  },

  computed: {
    ...mapState("character", ["character", "isFetching"]),

    subtitle() {
      return `${this.character.species} - ${this.character.status}`;
    },

    firstSeenIn() {
      const [firstEpisode] = this.character.episode;
      return firstEpisode
        ? `episode ${firstEpisode.split("/").pop()}`
        : "unknown";
    },
  },

  watch: {
    $route(to) {
      if (to.name === "Character") {
        this.fetchDetails();
      }
    },
  },

  created() {
    this.fetchDetails();
  },
};
</script>

<style scoped lang="scss">
.app__content-container {
  padding-top: 24px;
  padding-bottom: 24px;
}

.card__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 48px;
}

.card__container img {
  width: 300px;
  height: 300px;
}
</style>
