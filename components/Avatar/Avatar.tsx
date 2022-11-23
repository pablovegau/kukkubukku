import { DUMMY_IMAGE } from 'components/Header/Header'
import { Avatar, AvatarImage } from './styles'

interface Props {
  size?: 'small' | 'medium' | 'large'
  src?: string
  alternativeText?: string
}

const KukkubukkuAvatar = ({
  size = 'medium',
  src = DUMMY_IMAGE.NO_LOGGED,
  alternativeText = 'avatar sesión no iniciada',
}: Props) => {
  return (
    <Avatar size={size}>
      <AvatarImage src={src} alt={alternativeText} />
    </Avatar>
  )
}

export default KukkubukkuAvatar
