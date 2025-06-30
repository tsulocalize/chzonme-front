import AxiosMockAdapter from "axios-mock-adapter";

export const registerConnectVideo = (mock: AxiosMockAdapter) => {
  mock.onPost(/\/connect/).reply(() => {
    return [200];
  });
}