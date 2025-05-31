import styled from "styled-components";
import {useChannelStore} from "@/store/useChannelStore.ts";
import {InputBox, type InputBoxStyle} from "@/component/_common/InputBox.tsx";
import {theme} from "@/common/styles.ts";
import SearchSVG from "@/assets/image/search.svg?react"
import {useRef, useState} from "react";
import {onToastError, onToastSuccess} from "@/util/alert.ts";
import {ChannelFuseSearch} from "@/component/_common/ChannelFuseSearch.tsx";


export const ChannelSearch = () => {
  const { setChannelName } = useChannelStore()
  const [selected, setSelected] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const handleSetChannelName = (input: string) => {
    if (!inputRef.current) return;
    if (input === "") {
      onToastError("채널명을 입력하세요");
    } else {
      setChannelName(input);
      onToastSuccess(input)
      setInputValue("");
    }

    inputRef.current.blur();
    setSelected(false);
  }

  return (
    <S.OutsideWrapper>
      <S.Wrapper selected={selected}>
        <S.InputArea selected={selected} onClick={() => setSelected(true)} tabIndex={0} onBlur={() => setSelected(false)}>
          <InputBox
            ref={inputRef}
            value={inputValue}
            setValue = {setInputValue}
            inputBoxStyle={S.InputCss}
            placeholder={"채널명을 입력하세요"}
            onEnter={() => handleSetChannelName(inputValue)}
            setSelected = {setSelected}
          />
        </S.InputArea>
        <S.SearchArea onClick={() => handleSetChannelName(inputValue)}>
          <SearchSVG />
        </S.SearchArea>
      </S.Wrapper>
      <S.FuseArea>
        <ChannelFuseSearch input={inputValue} onClickEvent={(clickedChannelName) => {
          handleSetChannelName(clickedChannelName);
        }}/>
      </S.FuseArea>
    </S.OutsideWrapper>
  )
}

const S = {
  OutsideWrapper: styled.div`
      position: relative;
      margin-left: auto;
  `,
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["selected"].includes(prop)})<{ selected: boolean }>`
      display: flex;
      width: 300px;
      height: 44px;
      padding: 0 10px 0 20px;
      border-radius: 15px;
      background: ${({theme}) => theme.color.white};
      border: 2px ${({selected}) => selected ? `solid black` : "solid transparent"};
  `,
  InputArea: styled.div.withConfig({shouldForwardProp: (prop) => !["selected"].includes(prop)})<{ selected: boolean }>`
      display: flex;
      align-items: center;
      width: 80%;
  `,
  InputCss: {
    background: theme.color.white,
    color: theme.color.black,
    font: theme.font.M(18),
    border: "0",
  } as InputBoxStyle
  ,
  SearchArea: styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20%;
      cursor: pointer;
  `,
  FuseArea: styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 20;
  `
}
