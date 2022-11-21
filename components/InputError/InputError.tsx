import { Container, Label } from './styles'

interface Props {
  type: string,
  message: string,
  types: string[],
}

export default function InputError ({ type, message, types }: Props) {
  return (
    <>
      {types.includes(type) && <Container role="alert"><Label>Error:</Label> {message}</Container>}
    </>
  )
}
