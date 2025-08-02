import React, {useEffect, useRef} from "react";
import {useUserStore} from "@/store/useUserStore.ts";
import {tokenLogin} from "@/api/server/login.ts";

interface Props {
  children: React.ReactNode
}

export const ContinuousLoginProvider = ({children}: Props) => {
  const {isLoggedIn, setData} = useUserStore();
  const tried = useRef(false);

  useEffect(() => {
    if (isLoggedIn || tried.current) return;

    const checkLoginCookie = async () => {
      await tokenLogin()
        .then(response => {
          setData(response);
        }).catch(); // ignore
      tried.current = true;
    }
    checkLoginCookie();

  }, []);

  return (<>{children}</>);
}