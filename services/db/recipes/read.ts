import {
  getAllRecipesDatabase,
  getBaseRecipeDatabase,
  getIngredientByIdDatabase,
  getMeasurementByIdDatabase,
  getRecipeDatabase,
  getRecipeIngredientsByRecipeIdDatabase,
} from 'provider/db/recipes/read'

export async function getIngredientById(ingredientId: string | string[] | undefined) {
  return await getIngredientByIdDatabase(ingredientId)
}

export async function getMeasurementById(measurementId: string | string[] | undefined) {
  return await getMeasurementByIdDatabase(measurementId)
}

export async function getRecipeIngredientsByRecipeId(recipeId: string | string[] | undefined) {
  return await getRecipeIngredientsByRecipeIdDatabase(recipeId)
}

export async function getAllRecipes() {
  return await getAllRecipesDatabase()
}

export async function getBaseRecipe(recipeId: string | string[] | undefined) {
  return await getBaseRecipeDatabase(recipeId)
}

export async function getRecipe(recipeId: string | string[] | undefined) {
  return await getRecipeDatabase(recipeId)
}
