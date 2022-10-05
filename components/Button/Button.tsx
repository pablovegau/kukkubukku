import { Container } from "./styles";

export const TYPES = {
  PRIMARY_ACCENT: "primary_accent",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERCIARY: "terciary",
  DESTRUCTIVE: "destructive"
};

function Button({
  type = TYPES.SECONDARY,
  children,
  onClick,
  disabled = false
}) {
  return (
    <Container onClick={onClick} type={type} aria-disabled={disabled}>
      {children}
    </Container>
  );
}

Button.TYPE = TYPES;

export default Button;
