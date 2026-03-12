import { test, expect } from '@playwright/test';

test.describe('Feature: User Account Creation', () => {
  test('User Account Creation with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the registration page
    try {
      await page.goto('about:blank'); // Replace with the actual registration URL
    } catch (error) {
      console.error('Navigation failed:', error);
    }

    // Step 2: Enter a valid email address
    const validEmail = 'testuser@example.com';
    await page.fill('input[name="email"]', validEmail);

    // Step 3: Enter a strong password
    const strongPassword = 'StrongPassword123!';
    await page.fill('input[name="password"]', strongPassword);

    // Step 4: Click on the 'Sign Up' button
    await page.click('button[type="submit"]');

    // Step 5: Assert that the user account is created successfully
    const confirmationMessage = await page.locator('.confirmation-message'); // Replace with actual selector
    await expect(confirmationMessage).toBeVisible({ timeout: 10000 });
    await expect(confirmationMessage).toHaveText('Account created successfully', { timeout: 10000 });
  });
});