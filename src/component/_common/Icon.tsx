import styled from "styled-components";
import React, {useState} from "react";

interface Props {
  svg: React.FC<React.SVGProps<SVGSVGElement>>,
  onClick?: () => void
}

export const Icon = ({svg, onClick}: Props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
    if (onClick) {
      onClick();
    }
  }

  return (
    <S.StyledIcon as={svg} active={active} onClick={handleClick} />
  )
}

const S = {
  StyledIcon: styled.svg<{ active: boolean }>`
      cursor: pointer;
      width: 50px;
      height: 50px;
      color: ${({theme, active}) => (active ? theme.color.point["400"] : theme.color.black)};
      //transition: color 0.1s ease;
  `,
}