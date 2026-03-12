import { test, expect } from '@playwright/test';

test.describe('Feature: Account Management', () => {
  test('Valid Account Creation', async ({ page }) => {
    // Step 1: Navigate to the account creation page
    try {
      await page.goto('about:blank'); // Replace with the actual URL if known
    } catch (error) {
      console.error('Failed to navigate to the account creation page:', error);
    }

    // Step 2: Enter a valid email address
    const emailField = await page.locator('input[name="email"]');
    await emailField.fill('testuser@example.com');

    // Step 3: Enter a strong password
    const passwordField = await page.locator('input[name="password"]');
    await passwordField.fill('StrongPassword123!');

    // Step 4: Submit the account creation form
    const submitButton = await page.locator('button[type="submit"]');
    await submitButton.click();

    // Step 5: Assert that the user account is created successfully
    const confirmationMessage = await page.locator('.confirmation-message'); // Adjust selector as needed
    await expect(confirmationMessage).toBeVisible({ timeout: 5000 });
    await expect(confirmationMessage).toHaveText('Your account has been created successfully!', { timeout: 5000 });
  });
});