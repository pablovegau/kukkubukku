import { Container, Value } from "./styles";
import { Icon } from "../Icon";

function Rating({ value = "0.0" }) {
  return (
    <Container>
      <Icon
        type={Icon.TYPE.STAR}
        size={12}
        fillColor="--kkbk--color--emphasis--primary"
      />
      <Value>{value}</Value>
    </Container>
  );
}

export { Rating };
