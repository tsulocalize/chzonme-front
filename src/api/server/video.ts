import {serverApi} from "@/api/server/_index.ts";
import moment from "moment";

export const getVideoChannels = async () => {
  const response = await serverApi.get("/video-donations/video-donating");
  return response.data;
}

export const getVideoTable = async (channelId: string, etag: number) => {
  const response = await serverApi.get(`/video-donations?channelId=${channelId}`,{
    headers: {'If-None-Match': etag}
  });
  if (response.status === 304) {
    return null;
  }
  return response.data;
}

export const getPreviousVideoTable = async (channelId: string, date: Date) => {
  const response = await serverApi.get(`/video-donations/previous?channelId=${channelId}&from=${moment(date).format('YYYY-MM-DDTHH:mm:ss')}&to=${moment(date).add(1, 'day').format('YYYY-MM-DDTHH:mm:ss')}`);
  return response.data;
}

export const getVideoSetting = async (channelId: string) => {
  const response = await serverApi.get(`/video-setting?channelId=${channelId}`);
  return response.data;
}

export const getRanking = async (criteria: string) => {
  const response = await serverApi.get(`/video-donations/ranking?criteria=${criteria}`);
  return response.data;
}

