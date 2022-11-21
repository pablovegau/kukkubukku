import { Container } from './styles'

interface Props {
  children: string
}

function MainTitle({ children }: Props) {
  return <Container>{children}</Container>
}

export default MainTitle
