<template>
  <Header />
  <div class="app__wrapper">
    <Notifications />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Notifications from "@/components/notifications";

export default {
  components: {
    Header,
    Notifications,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app__wrapper {
  position: relative;
}

.app__content-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 48px;
}

.card__container {
  border: 1px solid #afafaf;
  border-radius: 4px;
  overflow: hidden;
}

.card__content {
  padding: 16px;
  color: #000;

  & h1,
  & h4,
  & p {
    margin: 0px;
    margin-bottom: 8px;
    text-decoration: none;
  }
}
</style>
