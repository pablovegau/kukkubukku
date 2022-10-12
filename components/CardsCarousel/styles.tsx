import styled from "styled-components";
import { typography } from "../../styles/mixins";

export const SectionHeader = styled.h3`
  margin-bottom: var(--kkbk--spacing--16);
  margin-left: var(--kkbk--spacing--24);
  font-family: var(--kkbk--font--title);
  ${typography.heading.five}
`;

export const Carousel = styled.div`
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;

  /* Firefox hide scrollbar */
  scrollbar-width: none;
  /* Chrome hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  margin-left: var(--kkbk--spacing--24);


  &:last-child {
    margin-right: var(--kkbk--spacing--24);
  }
`;
