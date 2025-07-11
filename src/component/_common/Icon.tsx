import styled from "styled-components";
import React from "react";
import {useSizeStore} from "@/store/useSizeStore.ts";

interface Props {
  svg: React.FC<React.SVGProps<SVGSVGElement>>,
  onClick?: () => void,
}

export const Icon = ({svg, onClick}: Props) => {
  const { ratio } = useSizeStore();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <S.StyledIcon as={svg} onClick={handleClick} ratio={ratio} />
  )
}

const S = {
  StyledIcon: styled.svg.withConfig({shouldForwardProp: (prop) => !["ratio"].includes(prop)})<{ ratio: number }>`
    width: ${({ratio}) => 35 + 10 * ratio + 'px'};
    height: ${({ratio}) => 35 + 10 * ratio + 'px'};
    color: ${({theme}) => theme.color.black};
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        color: ${({theme}) => theme.color.point["600"]}
      }
    }  
  `,
}