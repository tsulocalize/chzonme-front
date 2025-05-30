import 'styled-components';
import { ThemeType } from '@/common/styles.ts';
import React from "react";

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}