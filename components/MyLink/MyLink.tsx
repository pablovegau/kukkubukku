/* eslint-disable react/display-name */
// @ts-nocheck

import { forwardRef } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  position?: string
}

const Samanama = styled.a<ContainerProps>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${({ position }) => position};
  height: 100%;
`

const MyLink = forwardRef<HTMLAnchorElement>(({ onClick, href, children, position }, ref) => {
  return (
    <Samanama href={href} onClick={onClick} ref={ref} position={position}>
      {children}
    </Samanama>
  )
})

export default MyLink
