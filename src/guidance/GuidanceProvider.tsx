import {TourProvider} from "@reactour/tour";
import React from "react";
import {useGuidanceStore} from "@/store/useGuidanceStore.ts";
import {GuidanceCloseButton} from "@/guidance/GuidanceCloseButton.tsx";
import {TourController} from "@/guidance/TourController.tsx";

interface Props {
  children: React.ReactNode
}

export const GuidanceProvider = ({children}: Props) => {
  const { steps, currentPath } = useGuidanceStore();

  return (
    <TourProvider steps={steps} key={currentPath} showCloseButton={true} components={{
      Close: GuidanceCloseButton
    }} styles={{
      popover: (base) => ({
        ...base,
        maxWidth: '250px',
        fontSize: '14px',
        fontWeight: 600,
        paddingRight: '36px',
        paddingLeft: '36px',
      }),
    }}>
      <TourController>
        {children}
      </TourController>
    </TourProvider>
  );
}