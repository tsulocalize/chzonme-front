/* eslint-disable react-hooks/rules-of-hooks */

import {useState} from "react";
import {onError} from "@/util/alert.ts";
import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const _CodeSnippet = () => {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 후 상태 초기화
    } catch (error) {
      onError("복사에 실패했습니다.");
      console.error(error);
    }
  };

  return (
    <S.Wrapper isMobile={isMobile}>
      <S.Pre>{code}</S.Pre>
      <S.Button onClick={copyToClipboard} isMobile={isMobile}>
        {copied ? "복사됨!" : "복사"}
      </S.Button>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    position: relative;
    background: ${({theme}) => theme.color.mono["700"]};
    color: ${({theme}) => theme.color.mono["50"]};
    ${({theme, isMobile}) => fontStyle(theme.font.M(isMobile ? 12 : 16))};
    padding: 16px;
    border-radius: 10px;
  `,
  Pre: styled.pre`
    overflow: auto;
  `,
  Button: styled.button.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    position: absolute;
    top: 14px;
    right: 16px;
    background: ${({theme}) => theme.color.mono["400"]};
    ${({theme, isMobile}) => fontStyle(theme.font.R(isMobile ? 14 : 18))};
    padding: 4px 8px 4px 8px;
    border-radius: 4px;

    @media (hover: hover) {
      &:hover {
        background: ${({theme}) => theme.color.mono["300"]};
      }
    }
  `,
}

const code =
  `body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }
  iframe[src*="www.youtube-nocookie.com"] {
  position: relative;
  width: 1600px !important;
  height: 900px !important;
  top: 700px;
  }
  iframe[title*="CHZZK Player"] {
  position: relative;width: 1600px !important;
  height: 2300px !important;
  clip-path: inset(650px 0px 650px 0px);
  z-index: 1;
  }
  [class^="overlay_donation_alarm"] {
  position: relative;top: -690px;
  }
  [class^="overlay_donation_animation"] {
  position: relative;
  top: 625px;
  }
  [class^="overlay_donation_contents"] {
  position: absolute;
  top: 1690px !important;
  width: 1600px !important;
  z-index: 999;
  transform: scale(1.5);
  font-size: 32px !important;
  }
  [class*="overlay_donation_play_video"] {font-size: 24px !important;margin-botton:20px;}
  [class^="overlay_donation_video_title"] {margin-top: 20px !important;}`;
