import { api } from "@/src/services/api";

export const test = () => {
  const res = api.get("/");
  return res;
};
