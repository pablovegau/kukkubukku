import styled from 'styled-components'
import { InputBaseStyles } from 'components/Form/formStyles'

export const Select = styled.select`
  height: 40px; // TODO: Crear un token para este valor
  text-indent: var(--kkbk--spacing--8);

  ${InputBaseStyles}
`
