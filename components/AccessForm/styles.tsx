import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: var(--kkbk--spacing--32);
  margin-left: var(--kkbk--spacing--32);
  margin-right: var(--kkbk--spacing--32);
  margin-top: var(--kkbk--spacing--64);
`

export const LogoWrapper = styled.div`
  margin-bottom: var(--kkbk--spacing--40);
  margin-left: auto;
  margin-right: auto;
`

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--kkbk--spacing--40);
`

export const QuestionWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: calc(var(--kkbk--spacing--32) * -1);
  margin-bottom: var(--kkbk--spacing--32);
  text-align: center;
`

export const Question = styled.p`
  margin-bottom: var(--kkbk--spacing--8);
  color: var(--kkbk--color--text--dim);
  ${typography.text.small}
`

export const QuestionLink = styled.a`
  text-transform: uppercase;
  color: var(--kkbk--color--emphasis--secondary);
  ${typography.text.bold.small}
  cursor: pointer;
`
