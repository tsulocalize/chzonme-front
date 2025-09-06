import AxiosMockAdapter from "axios-mock-adapter";

export const registerConnect = (mock: AxiosMockAdapter) => {
  mock.onPost(/\/connect/).reply(() => {
    return [200];
  });
}

export const registerConnectVideo = (mock: AxiosMockAdapter) => {
  mock.onPost(/\/activation\/video/).reply(() => {
    return [200];
  });
}