import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Valid Account Creation with Email and Strong Password', async ({ page }) => {
    // Step 1: Navigate to the application sign-up page
    try {
      await page.goto('https://example.com/signup', { timeout: 10000 });
    } catch (error) {
      console.error('Failed to navigate to the sign-up page:', error);
      throw error;
    }

    // Step 2: Enter a valid email address in the email field
    const emailField = page.locator('#email');
    await emailField.fill('testuser@example.com');

    // Step 3: Enter a strong password in the password field
    const passwordField = page.locator('#password');
    await passwordField.fill('Test@1234');

    // Step 4: Click on the 'Sign Up' button
    const signUpButton = page.locator('#signUpButton');
    await signUpButton.click();

    // Step 5: Assert that the user is registered successfully
    const registrationSuccessMessage = page.locator('#registrationSuccess');
    await expect(registrationSuccessMessage).toBeVisible({ timeout: 10000 }, 'Expected registration success message to be visible');

    // Step 6: Assert that a confirmation email is sent
    // Note: This step is a placeholder, as actual email verification would require integration with an email service
    const emailSentMessage = page.locator('#emailSent');
    await expect(emailSentMessage).toBeVisible({ timeout: 10000 }, 'Expected email sent confirmation to be visible');
  });
});