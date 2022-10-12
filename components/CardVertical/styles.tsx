import styled from "styled-components";
import { typography } from "../../styles/mixins";
import { getThemeTransition } from "../../styles/utils";

interface Props {
  size: string;
}

export const CARD_SIZES = {
  SMALL: "small",
  MEDIUM: "medium"
};

export const Container = styled.a<Props>`
  --kkbk--card--container--small: 148px;
  --kkbk--card--container--medium: 185px;
  --kkbk--card--image--small: 178px;
  --kkbk--card--image--medium: 222px;

  display: block;
  width: ${(p) =>
    p.size === CARD_SIZES.SMALL
      ? "var(--kkbk--card--container--small)"
      : "var(--kkbk--card--container--medium)"};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    img {
      scale: 1.1;
      filter: contrast(1.2);
    }
  }
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: var(--kkbk--spacing--4);
`;

export const RecipeName = styled.div`
  margin-right: var(--kkbk--spacing--8);
  color: var(--kkbk--color--text--primary);
  ${typography.text.small}
  line-height: 16.8px;
  transition: ${getThemeTransition({ properties: "color" })};

  /* two lines ellipsis */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ImgWrapper = styled.div<Props>`
  height: ${(p) =>
    p.size === CARD_SIZES.SMALL
      ? "var(--kkbk--card--image--small)"
      : "var(--kkbk--card--image--medium)"};
  border-radius: 4px;
  overflow: hidden;

  img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
    transition: scale 0.3s ease-in-out, filter 0.3s ease-in-out;
  }
`;
