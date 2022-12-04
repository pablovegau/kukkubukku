import * as React from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { Container, Svg } from './styles'
import { icons } from './icons/index'

import { iconTypes } from './iconTypes'

interface Props {
  fillColor?: string
  size?: number
  label?: string
  type: string
}

function Icon({ fillColor = '--kkbk--color--emphasis--primary', size = 32, label = 'icon', type }: Props) {
  return (
    <Container size={size}>
      <AccessibleIcon.Root label={label}>
        <Svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fillColor={fillColor}>
          {icons[type].map((path, index) => (
            <path key={index} fillRule="evenodd" clipRule="evenodd" d={path} />
          ))}
        </Svg>
      </AccessibleIcon.Root>
    </Container>
  )
}

Icon.TYPE = iconTypes

export default Icon
