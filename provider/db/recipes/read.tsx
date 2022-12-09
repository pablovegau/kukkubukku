// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { supabase } from 'provider/supabaseClient'

export async function getAllRecipesDatabase() {
  return await supabase.from('Recipe').select('*')
}

export async function getBaseRecipeDatabase(recipeId: string | string[] | undefined) {
  return await supabase.from('Recipe').select('*').eq('id', recipeId).single()
}

export async function getRecipeDatabase(recipeId: string | string[] | undefined) {
  /**
   * Get the base recipe
   */
  const recipeResponse = await supabase.from('Recipe').select('*').eq('id', recipeId)
  const recipe = recipeResponse.data?.[0] || {}

  /**
   * Get ingredients
   */
  const recipeIngredients = await supabase.from('RecipeIngredient').select('*').eq('recipeId', recipeId)

  const ingredientsPromises = recipeIngredients.data?.map(async (recipeIngredient) => {
    const ingredient = await supabase.from('Ingredient').select('*').eq('id', recipeIngredient.ingredientId)
    const measurement = await supabase.from('Measurement').select('*').eq('id', recipeIngredient.measurementId)

    return {
      id: recipeIngredient.id,
      name: ingredient.data?.[0].name,
      measurement: measurement.data?.[0].measurement,
      amount: recipeIngredient.amount,
    }
  })

  const ingredients = await Promise.all(ingredientsPromises)

  /**
   * Get steps
   */
  const recipeSteps = await supabase.from('RecipeStep').select('*').eq('recipeId', recipeId)

  const steps = recipeSteps.data?.map((recipeStep) => ({
    id: recipeStep.id,
    instruction: recipeStep.instruction,
    position: recipeStep.position,
  }))

  /**
   * Get tags
   */
  const recipeTags = recipe.tagsIds.map(async (recipeTag) => {
    const tag = await supabase.from('Tag').select('*').eq('id', recipeTag)

    return tag.data?.[0].name
  })

  const tags = await Promise.all(recipeTags)

  return {
    ...recipe,
    ingredients,
    steps,
    tags,
  }
}
