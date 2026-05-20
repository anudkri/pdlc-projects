import { test, expect } from '@playwright/test';

test.describe('Feature: Account Creation', () => {
  test('Validate Account Creation with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the account creation page
    try {
      await page.goto('about:blank'); // Replace with actual URL if known
    } catch (error) {
      console.error('Navigation failed:', error);
    }

    // Step 2: Enter a valid email address
    const validEmail = 'test@example.com'; // Example valid email
    await page.fill('input[name="email"]', validEmail);

    // Step 3: Enter a strong password
    const strongPassword = 'StrongPassw0rd!'; // Example strong password
    await page.fill('input[name="password"]', strongPassword);

    // Step 4: Click the 'Create Account' button
    await page.click('button#create-account');

    // Step 5: Validate account creation success
    await expect(page).toHaveURL(/login$/, { timeout: 10000 });
    await expect(page.locator('text=Account created successfully')).toBeVisible({ timeout: 10000 });
  });
});