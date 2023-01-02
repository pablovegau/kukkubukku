import styled from 'styled-components'
import { typography } from '../../styles/mixins'

export const Container = styled.div`
  position: relative;
`

export const SectionHeader = styled.h3`
  margin-bottom: var(--kkbk--spacing--16);
  margin-left: var(--kkbk--spacing--24);
  color: var(--kkbk--color--text--primary);
  font-family: var(--kkbk--font--title);
  ${typography.heading.five}
`

export const Carousel = styled.div`
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
  align-items: start;

  /* Firefox hide scrollbar */
  scrollbar-width: none;
  /* Chrome hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
`

export const CardWrapper = styled.div`
  padding-left: var(--kkbk--spacing--24);
  scroll-snap-align: start;
  scroll-behavior: smooth;

  &:last-child {
    margin-right: var(--kkbk--spacing--24);
  }
`

export const Button = styled.button`
  visibility: hidden;
  position: absolute;
  top: 44px;
  z-index: 1;
  height: 178px;
  width: 20px;
  border: none;
  padding: 0 2px;
  background-color: var(--kkbk--base-color--gray--alpha--5);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--kkbk--base-color--gray--alpha--20);
  }

  @media screen and (min-width: 554px) {
    visibility: inherit;
  }
`

export const ButtonLeft = styled(Button)`
  left: 0;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
`

export const ButtonRight = styled(Button)`
  right: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`
