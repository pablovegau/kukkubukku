/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */

export function formatRecipe(recipe: any, tagsIds: any) {
  const { description, difficulty, diners, duration, isPublic, name, user_id } = recipe

  return {
    description,
    difficulty,
    diners,
    duration,
    isPublic,
    name,
    tagsIds,
    rating: 0,
    language: 'es',
    user_id,
  }
}

export function formatRecipeIngredient(recipeId: any, recipeIngredient: any, recipeMeasurement: any, ingredient: any) {
  return {
    recipeId,
    ingredientId: recipeIngredient.id,
    measurementId: recipeMeasurement.id,
    amount: parseInt(ingredient.amount),
    moreInfo: ingredient.moreInfo,
  }
}
