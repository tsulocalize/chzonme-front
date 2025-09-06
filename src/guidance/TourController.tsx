import {useTour} from "@reactour/tour";
import React, {useEffect} from "react";
import {useGuidanceStore} from "@/store/useGuidanceStore.ts";

interface Props {
  children: React.ReactNode
}

export const TourController = ({children}: Props) => {
  const { setIsOpen } = useTour();
  const { watched } = useGuidanceStore();


  useEffect(() => {
    if (watched) return;
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // DOM 렌더 후 약간 딜레이

    return () => clearTimeout(timeout);
  }, [watched]);

  return (
    <>{children}</>
  );
}