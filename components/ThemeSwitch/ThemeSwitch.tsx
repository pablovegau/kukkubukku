import { SwitchContainer, Switch, SunWrapper, MoonWrapper } from "./styles";
import { Icon } from "../Icon";
import { useContext } from "react";
import { ThemeContext } from "styles/utils/ThemeProvider";

const ICON_SIZE = 16;

export default function ThemeSwitch() {
  const [theme, setTheme, themes] = useContext(ThemeContext);

  const handleSwitchTheme = () => {
    setTheme(theme === themes.LIGHT ? themes.DARK : themes.LIGHT);
  };

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
  );
}
