/* eslint-disable camelcase */
import { alert } from './alert'
import { calendar } from './calendar'
import { check } from './check'
import { clock } from './clock'
import { cross } from './cross'
import { home } from './home'
import { left_arrow } from './leftArrow'
import { magnifier } from './magnifier'
import { moon } from './moon'
import { person } from './person'
import { plus } from './plus'
import { recipes } from './recipes'
import { right_arrow } from './rightArrow'
import { save } from './save'
import { share } from './share'
import { shoppingList } from './shoppingList'
import { star } from './star'
import { sun } from './sun'

interface Icons {
  [key: string]: string[]
}

export const icons: Icons = {
  alert,
  calendar,
  check,
  clock,
  cross,
  home,
  left_arrow,
  magnifier,
  moon,
  person,
  plus,
  recipes,
  right_arrow,
  save,
  share,
  shoppingList,
  star,
  sun,
}
