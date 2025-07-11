import {serverApi} from "@/api/server/_index.ts";

export const getAlwaysVideo = async (channelId: string) => {
  const response = await serverApi.get(`/connection/always?channelId=${channelId}&activation=VIDEO`);
  return response.data;
}

export const getAlwaysConnectionByMe = async () => {
  const response = await serverApi.get(`/connection/always/me`);
  return response.data;
}

export const createAlwaysConnection = async (channelId: string, activation: string) => {
  const response = await serverApi.post(`/connection/always`, { channelId, activation });
  return response.status;
}

export const deleteAlwaysConnection = async (channelId: string, activation: string) => {
  const response = await serverApi.delete(`/connection/always?channelId=${channelId}&activation=${activation}`);
  return response.status;
}
