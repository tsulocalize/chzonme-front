import AxiosMockAdapter from "axios-mock-adapter";

export const registerMakeBilling = (mock: AxiosMockAdapter) => {
  mock.onPost(/\/billing/).reply(() => {
    return [201];
  });
}