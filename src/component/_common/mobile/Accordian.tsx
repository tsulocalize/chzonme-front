import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import DownArrowSVG from "@/assets/image/mobile/downArrow.svg?react"
import {fontStyle} from "@/util/fontStyle.ts";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Accordian = ({title, children}: Props) => {
  const [ open, setOpen ] = useState(false);
  const [ height, setHeight ] = useState(0);
  const childrenRef = useRef<HTMLDivElement>(null);

  const handleOnClick = () => {
    setOpen(!open);
  }

  useEffect(() => {
    if (childrenRef.current) {
      if (open) {
        setHeight(childrenRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [open]);

  return (
    <S.Wrapper>
      <S.Head>
        <S.Title>
          {title}
        </S.Title>
        <DownArrowSVG onClick={handleOnClick}
                      style={{
                        padding: "16px",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",}}
        />
      </S.Head>
      <S.Children ref={childrenRef} height={height}>
        {children}
      </S.Children>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    width: 100%;
  `,
  Head: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background: ${({theme}) => theme.color.white};
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
    ${({theme}) => fontStyle(theme.font.B(16))};
  `,
  Children: styled.div.withConfig({shouldForwardProp: (prop) => !["height"].includes(prop)})<{ height: number }>`
    height: ${({height}) => height + 'px'};
    overflow: hidden;
    transition: height 0.3s ease;
  `,
}
