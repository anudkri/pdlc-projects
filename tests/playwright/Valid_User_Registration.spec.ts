import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Valid User Registration', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('https://example.com/signup', { timeout: 10000 });
    } catch (error) {
      console.error('Navigation to the sign-up page failed.', error);
      throw error;
    }

    // Step 2: Enter a valid email address in the email field
    const emailField = page.locator('input[name="email"]');
    await emailField.fill('testuser@example.com');

    // Step 3: Enter a valid password that meets complexity requirements in the password field
    const passwordField = page.locator('input[name="password"]');
    await passwordField.fill('ComplexPassword123!');

    // Step 4: Click on the 'Sign Up' button
    const signUpButton = page.locator('button[type="submit"]');
    await signUpButton.click();

    // Step 5: Assert that user account is created
    const accountCreatedMessage = page.locator('text=Account successfully created.');
    await expect(accountCreatedMessage).toBeVisible({ timeout: 10000 }, 'Expected the account creation confirmation message to be visible.');

    // Step 6: Assert that a confirmation email is sent
    // Note: This requires integration with the test email service to verify email receipt
    const emailReceived = await emailService.checkEmail('testuser@example.com', 'Account Confirmation');
    expect(emailReceived).toBeTruthy('Expected a confirmation email to be sent to the registered email address.');
  });
});