import Joyride, {type CallBackProps, STATUS} from "react-joyride";
import {useGuidanceStore} from "@/store/useGuidanceStore.ts";

export const Guidance = () => {
  const { steps, watched, setWatched } = useGuidanceStore();

  const handleCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === STATUS.FINISHED) {
      setWatched(true);
    }
  };

  return (
    <Joyride
      steps={steps}
      run={!watched}
      continuous={true}
      disableScrolling={true}
      callback={handleCallback}
      locale={{
        back: '이전',
        close: '닫기',
        last: '완료',
        next: '다음',
        skip: '건너뛰기',
      }}
    />
  )
}