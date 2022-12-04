/* eslint-disable react/display-name */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { forwardRef } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  position?: string
}

const Container = styled.a<ContainerProps>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${({ position }) => position};
  height: 100%;
  text-decoration: none;
`

const MyLink = forwardRef<HTMLAnchorElement>(({ onClick, href, children, position }, ref) => {
  return (
    <Container href={href} onClick={onClick} ref={ref} position={position}>
      {children}
    </Container>
  )
})

export default MyLink
