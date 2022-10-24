import { calendar } from './calendar'
import { home } from "./home"
import { left_arrow } from "./leftArrow"
import { magnifier } from "./magnifier"
import { moon } from "./moon"
import { plus } from "./plus"
import { recipes } from "./recipes"
import { right_arrow } from "./rightArrow"
import { shoppingList } from './shoppingList'
import { star } from "./star"
import { sun } from "./sun"

interface Icons {
  [key: string]: string[];
}

export const icons: Icons = {
  calendar,
  home,
  left_arrow,
  magnifier,
  moon,
  plus,
  recipes,
  right_arrow,
  shoppingList,
  star,
  sun,
}
