import {useTour} from "@reactour/tour";
import styled from "styled-components";
import {useGuidanceStore} from "@/store/useGuidanceStore.ts";

export const GuidanceCloseButton = () => {
  const { setIsOpen, currentStep } = useTour();
  const { steps, setWatched } = useGuidanceStore();

  const handleOnClick = () => {
    setIsOpen(false);
    setWatched(true);
  }

  return currentStep == steps.length - 1 ? (
    <S.Wrapper onClick={handleOnClick}>
      ❌
    </S.Wrapper>
    ) : (
      <></>
  )
}

const S = {
  Wrapper: styled.div`
    position: absolute;
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    top: 14px;
    right: 14px;
    width: 10px;
    height: 10px;
    background-color: transparent;
    cursor: pointer;
  `
}
