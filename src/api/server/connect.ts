import {serverApi} from "@/api/server/_index.ts";

export const connectVideo = async (channelId: string) => {
  const response = await serverApi.post(`/connect/video`, { channelId });
  return response.status;
}
