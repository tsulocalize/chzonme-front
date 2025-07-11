import styled from "styled-components";
import React, {useState} from "react";
import {useSizeStore} from "@/store/useSizeStore.ts";

interface Props {
  svg: React.FC<React.SVGProps<SVGSVGElement>>,
  onClick?: () => void,
  isMobile?: boolean
}

export const ToggleIcon = ({svg, onClick, isMobile}: Props) => {
  const [active, setActive] = useState(false);
  const { ratio } = useSizeStore();

  const handleClick = () => {
    setActive(!active);
    if (onClick) {
      onClick();
    }
  }

  return (
    <S.StyledIcon as={svg} active={active} onClick={handleClick} ratio={ratio} isMobile={isMobile ? isMobile : false} />
  )
}

const S = {
  StyledIcon: styled.svg.withConfig({shouldForwardProp: (prop) => !["active", "ratio", "isMobile"]
      .includes(prop)})<{ active: boolean, ratio: number, isMobile: boolean }>`
    width: ${({ratio, isMobile}) => isMobile ? `26px` : 35 + 10 * ratio + 'px'};
    height: ${({ratio, isMobile}) => isMobile ? `26px` : 35 + 10 * ratio + 'px'};
    color: ${({theme, active}) => (active ? theme.color.point["400"] : theme.color.black)};
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        color: ${({theme}) => theme.color.point["600"]}
      }
    }
  `,
}