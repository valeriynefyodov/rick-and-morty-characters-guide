<template>
  <header>
    <div class="app__content-container">
      <nav>
        <router-link :to="{ name: 'Characters' }">Characters</router-link>
        <router-link :to="{ name: 'Favourites' }">Favourites</router-link>
      </nav>
      <div><span class="symbol">♡</span> {{ favouritesCount }}</div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters("favourites", ["favouritesCount"]),
};
</script>

<style scoped lang="scss">
header {
  background-color: #202428;
  color: #fff;
  padding: 16px 0px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

a {
  margin-right: 8px;
  text-decoration: none;
  color: rgba(255, 255, 255);
  opacity: 0.7;

  &.router-link-exact-active {
    opacity: 1;
    font-weight: bold;
  }

  &:active,
  &:visited {
    color: rgba(255, 255, 255, 0.7);
  }

  &:hover {
    opacity: 1;
  }
}

.symbol {
  font-size: 20px;
}
</style>
