/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from 'provider/supabaseClient'
import { TABLE_NAMES } from '../constants'

export async function insertRecipe(recipe: any) {
  return await supabase.from(TABLE_NAMES.RECIPE).insert(recipe).select()
}

export async function insertIngredient(ingredient: any) {
  return await supabase
    .from(TABLE_NAMES.INGREDIENT)
    .insert([{ name: ingredient }])
    .select()
}

export async function insertRecipeIngredient(recipeIngredient: any) {
  return await supabase.from(TABLE_NAMES.RECIPE_INGREDIENT).insert([recipeIngredient]).select()
}

export async function insertMeasurement(measurement: any) {
  return await supabase.from(TABLE_NAMES.MEASUREMENT).insert([{ measurement }]).select()
}

export async function insertSteps(steps: any) {
  return await supabase.from(TABLE_NAMES.RECIPE_STEP).insert(steps).select()
}
