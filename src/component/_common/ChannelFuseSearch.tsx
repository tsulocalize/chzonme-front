import Fuse from "fuse.js";
import React, {useEffect, useRef, useState} from "react";
import {getAllChannels} from "@/api/server/channel.ts";
import styled from "styled-components";
import {_ChannelBox} from "@/component/_common/_ChannelBox.tsx";


interface Props {
  input: string,
  onClickEvent: (input: string) => void,
  fuzied?: React.MutableRefObject<boolean>
}

export const ChannelFuseSearch = ({input, onClickEvent, fuzied}: Props) => {
  const fuseRef = useRef<Fuse<string> | null>(null);
  const [fuseChannels, setFuseChannels] = useState<string[]>([]);

  useEffect(() => {
    const fuseLazyLoading = async () => {
      const channels: string[] = await getAllChannels();
      fuseRef.current = new Fuse(channels, {
        threshold: 0.3,
        ignoreLocation: true,
      })
    }

    fuseLazyLoading();
  }, []);

  useEffect(() => {
    setFuseChannels(fuseRef.current?.search(input, {limit: 5}).map(result => result.item) ?? []);
  }, [input]);

  return (
    <>
      {fuseChannels.length === 0 ? <></> :
        <S.Wrapper>
          <_ChannelBox fuzied={fuzied} fuseChannels={fuseChannels} onClickEvent={onClickEvent}/>
        </S.Wrapper>
      }
    </>
  )
}

const S = {
  Wrapper: styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      background: ${({theme}) => theme.color.white};
      border: 2px solid ${({theme}) => theme.color.mono["100"]};
      border-radius: 10px;
      margin-top: 6px;
  `,
}

