import { getServiceCategories } from "@/src/api/getServiceCategories";
import { useQuery } from "@tanstack/react-query";
import { ServiceCategory } from "@/src/types/service";

export const useGetAllServiceCategories = () => {
  const { data, error, isLoading } = useQuery<ServiceCategory[]>({
    queryKey: ["service-categories"],
    queryFn: async () => await getServiceCategories(),
  });
  return { data: data || [], error, isLoading };
};
