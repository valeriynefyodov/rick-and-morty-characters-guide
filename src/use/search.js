import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default function useSearch(
  searchParamName = "search",
  defaultValue = ""
) {
  const router = useRouter();
  const route = useRoute();
  const search = ref(route.query[searchParamName] ?? defaultValue);

  return {
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
  };
}
