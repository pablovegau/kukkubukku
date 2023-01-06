import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 496px;
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--kkbk--spacing--24);
`

export const InputRadioWrapper = styled.div`
  display: flex;
  margin-bottom: var(--kkbk--spacing--32);
  color: var(--kkbk--color--text--primary);

  div:not(:last-child) {
    margin-right: var(--kkbk--spacing--16);
  }
`

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
