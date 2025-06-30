import React from "react";
import styled, {css} from "styled-components";
import {type FontType} from "@/common/styles.ts";
import {fontStyle} from "@/util/fontStyle.ts";

export interface InputBoxStyle {
  background: string;
  color: string;
  font: FontType;
  padding: string;
  border: string;
  borderRadius: string,
  textAlign?: string
}

const inputStyleCss = ({background, color, font, padding, border, borderRadius, textAlign}: InputBoxStyle) => css`
    background: ${background};
    color: ${color};
    ${() => fontStyle(font)};
    padding: ${padding};
    box-sizing: border-box;
    border: ${border};
    border-radius: ${borderRadius};
    text-align: ${textAlign};
`;

interface Props {
  ref: React.RefObject<HTMLInputElement | null>,
  value: string,
  setValue: (value: (((prevState: string) => string) | string)) => void,
  inputBoxStyle: InputBoxStyle,
  placeholder?: string | null,
  onEnter?: () => void,
  setSelected: (value: (((prevState: boolean) => boolean) | boolean)) => void,
}

export const InputBox = ({
                           ref,
                           value,
                           setValue,
                           inputBoxStyle,
                           placeholder,
                           onEnter,
                           setSelected,
                         }: Props) => {
  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && ref.current && onEnter) {
      onEnter();
    }
  }

  const preventUpDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
  }

  return (
    <S.StyledInputBox
      ref={ref}
      value={value}
      inputBoxStyle={inputBoxStyle}
      placeholder={placeholder ?? ""}
      type="text"
      onKeyUp={handleEnter}
      onKeyDown={preventUpDown}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => setSelected(false)}
    />
  )
};

const S = {
  StyledInputBox: styled.input.withConfig({shouldForwardProp: (prop) => !["inputBoxStyle"].includes(prop)})<{
    inputBoxStyle: InputBoxStyle
  }>`
      width: 100%;
      ${({inputBoxStyle}) => inputStyleCss(inputBoxStyle)};

      &:focus {
          outline: none;
          border: none;
      }
  `
}

