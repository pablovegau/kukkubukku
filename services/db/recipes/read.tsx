import { getAllRecipesDatabase, getRecipeDatabase } from 'provider/db/recipes/read'

export async function getAllRecipes() {
  return await getAllRecipesDatabase()
}

export async function getRecipe(recipeId: string | string[] | undefined) {
  return await getRecipeDatabase(recipeId)
}
