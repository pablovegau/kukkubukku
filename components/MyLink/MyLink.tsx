/* eslint-disable react/display-name */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { forwardRef } from 'react'
import Link from 'next/link'
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

const VisuallyHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const MyLink = forwardRef<HTMLAnchorElement>(({ onClick, href, children, position, label }, ref) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <Container href={href} onClick={onClick} ref={ref} position={position}>
        <>
          {children}
          {label ? <VisuallyHidden>{label}</VisuallyHidden> : null}
        </>
      </Container>
    </Link>
  )
})

export default MyLink
