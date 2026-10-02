import { ServiceCategory } from "@/src/types/service";
import { uuidv4 } from "zod";

export const useAddDefaultCategory = (serviceCategories: ServiceCategory[]) => {
  const newServiceCategories: ServiceCategory[] = [
    {
      name: "All",
      slug: "",
      isActive: true,
      id: String(uuidv4()),
      sortOrder: -1,
      updatedAt: String(new Date()),
      createdAt: String(new Date()),
    },
    ...serviceCategories,
  ];
  return newServiceCategories;
};
