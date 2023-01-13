// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Link from 'next/link'
import { Icon } from 'components/Icon'
import { MyLink } from 'components/MyLink'

interface QueryParams {
  [key: string]: string
}

interface Props {
  navigateTo?: string | { pathname: string; query?: QueryParams }
  onClick?: () => void
  iconType: Icon.TYPE
  label?: string
}

const ICON_TYPE = Icon.TYPE

function Tool({ navigateTo, iconType, onClick, label }: Props) {
  const handleOnClick = () => {
    onClick()
  }

  if (navigateTo) {
    return (
      <Link href={navigateTo} passHref legacyBehavior>
        <MyLink>
          <Icon type={iconType} label={label} size={24} fillColor="--kkbk--color--text--primary" />
        </MyLink>
      </Link>
    )
  }

  return (
    <div onClick={onClick && handleOnClick} role="button">
      <Icon type={iconType} label={label} size={24} fillColor="--kkbk--color--text--primary" />
    </div>
  )
}

Tool.ICON_TYPE = ICON_TYPE

export default Tool
