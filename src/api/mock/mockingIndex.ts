import {serverApi} from "@/api/server/_index.ts";
import AxiosMockAdapter from 'axios-mock-adapter';
import {registerRanking, registerVideoData, registerVideoDating, registerVideoSetting} from "@/api/mock/_videoMock.ts";
import {registerChannelData, registerChannelInfo} from "@/api/mock/_channelMock.ts";
import {registerLogin, registerTokenLogin} from "@/api/mock/_loginMock.ts";
import {registerConnect, registerConnectVideo} from "@/api/mock/_connectMock.ts";
import {registerRoulette} from "@/api/mock/_rouletteMock.ts";
import {registerChattingData} from "@/api/mock/_chattingMock.ts";

type MockRegister = (mock: AxiosMockAdapter) => void;

const registers: MockRegister[] = [
  registerVideoData,
  registerVideoSetting,
  registerChannelData,
  registerChannelInfo,
  registerConnect,
  registerConnectVideo,
  registerRanking,
  registerLogin,
  registerTokenLogin,
  registerRoulette,
  registerChattingData,
  registerVideoDating
]

export const setMockIfEnable = () => {
  if (!import.meta.env.VITE_ENABLE_MOCK) return;
  const mock = new AxiosMockAdapter(serverApi, {delayResponse: 50});
  registers.forEach((register) => register(mock));

  mock.onAny().passThrough();
}

