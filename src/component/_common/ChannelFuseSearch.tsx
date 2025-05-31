import Fuse from "fuse.js";
import {useEffect, useRef, useState} from "react";
import {getAllChannels} from "@/api/server/channel.ts";
import styled from "styled-components";
import {_ChannelBox} from "@/component/_common/_ChannelBox.tsx";

interface Channel {
  channelName: string;
}

interface Props {
  input: string;
  onClickEvent: (input: string) => void;
}

export const ChannelFuseSearch = ({input, onClickEvent}: Props) => {
  const fuseRef = useRef<Fuse<Channel> | null>(null);
  const [fuseChannels, setFuseChannels] = useState<Channel[]>([]);

  useEffect(() => {
    const fuseLazyLoading = async () => {
      const channels: Channel[] = await getAllChannels();
      fuseRef.current = new Fuse(channels, {
        keys: ["channelName"],
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
          <_ChannelBox fuseChannels={fuseChannels} onClickEvent={onClickEvent} />
        </S.Wrapper>
      }
    </>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    background: ${({theme}) => theme.color.white};
    border: 2px solid ${({theme}) => theme.color.mono["100"]};
    border-radius: 10px;
    margin-top: 6px;
  `,
}

