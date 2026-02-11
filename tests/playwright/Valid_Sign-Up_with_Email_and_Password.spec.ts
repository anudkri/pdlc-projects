import { test, expect } from '@playwright/test';

test.describe('Feature: User Sign-Up', () => {
  test('Valid Sign-Up with Email and Password', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('https://example.com/signup'); // Replace with actual URL
    } catch (error) {
      console.error('Navigation to sign-up page failed:', error);
    }

    // Step 2: Enter a valid email address in the email field
    const emailField = page.locator('#email'); // Replace with actual selector
    await emailField.fill('valid.email@example.com');

    // Step 3: Enter a strong password in the password field
    const passwordField = page.locator('#password'); // Replace with actual selector
    await passwordField.fill('StrongPassword123!');

    // Step 4: Click the 'Sign Up' button
    const signUpButton = page.locator('#signup-button'); // Replace with actual selector
    await signUpButton.click();

    // Step 5: Assert that the user is successfully registered
    // and redirected to the confirmation page or receives a verification email
    const confirmationMessage = page.locator('#confirmation-message'); // Replace with actual selector
    await expect(confirmationMessage).toHaveText('Registration successful', { timeout: 10000 });

    const verificationEmailSent = page.locator('#verification-email-sent'); // Replace with actual selector
    await expect(verificationEmailSent).toBeVisible({ timeout: 10000 });
  });
});