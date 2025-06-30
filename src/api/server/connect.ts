import {serverApi} from "@/api/server/_index.ts";

export const connectVideo = async (channelId: string) => {
  const response = await serverApi.post(`/connection/video`, { channelId });
  return response.status;
}

export const connectRoulette = async (channelId: string) => {
  const response = await serverApi.post(`/connection/roulette`, { channelId });
  return response.status;
}

export const disconnectRoulette = async (channelId: string) => {
  const response = await serverApi.post(`/connection/roulette`, { channelId });
  return response.status;
}

export const connectChatting = async (channelId: string) => {
  const response = await serverApi.post(`/connection/chatting`, { channelId });
  return response.status;
}
