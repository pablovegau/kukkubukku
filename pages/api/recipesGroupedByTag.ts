// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from 'database/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'

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

interface RecipesGroupedByTag {
  [key: string]: Card[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { data: recipes } = await supabase.from('Recipe').select('*')

  const { data: tags } = await supabase.from('Tag').select('*')

  const recipesGroupedByTags: RecipesGroupedByTag = {}

  if (recipes && tags) {
    tags.forEach((tag) => {
      recipesGroupedByTags[tag.name] = recipes.filter((recipe) =>
        recipe.tagsIds.includes(tag.id),
      )
    })
  }

  res.status(200).json(recipesGroupedByTags)
}
