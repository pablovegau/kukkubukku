import { supabase } from 'provider/supabaseClient'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function uploadRecipeImages(images: any, recipeId: string) {
  const file = images[0]
  const fileExt = file.name.split('.').pop()
  const fileName = `${recipeId}_0.${fileExt}`
  const filePath = `${recipeId}/${fileName}`

  const { error } = await supabase.storage.from('recipes').upload(filePath, file)

  return { error }
}
