import { test, expect } from '@playwright/test';

test.describe('Feature: User Account Creation', () => {
  test('User Account Creation with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the registration page
    try {
      await page.goto('https://example.com/registration'); // Replace with the actual registration URL
    } catch (error) {
      console.error('Navigation to registration page failed:', error);
      throw error; // Rethrow the error for test failure
    }

    // Step 2: Enter a valid email address
    const validEmail = 'testuser@example.com';
    await page.fill('#email', validEmail); // Replace '#email' with the actual email input selector

    // Step 3: Enter a strong password
    const strongPassword = 'Str0ngP@ssw0rd!';
    await page.fill('#password', strongPassword); // Replace '#password' with the actual password input selector

    // Step 4: Click on the 'Sign Up' button
    await page.click('#sign-up-button'); // Replace '#sign-up-button' with the actual button selector

    // Step 5: Verify that the user account is created successfully
    const confirmationMessageSelector = '#confirmation-message'; // Replace with the actual confirmation message selector
    await expect(page.locator(confirmationMessageSelector)).toBeVisible({ timeout: 10000 });
    await expect(page.locator(confirmationMessageSelector)).toHaveText('Your account has been created successfully.', { timeout: 10000 });
  });
});