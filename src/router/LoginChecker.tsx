import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useUserStore} from "@/store/useUserStore.ts";
import Swal from "sweetalert2";
import {login, tokenLogin} from "@/api/server/login.ts";
import {goTo} from "@/router/Navigator.tsx";

export const LoginChecker = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const url = `https://chzzk.naver.com/account-interlock?clientId=${import.meta.env.VITE_CLIENT_ID}&redirectUri=${import.meta.env.VITE_REDIRECT}&state=${import.meta.env.VITE_STATE}`;
  const { isLoggedIn } = useUserStore();

  useEffect(() => {
    const checkAuth = async () => {
      if (isLoggedIn) {
        Swal.fire({title: "이미 로그인 되어 있습니다.", icon: "error"})
          .then(() => goTo("/"));
      }

      try {
        const userData = await tokenLogin();
        useUserStore().login(userData);
        goTo("/");
      } catch (error) {
        // do login below
      }

      if (code === null || state === null) {
        window.location.href = url;
        return;
      }

      login(code, state)
        .then((response) => {
          window.history.replaceState({}, "", window.location.pathname);
          useUserStore().login(response);
          goTo("/");
        });
      }

    checkAuth();
  }, []);


  return (<></>)
}
