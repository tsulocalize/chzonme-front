import {serverApi} from "@/api/server/_index.ts";

export const getChattingData = async (interval: number, from: string, to: string) => {
  const response = await serverApi.get(`/chatting?interval=${interval}&from=${from}&to=${to}`);
  return response.data;
}
