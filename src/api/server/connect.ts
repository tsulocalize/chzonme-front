import {serverApi} from "@/api/server/_index.ts";

export const connect = async (channelId: string) => {
  const response = await serverApi.post(`/connection`, { channelId });
  return response.headers['X-Server'];
}

export const activateVideo = async (channelId: string, serverName: string) => {
  const response = await serverApi.post(`/activation/video`, { channelId }, {
    headers: {'X-Server': serverName}
  });
  return response.status;
}

export const activateRoulette = async (serverName: string) => {
  const response = await serverApi.post(`/activation/roulette`, {}, {
    headers: {'X-Server': serverName}
  });
  return response.status;
}

export const deactivateRoulette = async (serverName: string) => {
  const response = await serverApi.delete(`/activation/roulette`, {
    headers: {'X-Server': serverName}
  });
  return response.status;
}

export const activateChatting = async (serverName: string) => {
  const response = await serverApi.post(`/activation/chatting`, {}, {
    headers: {'X-Server': serverName}
  });
  return response.status;
}
