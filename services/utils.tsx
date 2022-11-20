export function formatRecipe(recipe: any) {
  const { diners, duration, tags, ingredients, steps } = recipe

  const formattedTags = tags.split(',').map((tag: string) => tag.trim())
  const formattedIngredients = ingredients.slice(0, -1)
  const formattedSteps = steps.slice(0, -1)

  return {
    ...recipe,
    tags: formattedTags,
    ingredients: formattedIngredients,
    steps: formattedSteps,
    diners: parseInt(diners),
    duration: parseInt(duration),
  }
}
