import axios from "axios"
import {onError} from "@/util/alert.ts";

export const serverApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
  timeoutErrorMessage: "서버가 응답하지 않습니다.",
})

serverApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      return Promise.reject(error); // auth는 alert하지 않고 oauth로 보내기
    }

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
