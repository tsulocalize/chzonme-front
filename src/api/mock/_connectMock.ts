import AxiosMockAdapter from "axios-mock-adapter";

export const registerConnectVideo = (mock: AxiosMockAdapter) => {
  mock.onPost(/\/connect\/video/).reply(() => {
    return [304];
  });
}