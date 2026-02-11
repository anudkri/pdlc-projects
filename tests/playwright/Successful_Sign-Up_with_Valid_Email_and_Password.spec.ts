import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Successful Sign-Up with Valid Email and Password', async ({ page }) => {
    const signUpUrl = 'https://example.com/signup';
    const welcomePageUrl = 'https://example.com/welcome';
    const testEmail = 'testuser@example.com';
    const validPassword = 'ValidPass123!';

    try {
      // Navigate to the sign-up page
      await page.goto(signUpUrl);

      // Enter a valid email address in the email field
      await page.fill('input[name="email"]', testEmail);

      // Enter a valid password that meets complexity requirements
      await page.fill('input[name="password"]', validPassword);

      // Click the 'Sign Up' button
      await page.click('button[type="submit"]');

      // Expect to be redirected to the welcome page
      await page.waitForURL(welcomePageUrl, { timeout: 10000 });
      expect(page.url()).toBe(welcomePageUrl);

      // Verify that the user account is created successfully
      const welcomeMessage = await page.textContent('h1');
      expect(welcomeMessage).toContain('Welcome', 'User is successfully redirected to welcome page');
    } catch (error) {
      console.error('Error during sign-up process:', error);
      throw error;
    }
  });
});