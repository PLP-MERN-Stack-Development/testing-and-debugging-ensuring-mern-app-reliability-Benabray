const { test, expect } = require('@playwright/test');

test.describe('Critical User Flows', () => {
  test('should load the application', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Test Application')).toBeVisible();
  });

  test('should increment counter when button is clicked', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Counter: 0')).toBeVisible();
    await page.click('#increment');
    await expect(page.locator('text=Counter: 1')).toBeVisible();
  });

  test('should submit form and show greeting', async ({ page }) => {
    await page.goto('/');
    await page.fill('input[name="name"]', 'Martin');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Hello, Martin!')).toBeVisible();
  });

  test('should handle navigation links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Home')).toBeVisible();
    await expect(page.locator('text=About')).toBeVisible();
    await expect(page.locator('text=Contact')).toBeVisible();
  });
});
