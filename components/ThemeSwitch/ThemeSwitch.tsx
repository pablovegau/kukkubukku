import { SwitchContainer, Switch, SunWrapper, MoonWrapper } from './styles'
import { Icon } from '../Icon'
import { useTheme } from 'utils/hooks/useTheme'
import { THEMES } from 'styles/theme/tokens'

const ICON_SIZE = 16

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const handleSwitchTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
  }

  return (
    <SwitchContainer onClick={handleSwitchTheme}>
      <SunWrapper>
        <Icon
          type={Icon.TYPE.MOON}
          size={ICON_SIZE}
          label="theme switch sun icon"
          fillColor="--kkbk--base-color--gray--white"
        />
      </SunWrapper>
      <MoonWrapper>
        <Icon
          type={Icon.TYPE.SUN}
          size={ICON_SIZE}
          label="theme switch sun moon"
          fillColor="--kkbk--base-color--gray--white"
        />
      </MoonWrapper>
      <Switch theme={theme} />
    </SwitchContainer>
  )
}
