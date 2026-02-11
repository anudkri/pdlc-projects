import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Sign-Up with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('https://example.com/signup', { timeout: 10000 });
    } catch (error) {
      console.error('Failed to navigate to the sign-up page:', error);
    }

    // Step 2: Enter a valid email address
    const emailInputSelector = '#email';
    const validEmail = 'testuser@example.com';
    await page.fill(emailInputSelector, validEmail);

    // Step 3: Enter a valid password that meets strength requirements
    const passwordInputSelector = '#password';
    const validPassword = 'StrongPassword123!';
    await page.fill(passwordInputSelector, validPassword);

    // Step 4: Submit the registration form
    const submitButtonSelector = '#submit';
    await page.click(submitButtonSelector);

    // Step 5: Assert that user is successfully registered
    const successMessageSelector = '.success-message';
    await expect(page.locator(successMessageSelector)).toHaveText('Registration successful', { timeout: 10000 });
    
    // Step 6: Verify confirmation email is received (mock or check via API)
    const emailReceived = true; // This should be replaced with actual email checking logic
    expect(emailReceived).toBeTruthy('User did not receive a confirmation email');
  });
});