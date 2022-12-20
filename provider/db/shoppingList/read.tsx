// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { supabase } from 'provider/supabaseClient'
import { getIngredientByIdDatabase, getMeasurementByIdDatabase, getRecipeIngredientsDatabase } from '../recipes/read'
import { TABLE_NAMES } from '../constants'

export async function getShoppingListsDatabase(userId: string) {
  return await supabase.from(TABLE_NAMES.SHOPPING_LIST).select().contains('userIds', [userId])
}

export async function getShoppingListIngredientsPreviewDatabase(start: string, end: string) {
  // TODO: move to calendar
  const { data: calendarEvents } = await supabase
    .from('CalendarEvent')
    .select()
    .gte('scheduleAt', start)
    .lte('scheduleAt', end)

  const ingredientPromises = calendarEvents?.map(async (calendarEvent) => {
    return await getRecipeIngredientsDatabase(calendarEvent.recipeId)
  })

  const ingredients = await Promise.all(ingredientPromises)

  return ingredients.flat()
}

export async function getShoppingListItemsDatabase(shoppingListId: string) {
  return await supabase
    .from('ShoppingListItem')
    .select()
    .eq('shoppingListId', shoppingListId)
    .order('name', { ascending: false })
}

export async function getFormattedShoppingListsDatabase(userId: string) {
  const { data: shoppingListsRaw } = await getShoppingListsDatabase(userId)

  const shoppingListsPromises = shoppingListsRaw?.map(async (shoppingList) => {
    const { data: shoppingListIngredients } = await getShoppingListItemsDatabase(shoppingList?.id)

    const ingredientsPromises = shoppingListIngredients?.map(async (shoppingListIngredient) => {
      const ingredient = await getIngredientByIdDatabase(shoppingListIngredient.ingredientId)
      const measurement = await getMeasurementByIdDatabase(shoppingListIngredient.measurementId)

      return {
        name: ingredient.data?.name,
        measurement: measurement.data?.measurement,
        amount: shoppingListIngredient.amount,
        isChecked: shoppingListIngredient.isChecked,
        id: shoppingListIngredient.id,
        shoppingListId: shoppingListIngredient.shoppingListId,
      }
    })

    const data = await Promise.all(ingredientsPromises)

    return {
      shoppingListId: shoppingList?.id,
      shoppingListName: shoppingList?.name,
      shoppingListItems: data,
    }
  })

  return await Promise.all(shoppingListsPromises)
}
