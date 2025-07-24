import {serverApi} from "@/api/server/_index.ts";

export const getAllChannels = async () => {
  const response = await serverApi.get("/connection/channels");
  return response.data;
}

export const getChannelInfo = async (channelName: string) => {
  const response = await serverApi.get(`/channel-info?channelName=${channelName}`);
  return response.data;
}
