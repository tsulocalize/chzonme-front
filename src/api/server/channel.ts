import {serverApi} from "@/api/server/_index.ts";

export const getAllChannels = async () => {
  // TODO: 서버 측 구현 필요
  const response = await serverApi.get("/channels");
  return response.data;
}