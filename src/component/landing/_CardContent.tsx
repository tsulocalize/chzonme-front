/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import img from "@/assets/image/logo-black.svg"
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import {useSizeStore} from "@/store/useSizeStore.ts";
import {useIsMobile} from "@/hook/useIsMobile.ts";

interface Props {
  mainText: string;
  subText: string;
}

export const _CardContent = ({mainText, subText}: Props) => {
  const { ratio } = useSizeStore();
  const isMobile = useIsMobile();

  return (
    <S.Wrapper ratio={ratio} isMobile={isMobile}>
      <Title mainText={mainText} mainFont={theme.font.M(isMobile ? 18 : 32)}
             subText={subText} subFont={theme.font.M(isMobile ? 12 : 16)} gap={isMobile ? 4 : 18} />
      <S.Image src={img} isMobile={isMobile}/>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio", "isMobile"].includes(prop)})<{ ratio: number, isMobile: boolean }>`
    display: flex;
    flex-direction: column;
    width: ${({ratio, isMobile}) => isMobile ? `100%` : 370 * ratio + 'px'};
    height: ${({ratio, isMobile}) => isMobile ? `250px` : 370 * ratio + 'px'};
    background: ${({theme}) => theme.color.white};
    border-radius: 12px;
    padding: ${({isMobile}) => isMobile ? `16px 12px` : `32px 24px`};
    box-sizing: border-box;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    flex-shrink: 0
  `,

  Image: styled.img.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{ isMobile: boolean }>`
    ${({isMobile}) => isMobile ? `height: 50%` : `width: 80%`};
    margin-top: auto;
    align-self: center;
  `
}