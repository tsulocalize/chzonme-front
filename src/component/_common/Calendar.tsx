import {DayPicker} from "react-day-picker";
import styled from "styled-components";
import 'react-day-picker/dist/style.css'

interface Props {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export const Calendar = ({date, setDate}: Props)  => {
  return (
    <S.Wrapper>
      <DayPicker
        animate
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({theme}) => theme.color.mono["100"]};
    border-radius: 8px;
    border: ${({theme}) => `2px ${theme.color.black}`};
    padding: 8px 16px;
    z-index: 999;

    /* 테마 색상 커스터마이즈 */
    .rdp-root {
      --rdp-accent-color: ${({theme}) => theme.color.point["900"]};
    };
    .rdp-day_button:hover {
      border: 2px solid ${({theme}) => theme.color.point["900"]};
    }
  `,
}
