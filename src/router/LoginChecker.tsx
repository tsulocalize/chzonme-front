import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useUserStore} from "@/store/useUserStore.ts";
import Swal from "sweetalert2";
import {login} from "@/api/server/login.ts";
import {goTo} from "@/router/Navigator.tsx";

let loginRedirected = false;

export const LoginChecker = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const url = `https://chzzk.naver.com/account-interlock?clientId=${import.meta.env.VITE_CLIENT_ID}&redirectUri=${import.meta.env.VITE_REDIRECT}&state=${import.meta.env.VITE_STATE}`;
  const { setData, isLoggedIn } = useUserStore();

  useEffect(() => {
    if (loginRedirected) return;
    loginRedirected = true;

    const checkAuth = async () => {
      if (isLoggedIn) {
        Swal.fire({title: "이미 로그인 되어 있습니다.", icon: "error"})
          .then(() => goTo("/"));
      }

      if (code === null || state === null) {
        window.location.href = url;
        return;
      }

      login(code, state)
        .then((response) => {
          window.history.replaceState({}, "", window.location.pathname);
          setData(response);
          goTo("/");
        });
      }

    checkAuth();
  }, []);


  return (<></>)
}
