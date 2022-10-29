import styled from "styled-components";
import { rem } from "polished";
import { getThemeTransition } from "../../styles/utils";
import { THEMES } from "styles/theme/tokens";

// TODO: onFocus outline

interface Props {
  theme: string;
}

const switchContainerHeight = rem("24px");
const switchContainerWidth = rem("44px");
const switchContainerBorderRadius = rem("12px");

export const SwitchContainer = styled.button`
  position: relative;
  height: ${switchContainerHeight};
  width: ${switchContainerWidth};
  padding: 2px;
  border: none; /* Delete if this is in the reset */
  border-radius: ${switchContainerBorderRadius};
  cursor: pointer;
  outline: 0;
  background-color: var(--kkbk--component--color--background--theme-switch);
  transition: ${getThemeTransition({ properties: "background-color" })};
`;

const getComputedSwitchStyles = ({ theme }: Props) => `
  transform: translate(${theme === THEMES.LIGHT ? "0px" : rem("20px")})
`;

const switchHeight = rem("20px");
const switchWidth = switchHeight;
const switchBorderRadius = "50%";

export const Switch = styled.div`
  height: ${switchWidth};
  width: ${switchHeight};
  border-radius: ${switchBorderRadius};
  background-color: #ffffff;
  transition: ${getThemeTransition({ properties: "transform" })};

  ${(props) => getComputedSwitchStyles(props)}
`;

const iconTop = rem("4px");

const IconWrapper = styled.div`
  position: absolute;
  top: ${iconTop};

  svg {
    display: block;
  }
`;

const iconDistanceFromSides = rem("3px");

const getComputedSunWrapperStyles = ({ theme }: Props) => `
  opacity: ${theme === THEMES.LIGHT ? 0 : 1}
`;

export const SunWrapper = styled(IconWrapper)`
  left: ${iconDistanceFromSides};
  transition: opacity 0.3s ease-in-out;

  ${(props) => getComputedSunWrapperStyles(props)}
`;

const getComputedMoonWrapperStyles = ({ theme }: Props) => `
  opacity: ${theme === THEMES.DARK ? 0 : 1}
`;

export const MoonWrapper = styled(IconWrapper)`
  right: ${iconDistanceFromSides};
  transition: opacity 0.3s ease-in-out;

  ${(props) => getComputedMoonWrapperStyles(props)}
`;
