/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { supabase } from 'provider/supabaseClient'

export async function insertTag(tags: any) {
  const { data: currentTags, error: currentTagsReadError } = await supabase.from('Tag').select()

  if (currentTagsReadError) {
    return { data: [], error: currentTagsReadError }
  }

  const existingTagsInDatabase = currentTags?.filter((currentTag: any) => tags.includes(currentTag.name))

  const existingTagsInDatabaseNames = existingTagsInDatabase?.map((existingTag: any) => existingTag.name)

  const newTagsNames = tags.filter((tag: any) => existingTagsInDatabaseNames?.indexOf(tag) === -1)

  const formattedNewTags = newTagsNames.map((tag: any) => ({ name: tag }))

  const { data: recipeTags, error: recipeTagsInsertError } = await supabase
    .from('Tag')
    .insert(formattedNewTags)
    .select()

  return {
    data: [...existingTagsInDatabase, ...recipeTags],
    error: recipeTagsInsertError,
  }
}
