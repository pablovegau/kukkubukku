// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Icon } from 'components/Icon'
import { MyLink } from 'components/MyLink'
import Link from 'next/link'

interface Props {
  navigateTo: string
  iconType: Icon.TYPE
}

const ICON_TYPE = Icon.TYPE

function Tool({ navigateTo, iconType }: Props) {
  return (
    <Link href={navigateTo} passHref legacyBehavior>
      <MyLink>
        <Icon type={iconType} size={24} fillColor="--kkbk--color--text--primary" />
      </MyLink>
    </Link>
  )
}

Tool.ICON_TYPE = ICON_TYPE

export default Tool
