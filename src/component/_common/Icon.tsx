import styled from "styled-components";
import React from "react";
import {useSizeStore} from "@/store/useSizeStore.ts";

interface Props {
  svg: React.FC<React.SVGProps<SVGSVGElement>>,
  onClick?: () => void,
  isMobile?: boolean
}

export const Icon = ({svg, onClick, isMobile}: Props) => {
  const { ratio } = useSizeStore();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <S.StyledIcon as={svg} onClick={handleClick} ratio={ratio} isMobile={isMobile ? isMobile : false} />
  )
}

const S = {
  StyledIcon: styled.svg.withConfig({shouldForwardProp: (prop) => !["ratio", "isMobile"]
      .includes(prop)})<{ ratio: number, isMobile: boolean }>`
    width: ${({ratio, isMobile}) => isMobile ? `26px` : 35 + 10 * ratio + 'px'};
    height: ${({ratio, isMobile}) => isMobile ? `26px` : 35 + 10 * ratio + 'px'};
    color: ${({theme}) => theme.color.black};
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        color: ${({theme}) => theme.color.point["600"]}
      }
    }  
  `,
}