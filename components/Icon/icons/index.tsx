import { moon } from "./moon"
import { sun } from "./sun"
import { left_arrow } from "./leftArrow"
import { right_arrow } from "./rightArrow"
import { star } from "./star"

interface Icons {
  [key: string]: string;
}

export const icons: Icons = {
  left_arrow,
  moon,
  right_arrow,
  star,
  sun
}
