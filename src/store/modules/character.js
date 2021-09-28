import { getCharacter } from "@/services/api";
import router from "@/router";

export const namespaced = true;

export const state = {
  character: null,
  isFetching: false,
};

export const mutations = {
  SET_FETCHING(state, isFetching) {
    state.isFetching = isFetching;
  },
  SET_CHARACTER(state, character) {
    state.character = character;
  },
};

export const actions = {
  async fetch(context, id) {
    try {
      const characters = context.rootState.characters.characters;
      let character = characters?.find((char) => char.id === id);

      if (!character) {
        context.commit("SET_FETCHING", true);
        const { data } = await getCharacter(id);
        character = data;
      }

      context.commit("SET_CHARACTER", character);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        router.push({ name: "NotFound", params: { resource: "character" } });
      } else {
        context.dispatch(
          "notifications/add",
          {
            type: "danger",
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
