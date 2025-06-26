import React, {useEffect} from "react";
import {useSizeStore} from "@/store/useSizeStore.ts";

interface Props {
  children: React.ReactNode
}

export const SizeProvider = ({children}: Props) => {
  const { setWindowWidth } = useSizeStore();

  useEffect(() => {
    const resize = () => {
      setWindowWidth(window.innerWidth);
    }

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);


  return (<>{children}</>);
}