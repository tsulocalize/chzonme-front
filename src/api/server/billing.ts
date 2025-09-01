import {serverApi} from "@/api/server/_index.ts";

export const startSubscription = async (customerKey: string, authKey: string, tier: number) => {
  const response = await serverApi.post(`/subscription`, { customerKey, authKey, tier });
  return response.status === 201;
}

export const getCustomerKey = async () => {
  const response = await serverApi.get(`/customer-key`);
  return response.data;
}
