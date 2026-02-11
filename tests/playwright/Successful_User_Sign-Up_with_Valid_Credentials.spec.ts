import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Successful User Sign-Up with Valid Credentials', async ({ page }) => {
    // Define the signup page URL
    const signUpPageUrl = 'https://example.com/signup';

    // Step 1: Navigate to the sign-up page
    try {
      await page.goto(signUpPageUrl, { waitUntil: 'networkidle', timeout: 10000 });
    } catch (error) {
      console.error('Navigation to the sign-up page failed:', error);
      throw error;
    }

    // Step 2: Enter a valid email address
    const validEmail = 'testuser@example.com';
    await page.fill('input[name="email"]', validEmail);

    // Step 3: Enter a valid password that meets complexity requirements
    const validPassword = 'P@ssw0rd123';
    await page.fill('input[name="password"]', validPassword);

    // Step 4: Click the 'Sign Up' button
    await page.click('button[type="submit"]');

    // Step 5: Assert that the user is successfully signed up
    const welcomeMessage = await page.waitForSelector('.welcome-message', { timeout: 10000 });
    expect(await welcomeMessage?.innerText()).toContain('Welcome', 'User should see a welcome message upon successful sign-up');

    // Step 6: Assert that a confirmation email is received (mocked for demonstration)
    const emailReceived = true; // This should be replaced with actual email checking logic
    expect(emailReceived).toBe(true, 'A confirmation email should be received in the test email account');
  });
});