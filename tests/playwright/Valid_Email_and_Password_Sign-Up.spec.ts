import { test, expect } from '@playwright/test';

test.describe('Feature: User Sign-Up', () => {
  test('Valid Email and Password Sign-Up', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('https://example.com/signup', { timeout: 10000 });
    } catch (error) {
      console.error('Navigation to sign-up page failed:', error);
      throw error;
    }

    // Step 2: Enter a valid email address in the email field
    const emailField = page.locator('#email');
    await emailField.fill('testuser@example.com');

    // Step 3: Enter a strong password in the password field
    const passwordField = page.locator('#password');
    await passwordField.fill('StrongPassword123!');

    // Step 4: Click on the 'Sign Up' button
    const signUpButton = page.locator('#sign-up-button');
    await signUpButton.click();

    // Step 5: Assert the user is successfully signed up and redirected to the welcome page
    try {
      await page.waitForURL('https://example.com/welcome', { timeout: 10000 });
      const welcomeMessage = await page.locator('#welcome-message').innerText();
      expect(welcomeMessage).toContain('Welcome', 'User is not redirected to the welcome page or welcome message not found');
    } catch (error) {
      console.error('Redirection to welcome page failed or welcome message not found:', error);
      throw error;
    }
  });
});