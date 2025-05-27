import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

let GLOBAL_NAVIGATE: (path: string) => void;

interface Props {
  children: React.ReactNode
}

export const Navigator = ({children}: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    GLOBAL_NAVIGATE = navigate; // 전역 navigate 등록
  }, [navigate]);

  return (<>{children}</>)
}

export const goTo = (path: string) => {
  if (!GLOBAL_NAVIGATE) throw new Error('navigate 함수가 아직 설정되지 않았어요');
  GLOBAL_NAVIGATE(path);
};