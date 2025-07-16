/* eslint-disable react-hooks/rules-of-hooks */

import {useVoteStore} from "@/store/useVoteStore.ts";
import {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import triggerConfetti from "@/util/triggerConfetti.ts";
import {_Controller} from "@/component/roulette/_Controller.tsx";
import {fontStyle} from "@/util/fontStyle.ts";
import PinSVG from "@/assets/image/pin.svg?react";
import {_UnitPriceInputBox} from "@/component/roulette/_UnitPriceInputBox.tsx";
import {useIsMobile} from "@/hook/useIsMobile.ts";

export const _Roulette = () => {
  const isMobile = useIsMobile();
  const { votes, winningVote, setWinningVote, setTrigger, unitPrice } = useVoteStore();
  const filteredVotes = votes
    .filter((vote) => Math.floor(vote.cheese / unitPrice) > 0)
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [stopRequested, setStopRequested] = useState(false);
  const [angle, setAngle] = useState(0);
  const [speed, setSpeed] = useState(0);

  // 각 옵션의 비율을 기반으로 각도 계산
  const calculateAngles = () => {
    const total = filteredVotes.reduce((sum, vote) => sum + Math.floor(vote.cheese / unitPrice), 0);
    return filteredVotes.map(vote => (Math.floor(vote.cheese / unitPrice) / total) * 360);
  };

  const angles = calculateAngles();

  useEffect(() => {
    drawWheel();
  }, [filteredVotes]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (isSpinning && canvas) {
      canvas.style.transform = `rotate(${angle}deg)`; // 각도에 따라 룰렛 회전
      const animationFrame = requestAnimationFrame(spin); // 다음 프레임에서 spin 함수 호출
      return () => cancelAnimationFrame(animationFrame); // 이전 애니메이션 프레임 취소
    }
  }, [isSpinning, angle, speed]);

  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const [cw, ch] = [canvas.width / 2, canvas.height / 2];
    let startAngle = -Math.PI / 2; // 시작 각도 (12시 방향)

    ctx?.clearRect(0, 0, canvas.width, canvas.height); // Canvas 초기화

    ctx?.save();
    ctx?.translate(cw, ch); // 중앙으로 이동

    for (let i = 0; i < filteredVotes.length; i++) {
      const endAngle = startAngle - (angles[i] * Math.PI) / 180;
      ctx.beginPath();
      ctx.fillStyle = OPTIONS_COLORS[i % OPTIONS_COLORS.length]; // 섹션 색상 설정
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, cw, endAngle, startAngle); // 섹션의 호를 그림
      ctx.fill();
      ctx.closePath();

      // 섹션의 중앙 각도 계산
      const angle = endAngle + (angles[i] * Math.PI) / 360 + 0.08;
      ctx.save();
      ctx.translate(Math.cos(angle) * (cw - 150), Math.sin(angle) * (cw - 150)); // 텍스트 위치 계산
      ctx.rotate(angle); // 텍스트 회전
      ctx.fillStyle = "#fff"; // 텍스트 색상 설정
      ctx.font = "bold 1.4rem Pretendard"; // 텍스트 폰트 설정
      ctx.textAlign = "left"; // 텍스트 정렬
      ctx.fillText(filteredVotes[i].name, 0, 0); // 옵션 텍스트 출력
      ctx.restore();

      startAngle = endAngle; // 다음 섹션의 시작 각도 업데이트
    }

    ctx.restore(); // 초기 회전 상태 복원
  };

  const findWinningVote = useCallback(() => {
    const totalAngles = angles.reduce((sum, angle) => sum + angle, 0);
    const normalizedAngle = ((angle % totalAngles) + totalAngles) % totalAngles; // 각도를 0~totalAngles로 정규화
    let cumulativeAngle = 0;

    for (let i = 0; i < angles.length; i++) {
      cumulativeAngle += angles[i];
      if (normalizedAngle < cumulativeAngle) {
        setWinningVote(filteredVotes[i].name); // 선택된 옵션 설정
        break;
      }
    }
  }, [angle, filteredVotes, angles]);

  const spin = () => {
    setAngle((prevAngle) => (prevAngle + speed) % 360); // 각도를 증가시켜 룰렛 회전

    findWinningVote();

    if (stopRequested) {
      setSpeed((prevSpeed) => {
        const newSpeed = prevSpeed * 0.996; // 서서히 속도 감소
        if (newSpeed < 0.01) {
          setIsSpinning(false); // 회전 중지
          setStopRequested(false); // 멈추기 요청 리셋
          triggerConfetti();
          setWinningVote(winningVote);
          setTrigger(true);
          setTimeout(() => {
            setTrigger(false);
          }, 7000);
          return 0;
        }
        return newSpeed; // 감소된 속도 반환
      });
    }
  };

  const handleRotate = () => {
    reset();
    setIsSpinning(true); // 회전 상태로 설정
    setWinningVote(""); // 회전 시작 시 선택된 옵션 초기화
  };

  const handleStop = () => {
    setStopRequested(true); // 멈추기 요청
  };

  const reset = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.transform = "rotate(0deg)";
    setAngle(0); // 각도 상태 초기화
    setSpeed(20); // 회전 속도를 설정
  };

  return (
    <S.WheelContainer>
      <S.SelectedOption isMobile={isMobile}>{winningVote}</S.SelectedOption>
      <S.CanvasContainer isMobile={isMobile}>
        <S.Wheel
          ref={canvasRef}
          width={500}
          height={500} />
        <S.Pin as={PinSVG} />
      </S.CanvasContainer>
      <S.InnerWrapper>
        <_UnitPriceInputBox />
        <_Controller handleRotate={handleRotate} handleStop={handleStop}/>
      </S.InnerWrapper>
    </S.WheelContainer>
  );
}

const S = {
  WheelContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  SelectedOption: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    display: flex;
    justify-content: center;
    color: ${({theme}) => theme.color.point["900"]};
    ${({theme, isMobile}) => fontStyle(theme.font.M(isMobile ? 24 : 30))};
    width: ${({isMobile}) => isMobile ? `100%` : `500px`};
    height: ${({isMobile}) => isMobile ? `36px` : `50px`};
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
  `,
  CanvasContainer: styled.div.withConfig({shouldForwardProp: (prop) => !["isMobile"].includes(prop)})<{isMobile: boolean}>`
    position: relative;
    width: ${({isMobile}) => isMobile ? `100%` : `500px`};
    height: ${({isMobile}) => isMobile ? `100%` : `500px`};
    max-width: 500px;
    max-height: 500px;
    overflow: hidden;
    display: flex;
    justify-items: center;
    align-items: center;
    border-radius: 50%;
    border: 3px solid black;
  `,
  Wheel: styled.canvas`
    width: 100%;
    height: 100%;
    will-change: transform;
  `,
  Pin: styled.svg`
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;
  `,
  InnerWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `
}

const OPTIONS_COLORS = [
  "#FF8A80", // coral red
  "#FFB74D", // warm orange
  "#FFD54F", // sunflower yellow
  "#DCE775", // wasabi green
  "#AED581", // spring green
  "#81C784", // mint green
  "#4DB6AC", // seafoam teal
  "#4FC3F7", // sky blue
  "#64B5F6", // ocean blue
  "#7986CB", // periwinkle blue
  "#BA68C8", // lilac
  "#CE93D8", // orchid
  "#F48FB1", // pink rose
  "#FFAB91", // salmon
  "#A1887F", // taupe brown
  "#E6EE9C", // lemon-lime
  "#B0BEC5", // soft gray blue
  "#90A4AE", // muted slate
];



