import styled from 'styled-components'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

interface AvatarProps {
  size: 'small' | 'medium' | 'large'
}

const SIZE = {
  small: `
    height: var(--kkbk--avatar--size--small);
    width: var(--kkbk--avatar--size--small);
  `,
  medium: `
    height: var(--kkbk--avatar--size--medium);
    width: var(--kkbk--avatar--size--medium);
  `,
  large: `
    height: var(--kkbk--avatar--size--large);
    width: var(--kkbk--avatar--size--large);
  `,
}

export const Avatar = styled(AvatarPrimitive.Root)<AvatarProps>`
  --kkbk--avatar--size--small: 32px;
  --kkbk--avatar--size--medium: 48px;
  --kkbk--avatar--size--large: 64px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  border-radius: 100%;

  ${(props) => SIZE[props.size] || SIZE.medium};
`

export const AvatarImage = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`
