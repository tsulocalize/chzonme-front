import {serverApi} from "@/api/server/_index.ts";

export const getRouletteTable = async () => {
  const response = await serverApi.get(`/roulette`);
  return response.data;
}