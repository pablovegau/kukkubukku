import { test, expect } from '@playwright/test'

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://kukkubukku.vercel.app/')

    await page.pause()

    await page.getByRole('link', { name: 'avatar sesión no iniciada go to log in' }).click()

    await page.getByPlaceholder('e.g. carbonara@kukkubukku.com').fill('kukkubukku.test@gmail.com')
    await page.getByLabel('Contraseña').fill('kukkubukku')

    await page.getByRole('button', { name: 'Iniciar sesión' }).click()
  })

  test('should visit a recipe', async ({ page }) => {
    expect(await page.getByRole('link', { name: 'avatar sesión no iniciada go to log in' })).toBeTruthy()
  })
})
