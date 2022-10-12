import styled from "styled-components";

interface ContainerProps {
  size: number;
}

interface SvgProps {
  fillColor: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(p) => `${p.size}px`};
`

export const Svg = styled.svg<SvgProps>`
  fill: ${(p) => `var(${p.fillColor})`};
`
