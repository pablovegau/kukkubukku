import { Container } from './styles'

export const TYPES = {
  PRIMARY_ACCENT: 'primary_accent',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERCIARY: 'terciary',
  DESTRUCTIVE: 'destructive',
}

interface Props {
  disabled?: boolean
  type?: string
  children: React.ReactNode
  onClick: () => void
}

function Button({
  type = TYPES.SECONDARY,
  children,
  onClick,
  disabled = false,
}: Props) {
  return (
    <Container onClick={onClick} buttonType={type} aria-disabled={disabled}>
      {children}
    </Container>
  )
}

Button.TYPE = TYPES

export default Button
