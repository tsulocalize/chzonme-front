/* eslint-disable react-hooks/rules-of-hooks */

import {useEffect, useState} from "react";
import {fontStyle} from "@/util/fontStyle.ts";
import styled from "styled-components";

interface Props {
  fuseChannels: string[]
  onClickEvent: (input: string) => void;
}

export const _ChannelBox = ({fuseChannels, onClickEvent}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [keyLock, setKeyLock] = useState(false);

  useEffect(() => {
    const keyUpHandler = (e:KeyboardEvent) => {
      if (keyLock) return;
      if (e.key === "ArrowDown") {
        setKeyLock(true);
        setSelectedIndex((prev) => Math.min(prev + 1, fuseChannels.length - 1));
        setTimeout(() => setKeyLock(false), 90);
        return;
      }
      if (e.key === "ArrowUp") {
        setSelectedIndex((prev) => Math.max(-1, prev - 1));
        return;
      }
      if (e.key === "Enter") {
        if (selectedIndex === -1) return;
        onClickEvent(fuseChannels[selectedIndex] ?? "");
        setSelectedIndex(-1);
      }
    }

    document.addEventListener('keyup', keyUpHandler);

    return () => {
      document.removeEventListener('keyup', keyUpHandler);
    }
  }, [keyLock, selectedIndex, fuseChannels]);

  return (
    <>
      {fuseChannels.map((fuseChannel, index) =>
        <S.ChannelBox
          key={index}
          onMouseOver={() => setSelectedIndex(index)}
          onMouseOut={() => setSelectedIndex(-1)}
          onClick={() => {
            if (selectedIndex === -1) return;
            onClickEvent(fuseChannels[selectedIndex] ?? "");
            setSelectedIndex(-1);
          }}
          selected={selectedIndex === index}
        >
          {fuseChannel}
        </S.ChannelBox>
      )}
    </>
  )
}

const S = {
  ChannelBox: styled.div.withConfig({shouldForwardProp: (prop) => !["selected"].includes(prop)})<{ selected: boolean }>`
      display: flex;
      align-items: center;
      ${({theme}) => fontStyle(theme.font.M(18))};
      padding: 6px 18px 6px 20px;
      border-bottom: 2px white solid;
      border-radius: 10px;
      background: ${({theme, selected}) => selected ? theme.color.point["200"] : ""};
      user-select: none;
  `
}