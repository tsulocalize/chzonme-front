import {serverApi} from "@/api/server/_index.ts";

export const getRouletteTable = async () => {
  const response = await serverApi.get(`/roulette`);
  return response.data;
}

export const createRoulette = async () => {
  const response = await serverApi.post(`/roulette`);
  return response.status;
}

