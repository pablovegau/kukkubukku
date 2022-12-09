import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllRecipes } from 'services/db/recipes/read'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data: recipes } = await getAllRecipes()

  res.status(200).json(recipes)
}
