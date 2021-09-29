<template>
  <div v-if="showPlaceholder">No cards</div>
  <div v-else class="cards__grid">
    <template v-if="isFetching">
      <div v-for="mock in MOCK_DATA" class="card__container" :key="mock">
        <Skeleton :width="'100%'" :height="200" />
        <div class="card__content">
          <h4><Skeleton :width="150" :height="20" /></h4>
          <p><Skeleton :width="100" :height="22" /></p>
          <Skeleton :width="125" :height="30" />
        </div>
      </div>
    </template>
    <template v-else>
      <router-link
        v-for="character in characters"
        :key="character.id"
        :to="{ name: 'Character', params: { id: character.id } }"
      >
        <div class="card__container">
          <img :src="character.image" />
          <div class="card__content">
            <h4>{{ character.name }}</h4>
            <p>{{ character.species }} - {{ character.status }}</p>
            <FavouritesButton :character="character" />
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
import FavouritesButton from "@/components/FavouritesButton.vue";
import Skeleton from "@/components/Skeleton";

export default {
  components: {
    FavouritesButton,
    Skeleton,
  },
  props: {
    isFetching: {
      type: Boolean,
      default: false,
    },
    characters: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    showPlaceholder() {
      return !this.isFetching && !this.characters.length;
    },
  },
  created() {
    this.MOCK_DATA = Array(4);
  },
};
</script>

<style scoped lang="scss">
.cards__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 16px;
  column-gap: 16px;
}

.card__container img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

a,
a:active,
a:visited {
  text-decoration: none;
}
</style>
