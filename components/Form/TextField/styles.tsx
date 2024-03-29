import styled from 'styled-components'
import { InputBaseStyles } from 'components/Form/formStyles'

export const Input = styled.input`
  height: 40px;
  text-indent: var(--kkbk--spacing--8);

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  ${InputBaseStyles}
`
