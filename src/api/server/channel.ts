import {serverApi} from "@/api/server/_index.ts";

export const getAllChannels = async () => {
  // TODO: 서버 측 구현 필요
  const response = await serverApi.get("/channels");
  return response.data;
}

export const getChannelInfo = async (channelName: string) => {
  const response = await serverApi.get(`/channel-info?channelName=${channelName}`);
  return response.data;
}
