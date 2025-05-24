import 'styled-components';
import { ThemeType } from '@/common/styles.ts';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}