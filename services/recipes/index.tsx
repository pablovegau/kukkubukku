import { insertRecipeDatabase } from 'database'

interface Ingredient {
  name: string
  amount: string
  measurement: string
  moreInfo: string
}

interface Step {
  description: string
}

export interface Recipe {
  name: string
  description: string
  difficulty: string
  diners: number
  duration: number
  isPublic: boolean
  tags: string[]
  ingredients: Ingredient[]
  steps: Step[]
  images: File[]
}

export function addRecipe(recipe: Recipe) {
  insertRecipeDatabase(recipe)
}
