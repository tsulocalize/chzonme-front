import {serverApi} from "@/api/server/_index.ts";
import AxiosMockAdapter from 'axios-mock-adapter';
import {registerVideoData, registerVideoSetting} from "@/api/mock/_videoMock.ts";

type MockRegister = (mock: AxiosMockAdapter) => void;

const registers: MockRegister[] = [
  registerVideoData,
  registerVideoSetting,
]

export const setMockIfEnable = () => {
  if (!import.meta.env.VITE_ENABLE_MOCK) return;
  const mock = new AxiosMockAdapter(serverApi, {delayResponse: 50});
  registers.forEach((register) => register(mock));


  mock.onGet('/api/user').reply(200, { name: 'Alice' });
}

