<template>
  <button type="button" @click.prevent="handleClick">
    {{ buttonLabel }}
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions("favourites", {
      addToFavourites: "add",
      removeFromFavourites: "remove",
    }),

    handleClick() {
      if (!this.isInFavourites) {
        this.addToFavourites(this.character);
      } else {
        this.removeFromFavourites(this.character);
      }
    },
  },

  computed: {
    isInFavourites() {
      return this.$store.getters["favourites/isInFavourites"](this.character);
    },

    buttonLabel() {
      return this.isInFavourites
        ? "Remove from Favourites"
        : "Add to Favourites";
    },
  },
};
</script>

<style scoped lang="scss">
button {
  background-color: #000;
  color: #fff;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
}
</style>
