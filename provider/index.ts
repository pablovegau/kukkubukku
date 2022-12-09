/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { formatRecipe } from 'services/utils'
import {
  insertIngredient,
  insertMeasurement,
  insertRecipe,
  insertRecipeIngredient,
  insertSteps,
} from './db/recipes/write'
import { insertTag } from './db/tags/write'
import { formatRecipeIngredient } from './db/utils'
import { uploadRecipeImages } from './storage'

export async function getTagsIds(tagNames: any) {
  const { data, error } = await insertTag(tagNames)

  if (error) {
    return { data: [], error }
  }

  const tagsIds = data?.map((tag: any) => tag.id)

  return { data: tagsIds, error }
}

export async function insertRecipeDatabase(recipe: any) {
  const { images, ingredients, steps } = recipe
  /**
   * Insert tags and get their ids
   */
  const { data: tagsIds, error: getTagsIdsError } = await getTagsIds(recipe.tags)

  if (getTagsIdsError) {
    return { data: [], error: getTagsIdsError }
  }

  /**
   * Insert recipe
   */
  const formattedRecipe = formatRecipe(recipe, tagsIds)

  const { data: recipeFromDatabase, error: recipeInsertError } = await insertRecipe(formattedRecipe)

  if (recipeInsertError) {
    return { data: [], error: recipeInsertError }
  }

  /**
   * Upload images
   */
  const { id: recipeId } = recipeFromDatabase[0]

  const { error: uploadRecipeImagesError } = await uploadRecipeImages(images, recipeId)

  if (uploadRecipeImagesError) {
    return { data: [], error: uploadRecipeImagesError }
  }

  /**
   * Insert ingredients
   * Insert measurements
   * Insert recipeIngredients
   */
  ingredients.forEach(async (ingredient: any) => {
    // TODO: error handling
    const { data: kkbkIngredient } = await insertIngredient(ingredient.name)

    // TODO: error handling
    const { data: kkbkMeasurement } = await insertMeasurement(ingredient.measurement)

    const formattedRecipeIngredient = formatRecipeIngredient(
      recipeId,
      kkbkIngredient[0],
      kkbkMeasurement[0],
      ingredient,
    )

    // TODO: error handling
    await insertRecipeIngredient(formattedRecipeIngredient)
  })

  /**
   * Insert recipeSteps
   */
  const formattedSteps = steps.map((step: any, index: number) => ({
    recipeId,
    position: index + 1,
    instruction: step.description,
    duration: 0,
  }))

  // TODO: error handling
  await insertSteps(formattedSteps)
}
