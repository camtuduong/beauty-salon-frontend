import { api } from "@/src/services/api";
import { ServiceCategory } from "@/src/types/service";

export const getServiceCategories = async () => {
  const res = await api.get<ServiceCategory[]>("/categories");
  return res.data;
};
