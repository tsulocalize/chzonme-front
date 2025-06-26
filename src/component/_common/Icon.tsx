import styled from "styled-components";
import React, {useState} from "react";
import {useSizeStore} from "@/store/useSizeStore.ts";

interface Props {
  svg: React.FC<React.SVGProps<SVGSVGElement>>,
  onClick?: () => void
}

export const Icon = ({svg, onClick}: Props) => {
  const [active, setActive] = useState(false);
  const { ratio } = useSizeStore();

  const handleClick = () => {
    setActive(!active);
    if (onClick) {
      onClick();
    }
  }

  return (
    <S.StyledIcon as={svg} active={active} onClick={handleClick} ratio={ratio} />
  )
}

const S = {
  StyledIcon: styled.svg.withConfig({shouldForwardProp: (prop) => !["active", "ratio"].includes(prop)})<{ active: boolean, ratio: number }>`
    width: ${({ratio}) => 35 + 10 * ratio + 'px'};
    height: ${({ratio}) => 35 + 10 * ratio + 'px'};
    color: ${({theme, active}) => (active ? theme.color.point["400"] : theme.color.black)};
    cursor: pointer;
  `,
}