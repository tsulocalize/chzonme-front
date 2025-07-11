import styled from "styled-components";
import {useChannelStore} from "@/store/useChannelStore.ts";
import {InputBox, type InputBoxStyle} from "@/component/_common/InputBox.tsx";
import {theme} from "@/common/styles.ts";
import SearchSVG from "@/assets/image/search.svg?react"
import {useRef, useState} from "react";
import {onToastError} from "@/util/alert.ts";
import {ChannelFuseSearch} from "@/component/_common/ChannelFuseSearch.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";

interface Props {
  border?: boolean;
}

export const ChannelSearch = ({border}: Props) => {
  const isMobile = useIsMobile();
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
      setInputValue("");
    }

    inputRef.current.blur();
    setSelected(false);
  }

  return (
    <>
      <S.Wrapper selected={border ? border : selected} isMobile={isMobile}>
        <S.InputArea onClick={() => setSelected(true)} tabIndex={0} onBlur={() => setSelected(false)}>
          <InputBox
            ref={inputRef}
            value={inputValue}
            setValue = {setInputValue}
            inputBoxStyle={isMobile ? S.MobileInputCss : S.InputCss}
            placeholder={isMobile ? "채널 검색" : "채널명을 입력하세요"}
            onEnter={() => handleSetChannelName(inputValue)}
            setSelected = {setSelected}
          />
        </S.InputArea>
        <S.SearchArea onClick={() => handleSetChannelName(inputValue)}>
          <SearchSVG />
        </S.SearchArea>
      </S.Wrapper>
      {!isMobile && (
        <S.FuseArea>
          <ChannelFuseSearch input={inputValue} onClickEvent={(clickedChannelName) => {
            handleSetChannelName(clickedChannelName);
          }}/>
        </S.FuseArea>
      )}
    </>
  )
}

const S = {
  Wrapper: styled.div.withConfig({shouldForwardProp: (prop) => !["selected", "isMobile"].includes(prop)})<{ selected: boolean, isMobile: boolean }>`
    display: flex;
    width: 100%;
    height: 100%;
    padding: ${({isMobile}) => isMobile ? `0 10px 0 10px` : `0 10px 0 20px`};
    border-radius: 14px;
    background: ${({theme}) => theme.color.white};
    border: 2px ${({selected}) => selected ? `solid black` : "solid transparent"};
    box-sizing: border-box;
  `,
  InputArea: styled.div`
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
  MobileInputCss: {
    background: theme.color.white,
    color: theme.color.black,
    font: theme.font.M(14),
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
    width: 100%;
    z-index: 20;
  `
}
