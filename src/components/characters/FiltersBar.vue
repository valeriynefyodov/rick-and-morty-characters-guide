<template>
  <section class="characters__filters-bar">
    <div class="app__content-container">
      <div>
        <template v-for="spc in SPECIES_LIST" :key="spc">
          <input
            type="radio"
            :id="`species-${spc}`"
            :value="spc === SPECIES_ALL ? '' : spc"
            v-model="species"
          />
          <label
            :for="`species-${spc}`"
            :class="{ active: spc === (species || SPECIES_ALL) }"
          >
            <span class="capitalize">{{ spc }}</span>
          </label>
        </template>
      </div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search by name..."
          @keypress.enter="querySearch"
          v-model.trim="name"
        />
        <button
          role="button"
          class="filters-bar__button filters-bar__button_search"
          :disabled="!name"
          @click="querySearch"
        >
          Search
        </button>
        <button
          v-show="isSearch"
          role="button"
          class="filters-bar__button"
          @click="clearSearch"
        >
          Clear
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import useSearch from "@/use/search";
import useFilter from "@/use/filter";

export default {
  setup() {
    const { name, isSearch, querySearch, clearSearch } = useSearch("name");
    const { species } = useFilter("species");

    return {
      name,
      species,
      isSearch,
      querySearch,
      clearSearch,
    };
  },
  created() {
    this.SPECIES_ALL = "All";
    this.SPECIES_HUMAN = "Human";
    this.SPECIES_ANIMAL = "Animal";
    this.SPECIES_ALIEN = "Alien";

    this.SPECIES_LIST = [
      this.SPECIES_ALL,
      this.SPECIES_HUMAN,
      this.SPECIES_ANIMAL,
      this.SPECIES_ALIEN,
    ];
  },
};
</script>

<style scoped lang="scss">
.characters__filters-bar {
  background-color: #f2f2f2;
  padding: 16px 0px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 16px;
  }
}

input {
  &[type="text"] {
    padding: 8px 4px;
    border: 1px solid #afafaf;
    border-right: none;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  &[type="radio"] {
    display: none;

    & + label {
      padding: 4px 8px;
      border: 1px solid #000;
      border-right: none;
      cursor: pointer;

      &:hover {
        background-color: #999;
      }

      &:first-of-type {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-of-type {
        border-right: 1px solid #000;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &.active {
        background-color: #000;
        color: #fff;
      }
    }
  }
}

.filters-bar__button {
  padding: 8px;
  border: none;
  border-radius: 2px;

  &:hover:not(:disabled) {
    background-color: #999;
    cursor: pointer;
  }
}

.filters-bar__button_search {
  border: 1px solid #000;
  border-top-left-radius: none;
  border-bottom-left-radius: none;

  &:disabled {
    border-color: #afafaf;
  }
}
</style>
