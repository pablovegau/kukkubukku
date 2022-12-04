import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllTags } from 'provider/db/tags/read'
import { getAllRecipes } from 'services/db/recipes/read'

// TODO: add error handling

interface Card {
  created_at: string
  description: string
  difficulty: string
  diners: number
  duration: number
  id: string
  isPublic: boolean
  language: string
  name: string
  rating: number
  tagsIds: string[]
  user_id: string
}

interface Tag {
  create_at: string
  name: string
  description: string | null
  id: string
}

interface RecipesGroupedByTag {
  [key: string]: Card[]
}

const groupRecipesByTags = (recipes: Card[] | null, tags: Tag[] | null) => {
  const recipesGroupedByTags: RecipesGroupedByTag = {}

  if (recipes && tags) {
    tags.forEach((tag) => {
      recipesGroupedByTags[tag.name] = recipes.filter((recipe) =>
        recipe.tagsIds.includes(tag.id),
      )
    })
  }

  return recipesGroupedByTags
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { data: recipes } = await getAllRecipes()
  const { data: tags } = await getAllTags()

  const recipesGroupedByTags = groupRecipesByTags(recipes, tags)

  res.status(200).json(recipesGroupedByTags)
}
