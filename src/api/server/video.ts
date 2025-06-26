import {serverApi} from "@/api/server/_index.ts";

export const getVideoChannels = async () => {
  // TODO: endPoint 변경 필요 (like video-donations/channels)
  const response = await serverApi.get("/video-donations/video-donating");
  return response.data;
}

export const getVideoTable = async (channelId: string) => {
  const response = await serverApi.get(`/video-donations?channelId=${channelId}`);
  return response.data;
}

export const getVideoSetting = async (channelId: string) => {
  const response = await serverApi.get(`/video-setting?channelId=${channelId}`);
  return response.data;
}

export const getRanking = async (criteria: string) => {
  const response = await serverApi.get(`/ranking?criteria=${criteria}`);
  return response.data;
}

