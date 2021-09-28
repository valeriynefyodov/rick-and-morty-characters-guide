<template>
  <div class="app__content-container">
    <CardsList :characters="favourites" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardsList from "@/components/CardsList";

export default {
  components: {
    CardsList,
  },
  computed: mapState("favourites", ["favourites"]),
};
</script>

<style scoped>
.app__content-container {
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>
