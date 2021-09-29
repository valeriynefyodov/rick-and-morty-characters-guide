<template>
  <div class="pagination__container">
    <div>Page {{ page }} of {{ pagesCount }}</div>
    <nav>
      <router-link
        rel="prev"
        :class="{ disabled: isPrevDisabled }"
        :to="{ name: 'Characters', query: { ...$route.query, page: page - 1 } }"
      >
        &lt;&lt; Prev
      </router-link>
      <router-link
        rel="next"
        :class="{ disabled: isNextDisabled }"
        :to="{ name: 'Characters', query: { ...$route.query, page: page + 1 } }"
      >
        Next &gt;&gt;
      </router-link>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState("characters", {
      pagesCount: "pages",
    }),
    isNextDisabled() {
      return this.page === this.pagesCount;
    },
    isPrevDisabled() {
      return this.page === 1;
    },
  },
};
</script>

<style scoped lang="scss">
.pagination__container {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 48px;
}

a {
  text-decoration: none;
  color: #000;
  margin-left: 8px;

  &:visited {
    color: #000;
  }

  &:hover {
    opacity: 0.7;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>
