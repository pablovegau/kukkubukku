// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef } from 'react'
import { useButton } from '@react-aria/button'
import { Container } from './styles'

function Button(props: any) {
  const { onClick } = props

  const ref = useRef()
  const { buttonProps } = useButton(props, ref)

  return (
    <Container {...buttonProps} ref={ref} onClick={onClick}>
      {props.children}
    </Container>
  )
}

export { Button }
