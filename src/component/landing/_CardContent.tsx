/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import img from "@/assets/image/logo-black.svg"
import {Title} from "@/component/_common/Title.tsx";
import {theme} from "@/common/styles.ts";
import {useSizeStore} from "@/store/useSizeStore.ts";

interface Props {
  mainText: string;
  subText: string;
}

export const _CardContent = ({mainText, subText}: Props) => {
  const { ratio } = useSizeStore();

  return (
    <S.Wrapper ratio={ratio}>
      <Title mainText={mainText} mainFont={theme.font.M(32)}
             subText={subText} subFont={theme.font.M(16)} gap={18} />
      <S.Image src={img}/>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ ratio: number }>`
    display: flex;
    flex-direction: column;
    width: ${({ratio}) => 400 * ratio + 'px'};
    height: ${({ratio}) => 400 * ratio + 'px'};
    background: ${({theme}) => theme.color.white};
    border-radius: 12px;
    padding: 32px 24px 32px 24px;
    box-sizing: border-box;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    flex-shrink: 0
  `,

  Image: styled.img`
    width: 80%;
    margin-top: auto;
    align-self: center;
  `
}