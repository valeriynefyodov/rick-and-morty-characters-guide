import { createStore } from "vuex";

import * as characters from "./modules/characters";
import * as character from "./modules/character";
import * as favourites from "./modules/favourites";
import * as notifications from "./modules/notifications";

export default createStore({
  modules: {
    characters,
    character,
    favourites,
    notifications,
  },
});
