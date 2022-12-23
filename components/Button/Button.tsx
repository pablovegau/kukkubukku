import { Container } from './styles'

export const TYPES = {
  PRIMARY_ACCENT: 'primary_accent',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERCIARY: 'terciary',
  DESTRUCTIVE: 'destructive',
}

interface Props {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  type?: string
}

function Button({ type = TYPES.SECONDARY, children, onClick, disabled = false }: Props) {
  return (
    <Container onClick={onClick} buttontype={type} aria-disabled={disabled} disabled={disabled}>
      {children}
    </Container>
  )
}

Button.TYPE = TYPES

export default Button
