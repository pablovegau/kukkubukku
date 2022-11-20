import { Container } from "./styles";

interface Props {
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

// TODO: add sizes

function IconButton({
  children,
  onClick,
  disabled = false,
}: Props) {
  return (
    <Container onClick={onClick} aria-disabled={disabled}>
      {children}
    </Container>
  );
}

export default IconButton;
