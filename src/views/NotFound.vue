<template>
  <div class="app__content-container">
    <h1>The {{ resource }} you're looking for is not found</h1>
    <router-link :to="{ name: 'Characters' }">Back to Characters</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      default: "page",
    },
  },
};
</script>

<style scoped>
.app__content-container {
  text-align: center;
  padding-top: 48px;
  padding-bottom: 48px;
}

h1 {
  margin: 0;
}
</style>
