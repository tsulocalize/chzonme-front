import styled from "styled-components";
import {fontStyle} from "@/util/fontStyle.ts";
import {useSubMenuStore} from "@/store/useSubMenuStore.ts";

export const SubHeaderMenu = () => {
  const { subMenus } = useSubMenuStore();

  return (
    <S.Wrapper>
      {subMenus.map((prop, index) => (
        <S.Menu key={index} onClick={prop.onClick}>{prop.title}</S.Menu>
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 60px;
  `,

  Menu: styled.div`
    background: none;
    color: ${({theme}) => theme.color.mono["400"]};
    ${({theme}) => fontStyle(theme.font.B(18))};
    user-select: none;
    height: 50px;
    line-height: 50px;
    padding: 5px;
    white-space: nowrap;
    transition: color 0.3s ease;

      &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.color.mono["800"]};
    }
  `
}
