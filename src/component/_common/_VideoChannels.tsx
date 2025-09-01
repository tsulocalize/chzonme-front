/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {useEffect, useState} from "react";
import {getVideoChannels} from "@/api/server/video.ts";
import {useChannelStore} from "@/store/useChannelStore.ts";
import {fontStyle} from "@/util/fontStyle.ts";
import {useSubMenuStore} from "@/store/useSubMenuStore.ts";

export const _VideoChannels = () => {
  const [lastFetched, setLastFetched] = useState<number | null>(null);
  const [menuItems, setMenuItems] = useState<string[]>([]);
  const { setChannelName } = useChannelStore();
  const { closeMenu } = useSubMenuStore();

  const handleGetVideoDonating = async () => {
    const result: string[] = await getVideoChannels();
    console.log(result);
    if (!result) return false;
    setMenuItems(result);
    return true;
  }

  useEffect(() => {
    const currentTime = new Date().getTime();

    if (lastFetched === null || currentTime - lastFetched > 60000) {
      handleGetVideoDonating().then(fetchSuccess => {
        if (fetchSuccess) {
          setLastFetched(currentTime);
        }});
    }
  }, []);

  const handleMenuClick = (channelName: string) => {
    setChannelName(channelName);
    closeMenu();
  };

  return (
    <S.Wrapper>
      <S.DropdownList>
        {menuItems.map((item, index) => (
          <S.DropdownItem
            key={index}
            onClick={() => handleMenuClick(item)}
          >
            {item}
          </S.DropdownItem>
        ))}
      </S.DropdownList>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 250px;
    z-index: 1000;

  `,
  DropdownList: styled.ul`
    position: absolute;
    width: 100%;
    height: 400px;
    max-height: 400px;
    margin-top: 0;
    background-color: white;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* shadow-lg */
    padding: 4px 0 4px 10px;
    transition: all 0.3s;
    transform-origin: top;
    list-style: none;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 12px;
    }

    /* 스크롤바 막대 (thumb) */
    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.color.mono["100"]};
        border-radius: 10px;
        border: 2px solid white;
    }

    /* 스크롤바 트랙 */
    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 8px;
        margin: 2px 0 2px 0;
    }
  `,
  DropdownItem: styled.li`
    padding: 8px 4px;
    min-height: 24px;
    ${({theme}) => fontStyle(theme.font.M(16))}
    cursor: pointer;
    white-space: normal;
    word-break: break-all;
      
    &:hover {
        background-color: #e5e7eb; /* gray-200 */
    }
  `,
}
