import { test, expect } from '@playwright/test';

test.describe('Feature: Account Creation', () => {
  test('Validate Account Creation with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the signup page
    await page.goto('about:blank'); // Replace with the actual signup URL

    // Step 2: Enter a valid email address
    const emailInputSelector = 'input[name="email"]'; // Update with the actual selector
    await page.fill(emailInputSelector, 'testuser@example.com');

    // Step 3: Enter a strong password
    const passwordInputSelector = 'input[name="password"]'; // Update with the actual selector
    await page.fill(passwordInputSelector, 'StrongPassword123!');

    // Step 4: Click on the 'Sign Up' button
    const signUpButtonSelector = 'button[type="submit"]'; // Update with the actual selector
    await page.click(signUpButtonSelector);

    // Step 5: Assert that the account was created successfully
    const confirmationMessageSelector = '.confirmation-message'; // Update with the actual selector
    const confirmationMessage = page.locator(confirmationMessageSelector);

    await expect(confirmationMessage).toBeVisible({ timeout: 10000 })
      .catch(() => {
        throw new Error('Confirmation message did not appear within the timeout period.');
      });
      
    await expect(confirmationMessage).toHaveText('Account created successfully', { timeout: 10000 })
      .catch(() => {
        throw new Error('Confirmation message text does not match expected value.');
      });
  });
});