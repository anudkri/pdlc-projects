import { test, expect } from '@playwright/test';

test.describe('Feature: Account Creation', () => {
  test('Account Creation with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the account creation page
    try {
      await page.goto('about:blank'); // Replace with the actual URL of the account creation page
    } catch (error) {
      console.error('Navigation failed:', error);
    }

    // Step 2: Enter a valid email in the email field
    const validEmail = 'testuser@example.com'; // Example valid email
    await page.fill('input[name="email"]', validEmail);

    // Step 3: Enter a strong password in the password field
    const strongPassword = 'StrongPassword123!'; // Example strong password
    await page.fill('input[name="password"]', strongPassword);

    // Step 4: Click on the 'Create Account' button
    await page.click('button[type="submit"]');

    // Step 5: Assert that the user account is created successfully
    await expect(page.locator('text=Account created successfully')).toBeVisible({ timeout: 10000 });

    // Step 6: Assert that the user is redirected to the login page
    await expect(page).toHaveURL(/login/, { timeout: 10000 });
  });
});