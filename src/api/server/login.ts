import {serverApi} from "@/api/server/_index.ts";
import type {UserData} from "@/store/useUserStore.ts";

export const login = async (code: string, state: string): Promise<UserData> => {
  const response = await serverApi.post(`/login`, { code, state });
  return response.data;
}

export const tokenLogin = async (): Promise<UserData> => {
  const response = await serverApi.post(`/token-login`);
  return response.data;
}
