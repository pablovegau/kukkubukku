import { Container, AdditionalText } from './styles'

interface Props {
  htmlFor: string
  children: string
  additionalText?: string
}

const TYPE_OF_MANDATORY = {
  MANDATORY: 'Obligatorio',
  RECOMMENDABLE: 'Recomendable',
}

function Label({ htmlFor, children, additionalText }: Props) {
  return (
    <Container htmlFor={htmlFor}>
      {children}
      {additionalText && <AdditionalText>{additionalText}</AdditionalText>}
    </Container>
  )
}

Label.TYPE_OF_MANDATORY = TYPE_OF_MANDATORY

export default Label
