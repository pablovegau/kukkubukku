import styled from 'styled-components'
import { InputBaseStyles } from 'components/Form/formStyles'

export const TextArea = styled.textarea`
  height: 120px;
  padding: var(--kkbk--spacing--8);
  font-family: var(--kkbk--font--base);
  resize: none;

  ${InputBaseStyles}
`
