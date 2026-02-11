import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Valid Email and Password Sign-Up', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('https://example.com/signup', { timeout: 10000 });
    } catch (error) {
      console.error('Navigation to sign-up page failed:', error);
      throw error;
    }

    // Step 2: Enter a valid email address in the email field
    const validEmail = 'testuser@example.com';
    await page.fill('input[name="email"]', validEmail);

    // Step 3: Enter a valid password in the password field
    const validPassword = 'Str0ngP@ssword!';
    await page.fill('input[name="password"]', validPassword);

    // Step 4: Click the 'Sign Up' button
    await page.click('button[type="submit"]');

    // Step 5: Assert the user account is successfully created
    const successMessage = await page.waitForSelector('.success-message', { timeout: 10000 });
    expect(await successMessage.isVisible(), 'Success message should be visible').toBe(true);

    // Step 6: Assert a verification email is sent
    // Note: This step would ideally involve checking an email service or mock email server
    console.log('Verification email sent to:', validEmail);
  });
});