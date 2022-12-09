import { getShoppingListIngredientsDatabase } from 'provider/db/shoppingList/read'

export async function getShoppingListIngredients(start: string, end: string) {
  return await getShoppingListIngredientsDatabase(start, end)
}
