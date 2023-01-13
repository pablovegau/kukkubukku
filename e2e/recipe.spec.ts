import { test, expect } from '@playwright/test'

test.describe('Recipes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://kukkubukku.vercel.app/')

    await page.getByRole('link', { name: 'avatar sesión iniciada' }).click()

    await page.getByPlaceholder('e.g. carbonara@kukkubukku.com').fill('kukkubukku.test@gmail.com')
    await page.getByLabel('Contraseña').fill('kukkubukku')

    await page.getByRole('button', { name: 'Iniciar sesión' }).click()
  })

  test('should visit a recipe', async ({ page }) => {
    await page.getByRole('link', { name: 'Paella valenciana card Paella valenciana icon 0' }).click()
    const recipeHeading = await page.getByRole('heading', { name: 'Paella valenciana' }).textContent()

    expect(recipeHeading).toBe('Paella valenciana')
  })
})
