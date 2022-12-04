import { TYPES } from 'components/Button/Button'
import { Container } from './styles'

interface Props {
  disabled?: boolean
  type?: string
  value: string
}

function SubmitButton({ type = TYPES.PRIMARY_ACCENT, value, disabled = false }: Props) {
  return <Container type="submit" value={value} buttonType={type} aria-disabled={disabled} />
}

SubmitButton.TYPE = TYPES

export default SubmitButton
