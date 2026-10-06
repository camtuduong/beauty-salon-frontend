import { getListServicesByCategory } from "@/src/api/getListServicesByCategory";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetServicesByCategory = (categorySlug: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["services", categorySlug],
    queryFn: () => getListServicesByCategory(categorySlug),
    placeholderData: keepPreviousData,
  });
  return { data, error, isLoading };
};
