// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { supabase } from 'provider/supabaseClient'
import { TABLE_NAMES } from '../constants'

export async function getIngredientByIdDatabase(ingredientId: string | string[] | undefined) {
  return await supabase.from(TABLE_NAMES.INGREDIENT).select('*').eq('id', ingredientId).single()
}

export async function getMeasurementByIdDatabase(measurementId: string | string[] | undefined) {
  return await supabase.from(TABLE_NAMES.MEASUREMENT).select('*').eq('id', measurementId).single()
}

export async function getRecipeIngredientsByRecipeIdDatabase(recipeId: string | string[] | undefined) {
  return await supabase.from(TABLE_NAMES.RECIPE_INGREDIENT).select('*').eq('recipeId', recipeId)
}

export async function getAllRecipesDatabase() {
  return await supabase.from(TABLE_NAMES.RECIPE).select('*')
}

export async function getRecipeIngredientsDatabase(recipeId: string | string[] | undefined) {
  const recipeIngredients = await getRecipeIngredientsByRecipeIdDatabase(recipeId)

  const ingredientsPromises = recipeIngredients.data?.map(async (recipeIngredient) => {
    const ingredient = await getIngredientByIdDatabase(recipeIngredient.ingredientId)
    const measurement = await getMeasurementByIdDatabase(recipeIngredient.measurementId)

    return {
      id: ingredient.data?.id,
      name: ingredient.data?.name,
      measurement: measurement.data?.measurement,
      amount: recipeIngredient.amount,
    }
  })

  return await Promise.all(ingredientsPromises)
}

export async function getBaseRecipeDatabase(recipeId: string | string[] | undefined) {
  return await supabase.from(TABLE_NAMES.RECIPE).select('*').eq('id', recipeId).single()
}

export async function getRecipeDatabase(recipeId: string | string[] | undefined) {
  /**
   * Get the base recipe
   */
  const recipeResponse = await supabase.from(TABLE_NAMES.RECIPE).select('*').eq('id', recipeId)
  const recipe = recipeResponse.data?.[0] || {}

  /**
   * Get ingredients
   */
  const ingredients = await getRecipeIngredientsDatabase(recipeId)

  /**
   * Get steps
   */
  const recipeSteps = await supabase
    .from(TABLE_NAMES.RECIPE_STEP)
    .select('*')
    .eq('recipeId', recipeId)
    .order('position', { ascending: true })

  const steps = recipeSteps.data?.map((recipeStep) => ({
    id: recipeStep.id,
    instruction: recipeStep.instruction,
    position: recipeStep.position,
  }))

  /**
   * Get tags
   */
  const recipeTags = recipe.tagsIds.map(async (recipeTag) => {
    const tag = await supabase.from(TABLE_NAMES.TAG).select('*').eq('id', recipeTag)

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
