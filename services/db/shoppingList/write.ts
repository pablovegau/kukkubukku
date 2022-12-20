import {
  createShoppingListDatabase,
  insertShoppingListDatabase,
  updateShoppingListItemStateByIdDatabase,
} from 'provider/db/shoppingList/write'

export async function insertShoppingList(userId: string, name: string) {
  return await insertShoppingListDatabase(userId, name)
}

export async function createShoppingList(userId: string, name: string, value: any) {
  return await createShoppingListDatabase(userId, name, value)
}

export async function updateShoppingListItemStateById(isChecked: boolean, itemId: string) {
  return await updateShoppingListItemStateByIdDatabase(isChecked, itemId)
}
