/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {InputBox, type InputBoxStyle} from "@/component/_common/InputBox.tsx";
import {useVoteStore} from "@/store/useVoteStore.ts";
import {useEffect, useRef, useState} from "react";
import {theme} from "@/common/styles.ts";

export const _UnitPriceInputBox = () => {
  const { setUnitPrice } = useVoteStore();
  const [selected, setSelected] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("1000");

  useEffect(() => {
    const newUnitPrice = parseInt(inputValue);
    if (!isNaN(newUnitPrice) && newUnitPrice > 0) {
      setUnitPrice(newUnitPrice);
    }
  }, [inputValue]);

  return (
    <S.Wrapper selected={selected} id={'step-2'}>
      <S.InputArea onClick={() => setSelected(true)} tabIndex={0} onBlur={() => setSelected(false)}>
        <InputBox
          inputRef={inputRef}
          value={inputValue}
          setValue = {setInputValue}
          inputBoxStyle={S.InputCss}
          setSelected = {setSelected}
        />
      </S.InputArea>
      <S.TextArea>
        치즈 / 1표
      </S.TextArea>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["selected"].includes(prop)})<{ selected: boolean }>`
      display: flex;
      width: 120px;
      height: 40px;
      padding: 0 10px 0 10px;
      border-radius: 15px;
      background: ${({theme}) => theme.color.white};
      border: 2px ${({selected}) => selected ? `solid black` : "solid transparent"};
  `,
  InputArea: styled.div`
      display: flex;
      align-items: center;
      width: 40%;
  `,
  InputCss: {
    background: theme.color.white,
    color: theme.color.black,
    font: theme.font.M(18),
    border: "0",
    textAlign: "right"
  } as InputBoxStyle
  ,
  TextArea: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 60%;
    user-select: none;
    white-space: none;
  `,
}

