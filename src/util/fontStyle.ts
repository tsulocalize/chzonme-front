import {css} from "styled-components";
import type {FontType} from "@/common/styles.ts";

export const fontStyle = ({fontSize, fontWeight, lineHeight, letterSpacing}:FontType) => css`
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  letter-spacing: ${(parseFloat(letterSpacing) / 100 * parseFloat(fontSize)).toFixed(1)}px;
`;
