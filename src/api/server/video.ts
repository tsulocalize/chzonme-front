import {serverApi} from "@/api/server/_index.ts";

export const getVideoChannels = async () => {
  // TODO: endPoint 변경 필요 (like video-donations/channels)
  const response = await serverApi.get("/video-donations/video-donating");
  return response.data;
}

export const getVideoTable = async (channelName: string) => {
  const response = await serverApi.get(`/video-donations/v1?channelName=${channelName}`);
  return response.data;
}

export const getVideoSetting = async (channelName: string) => {
  const response = await serverApi.get(`/video-setting/v1?channelName=${channelName}`);
  return response.data;
}

