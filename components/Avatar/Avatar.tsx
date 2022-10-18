import styled from "styled-components";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const SIZE = {
  small: `
    height: var(--kkbk--avatar--size--small);
    width: var(--kkbk--avatar--size--small);
  `,
  medium: `
    height: var(--kkbk--avatar--size--medium);
    width: var(--kkbk--avatar--size--medium);
  `,
  large: `
    height: var(--kkbk--avatar--size--large);
    width: var(--kkbk--avatar--size--large);
  `
};

interface AvatarProps {
  size: "small" | "medium" | "large";
}

// export type when this will be a functional component

export const Avatar = styled(AvatarPrimitive.Root)<AvatarProps>`
  --kkbk--avatar--size--small: 32px;
  --kkbk--avatar--size--medium: 48px;
  --kkbk--avatar--size--large: 64px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  border-radius: 100%;
  background-color: yellow;

  ${(props) => SIZE[props.size] || SIZE.medium};
`;

export const AvatarImage = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

// Example to use in App.js

// import { Avatar, AvatarImage } from "./components/Avatar";

// ...

// <Avatar size="medium">
//  <AvatarImage
//    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
//    alt="Colm Tuite"
//  />
// </Avatar>
