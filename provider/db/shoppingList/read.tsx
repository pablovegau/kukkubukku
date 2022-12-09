export async function getShoppingListIngredientsDatabase(start: string, end: string) {
  console.log('start', start)
  console.log('end', end)

  const difference = new Date(start).getTime() - new Date(end).getTime()
  const days = Math.ceil(difference / (1000 * 3600 * 24))
  console.log('🚀 ~ file: read.tsx:7 ~ getShoppingListIngredientsDatabase ~ days', days)
}
