import AxiosMockAdapter from "axios-mock-adapter";

const elements = [
  {name: "짜장면", cheese: 1000},
  {name: "짬뽕", cheese: 2000},
  {name: "볶음밥", cheese: 3000},
  {name: "짜장면1", cheese: 1000},
  {name: "짬뽕1", cheese: 2000},
  {name: "볶음밥1", cheese: 3000},
  {name: "짜장면2", cheese: 1000},
  {name: "짬뽕2", cheese: 2000},
  {name: "볶음밥2", cheese: 3000},
  {name: "짜장면3", cheese: 1000},
  {name: "짬뽕3", cheese: 2000},
  {name: "볶음밥3", cheese: 3000},
  {name: "볶음밥4", cheese: 3000},
  {name: "짜장면", cheese: 1000},
  {name: "짬뽕", cheese: 2000},
  {name: "볶음밥", cheese: 3000},
  {name: "짜장면1", cheese: 1000},
  {name: "짬뽕1", cheese: 2000},
  {name: "볶음밥1", cheese: 3000},
  {name: "짜장면2", cheese: 1000},
  {name: "짬뽕2", cheese: 2000},
  {name: "볶음밥2", cheese: 3000},
  {name: "짜장면3", cheese: 1000},
  {name: "짬뽕3", cheese: 2000},
  {name: "볶음밥3", cheese: 3000},
  {name: "볶음밥4", cheese: 3000},
]

export const registerRoulette = (mock: AxiosMockAdapter) => {
  mock.onGet(/\/roulette/).reply(() => {
    return [200,
      {
        "channelId": "dqawdadwadad",
        "elements": elements
      },
    ];
  })
}
