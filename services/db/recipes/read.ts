import { getAllRecipesDatabase, getBaseRecipeDatabase, getRecipeDatabase } from 'provider/db/recipes/read'

export async function getAllRecipes() {
  return await getAllRecipesDatabase()
}

export async function getBaseRecipe(recipeId: string | string[] | undefined) {
  return await getBaseRecipeDatabase(recipeId)
}

export async function getRecipe(recipeId: string | string[] | undefined) {
  return await getRecipeDatabase(recipeId)
}
