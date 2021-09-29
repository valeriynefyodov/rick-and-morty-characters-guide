import { ref, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";

export default function useSearch(
  searchParamName = "search",
  defaultValue = ""
) {
  const router = useRouter();
  const route = useRoute();
  const search = ref(route.query[searchParamName] ?? defaultValue);
  const isSearch = ref(!!route.query[searchParamName]);

  watchEffect(() => {
    isSearch.value = !!route.query[searchParamName];
  });

  return {
    isSearch,
    [searchParamName]: search,
    querySearch() {
      router.push({
        name: route.name,
        params: route.params,
        query: {
          ...route.query,
          page: undefined,
          [searchParamName]: search.value || undefined,
        },
      });
    },
    clearSearch() {
      search.value = "";
      router.push({
        name: route.name,
        params: route.params,
        query: {
          ...route.query,
          page: undefined,
          [searchParamName]: undefined,
        },
      });
    },
  };
}
