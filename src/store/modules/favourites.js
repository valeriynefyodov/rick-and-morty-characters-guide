import { getFavourites, setFavourites } from "@/services/favourites";

export const namespaced = true;

export const state = {
  favourites: getFavourites(),
};

export const mutations = {
  ADD_TO_FAVOURITES(state, character) {
    state.favourites.push(character);
    setFavourites(state.favourites);
  },
  REMOVE_FROM_FAVOURITES(state, { id }) {
    state.favourites = state.favourites.filter((fav) => fav.id !== id);
    setFavourites(state.favourites);
  },
};

export const actions = {
  add(context, character) {
    context.commit("ADD_TO_FAVOURITES", character);
    context.dispatch(
      "notifications/add",
      {
        type: "success",
        message: `${character.name} added to favourites`,
      },
      { root: true }
    );
  },
  remove(context, character) {
    context.commit("REMOVE_FROM_FAVOURITES", character);
    context.dispatch(
      "notifications/add",
      {
        type: "success",
        message: `${character.name} removed from favourites`,
      },
      { root: true }
    );
  },
};

export const getters = {
  isInFavourites:
    (state) =>
    ({ id }) => {
      return !!state.favourites.find((fav) => fav.id === id);
    },

  favouritesCount: (state) => state.favourites.length,
};
