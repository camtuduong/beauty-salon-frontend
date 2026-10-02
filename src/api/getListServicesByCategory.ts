import { api } from "@/src/services/api";

export const getListServicesByCategory = async (categorySlug?: string) => {
  const endpoint = categorySlug ? `/services/${categorySlug}` : `/services`;

  const res = await api.get(endpoint);
  return res.data;
};
