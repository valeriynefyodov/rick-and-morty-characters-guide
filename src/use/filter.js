import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default function useFilter(
  filterParamName = "filter",
  defaultValue = ""
) {
  const router = useRouter();
  const route = useRoute();
  const filter = ref(route.query[filterParamName] ?? defaultValue);

  watch([filter], () => {
    router.push({
      name: route.name,
      params: route.params,
      query: {
        ...route.query,
        page: undefined,
        [filterParamName]: filter.value || undefined,
      },
    });
  });

  return {
    [filterParamName]: filter,
  };
}
