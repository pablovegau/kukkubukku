import styled, { css } from 'styled-components'
import { typography } from 'styles/mixins'

export const Container = styled.main`
  margin-left: var(--kkbk--spacing--32);
  margin-right: var(--kkbk--spacing--32);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: var(--kkbk--spacing--24);
`

export const InputRadioWrapper = styled.div`
  display: flex;
  margin-bottom: var(--kkbk--spacing--32);

  div:not(:last-child) {
    margin-right: var(--kkbk--spacing--16);
  }
`

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
