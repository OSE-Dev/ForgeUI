import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Forge/);
});

test('has lexical demo link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByText('Lexical demo').getByRole('link', { name: 'here' }).click();
  await page.waitForURL('**/lexicaldemo');
  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
