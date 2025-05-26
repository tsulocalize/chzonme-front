import {css} from "styled-components";

export const fontStyle = ({
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
}: {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
}) => css`
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  letter-spacing: ${(parseFloat(letterSpacing) / 100 * parseFloat(fontSize)).toFixed(1)}px;
`;
