<template>
  <FiltersBar />
  <div class="app__content-container">
    <CardsList :isFetching="isFetching" :characters="characters" />
    <Pagination :page="page" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import FiltersBar from "@/components/characters/FiltersBar";
import CardsList from "@/components/CardsList";
import Pagination from "@/components/characters/Pagination";

export default {
  components: {
    FiltersBar,
    CardsList,
    Pagination,
  },

  props: {
    page: {
      type: Number,
      default: 1,
      validator: (value) => value > 0,
    },
  },

  methods: {
    fetchData() {
      this.$store.dispatch("characters/fetch", this.$route.query);
    },
  },

  computed: mapState("characters", ["pages", "characters", "isFetching"]),

  watch: {
    $route(to) {
      if (to.name === "Characters") {
        this.fetchData();
      }
    },
  },

  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.app__content-container {
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>
