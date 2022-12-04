import { NextApiRequest, NextApiResponse } from 'next'
import { getRecipeDatabase } from 'provider/db/recipes/read'

export default async function getRecipe(req: NextApiRequest, res: NextApiResponse) {
  const recipeId = req.query.recipeId
  const recipe = await getRecipeDatabase(recipeId)

  res.status(200).json(recipe)
}
