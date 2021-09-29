import { getCharacters } from "@/services/api";
import NOTIFICATION_TYPES from "@/constants/notifications";

export const namespaced = true;

export const state = {
  characters: [],
  isFetching: false,
  pages: 1,
};

export const mutations = {
  SET_FETCHING(state, isFetching) {
    state.isFetching = isFetching;
  },
  SET_CHARACTERS(state, characters) {
    state.characters = characters;
  },
  SET_PAGES_COUNT(state, pages) {
    state.pages = pages;
  },
};

export const actions = {
  async fetch(context, { page, species, name }) {
    try {
      context.commit("SET_FETCHING", true);

      const { data } = await getCharacters({
        page,
        name,
        species,
      });

      context.commit("SET_CHARACTERS", data.results);
      context.commit("SET_PAGES_COUNT", data.info.pages);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        context.commit("SET_CHARACTERS", []);
        context.commit("SET_PAGES_COUNT", 1);
      } else {
        context.dispatch(
          "notifications/add",
          {
            type: NOTIFICATION_TYPES.TYPE_DANGER,
            message: `Oops, something went wrong: ${err.message}`,
          },
          { root: true }
        );
      }
    } finally {
      context.commit("SET_FETCHING", false);
    }
  },
};
