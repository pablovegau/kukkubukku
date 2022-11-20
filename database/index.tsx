// @ts-nocheck

import { supabase } from './supabaseClient'

export async function insertTag(tags: any) {
  const { data: currentTags, error: currentTagsReadError } = await supabase
    .from('Tag')
    .select()

  if (currentTagsReadError) {
    return { data: [], error: currentTagsReadError }
  }

  const existingTagsInDatabase = currentTags?.filter((currentTag: any) => tags.includes(currentTag.name))

  const existingTagsInDatabaseNames = existingTagsInDatabase?.map((existingTag: any) => existingTag.name)

  const newTagsNames = tags
    .filter((tag: any) => existingTagsInDatabaseNames?.indexOf(tag) === -1)

  const formattedNewTags = newTagsNames.map((tag: any) => ({ name: tag }))

  const { data: recipeTags, error: recipeTagsInsertError } = await supabase
    .from('Tag')
    .insert(formattedNewTags)
    .select()

  return {
    data: [
      ...existingTagsInDatabase,
      ...recipeTags,
    ],
    error: recipeTagsInsertError,
  }
}

export async function getTagsIds(tagNames: any) {
  const { data, error } = await insertTag(tagNames)

  if (error) {
    return { data: [], error }
  }

  const tagsIds = data?.map((tag: any) => tag.id)

  return { data: tagsIds, error }
}

export async function uploadRecipeImages(images: any, recipeId: string) {
  const file = images[0]
  const fileExt = file.name.split('.').pop()
  const fileName = `${recipeId}_0.${fileExt}`
  const filePath = `${recipeId}/${fileName}`

  const { error } = await supabase.storage.from('recipes').upload(filePath, file)

  return { error }
}

async function insert(tableName, items) {
  const { data, error } = await supabase
    .from(tableName)
    .insert(items)
    .select()

  return { data, error }
}

export async function insertRecipeDatabase(recipe: any) {
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
  const { description, difficulty, diners, duration, isPublic, name, images } = recipe

  const finalRecipe = {
    description,
    difficulty,
    diners,
    duration,
    isPublic,
    name,
    userId: undefined,
    tagsIds,
    rating: 0,
    language: 'es',
  }

  const { data: recipeFromDatabase, error: recipeInsertError } = await insert('Recipe', finalRecipe)

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
  const { ingredients } = recipe

  ingredients.forEach(async (ingredient: any) => {
    const { data: recipeIngredient, error: ingredientError } = await supabase
      .from('Ingredient')
      .insert([{ name: ingredient.name }])
      .select()

    const { data: recipeMeasurement, error: measurementError } = await supabase
      .from('Measurement')
      .insert([{ measurement: ingredient.measurement }])
      .select()

    const samanama = { recipeId, ingredientId: recipeIngredient[0].id, measurementId: recipeMeasurement[0].id, amount: parseInt(ingredient.amount), moreInfo: ingredient.moreInfo };

    const { data, error } = await supabase
      .from('RecipeIngredient')
      .insert([samanama])
      .select()
    });

  /**
   * Insert recipeSteps
   */
  const { steps } = recipe

  const formattedSteps = steps.map((step: any, index: number) => ({ recipeId, position: index + 1, instruction: step.description, duration: 0 }))

  const { data, error } = await supabase
  .from('RecipeStep')
  .insert(formattedSteps)
  .select()

  // TODO: Gestion de errores
}
