import axios from "axios"
import {onError} from "@/util/alert.ts";

export const cacheApi = axios.create({
  baseURL: import.meta.env.VITE_CACHE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
  timeoutErrorMessage: "서버가 응답하지 않습니다.",
  validateStatus: function (status) {
    return status < 400 && status >= 200;
  }
})

cacheApi.interceptors.response.use(
  response => response,
  error => {
    if (!error.response || !error.response.data) {
      onError("네트워크 오류가 발생했습니다");
      return Promise.reject(error);
    }

    const errorData = error.response.data;
    if (!errorData.code) {
      onError("서버 데이터를 불러오는데 실패했습니다")
    } else {
      onError(`에러 코드 : ${errorData.code} \n원인: ${errorData.message}`);
    }

    return Promise.reject(error);
  }
);
