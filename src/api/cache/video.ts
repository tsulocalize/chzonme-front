import {cacheApi} from "@/api/cache/_index.ts";

export const getCacheVideoTable = async (channelId: string, etag: number) => {
  const response = await cacheApi.get(`/video-donations?channelId=${channelId}`,{
    headers: {'If-None-Match': etag}
  });
  if (response.status === 304) {
    return null;
  }
  return response.data;
}
