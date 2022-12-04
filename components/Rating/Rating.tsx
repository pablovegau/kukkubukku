import { Container, Value } from './styles'
import { Icon } from '../Icon'

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
}

interface IconSizes {
  [key: string]: number
}

const ICON_SIZES: IconSizes = {
  small: 12,
  medium: 16,
}

interface Props {
  value: string | number
  size: string
}

function Rating({ value = '0.0', size = SIZES.SMALL }: Props) {
  return (
    <Container>
      <Icon type={Icon.TYPE.STAR} size={ICON_SIZES[size]} fillColor="--kkbk--color--emphasis--primary" />
      <Value size={size}>{value}</Value>
    </Container>
  )
}

Rating.SIZES = SIZES

export { Rating }
