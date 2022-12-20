import { getShoppingListIngredientsPreviewDatabase } from 'provider/db/shoppingList/read'

export async function getShoppingListIngredientsPreview(start: string, end: string) {
  return await getShoppingListIngredientsPreviewDatabase(start, end)
}
