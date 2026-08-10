/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import {useSizeStore} from "@/store/useSizeStore.ts";

const EXTENSION_URL =
  "https://chromewebstore.google.com/detail/%EC%B9%98%EC%A6%88%EC%98%A8%EB%AF%B8/jniheeboghfdhagmmfidndbohakfipdi";

const Dot = styled.span.withConfig({ shouldForwardProp: (prop) => !["ratio"].includes(prop) })<{ ratio: number }>`
  width: ${({ ratio }) => 6 * ratio + "px"};
  height: ${({ ratio }) => 6 * ratio + "px"};
  border-radius: 50%;
  background: ${({ theme }) => theme.color.point[500]};
  flex-shrink: 0;
`;

const Text = styled.span.withConfig({ shouldForwardProp: (prop) => !["ratio"].includes(prop) })<{ ratio: number }>`
  ${({ theme }) => theme.font.M(14)};
  font-size: ${({ ratio }) => 14 * ratio + "px"};
  color: ${({ theme }) => theme.color.mono[500]};
`;

const Arrow = styled.span.withConfig({ shouldForwardProp: (prop) => !["ratio"].includes(prop) })<{ ratio: number }>`
  ${({ theme }) => theme.font.M(14)};
  font-size: ${({ ratio }) => 14 * ratio + "px"};
  color: ${({ theme }) => theme.color.mono[400]};
  transition: transform 0.2s ease, color 0.2s ease;
`;

const Link = styled.a.withConfig({ shouldForwardProp: (prop) => !["ratio"].includes(prop) })<{ ratio: number }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ ratio }) => 8 * ratio + "px"};
  width: fit-content;
  padding: ${({ ratio }) => `${7 * ratio}px ${14 * ratio}px`};
  border-radius: ${({ ratio }) => 999 * ratio + "px"};
  background: ${({ theme }) => theme.color.mono[50]};
  border: 1px solid ${({ theme }) => theme.color.mono[100]};
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.color.point[100]};
    border-color: ${({ theme }) => theme.color.point[300]};
    box-shadow: 0 ${({ ratio }) => 2 * ratio + "px"} ${({ ratio }) => 12 * ratio + "px"} rgba(255, 179, 0, 0.18);
  }

  &:hover ${Text} {
    color: ${({ theme }) => theme.color.mono[700]};
  }

  &:hover ${Arrow} {
    color: ${({ theme }) => theme.color.point[800]};
    transform: translateX(${({ ratio }) => 3 * ratio + "px"});
  }
`;

export const _ExtensionLink = () => {
  const { ratio } = useSizeStore();

  return (
    <Link ratio={ratio} href={EXTENSION_URL} target="_blank" rel="noopener noreferrer">
      <Dot ratio={ratio} />
      <Text ratio={ratio}>치지직에서 바로 띄우는 치즈온미</Text>
      <Arrow ratio={ratio}>→</Arrow>
    </Link>
  );
};
