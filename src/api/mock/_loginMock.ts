import AxiosMockAdapter from "axios-mock-adapter";

export const registerLogin = (mock: AxiosMockAdapter) => {
  mock.onPost(/\/login/).reply(() => {
    return [200,
      {
        "channelId" : "fakeChannelId",
        "channelName" : "가짜 이름",
        "img" : "https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*",
        "tier" : "1",
      }]
  })
};

export const registerTokenLogin = (mock: AxiosMockAdapter) => {
  mock.onPost(/\/token-login/).reply(() => {
    return [401];
  })
};