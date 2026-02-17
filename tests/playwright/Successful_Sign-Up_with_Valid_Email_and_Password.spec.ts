import { test, expect } from '@playwright/test';

test.describe('Feature: User Registration', () => {
  test('Successful Sign-Up with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('https://example.com/signup', { waitUntil: 'load', timeout: 10000 });
    } catch (error) {
      console.error('Failed to navigate to the sign-up page:', error);
      throw error;
    }

    // Step 2: Enter a valid email address in the email field
    const email = 'validuser@example.com';
    await page.fill('input[name="email"]', email);

    // Step 3: Enter a strong password in the password field
    const password = 'StrongPassword123!';
    await page.fill('input[name="password"]', password);

    // Step 4: Click the 'Sign Up' button
    await page.click('button[type="submit"]');

    // Step 5: Verify user sees a confirmation message indicating successful sign-up
    try {
      const confirmationMessage = await page.waitForSelector('.confirmation-message', { timeout: 10000 });
      expect(await confirmationMessage.textContent()).toContain('successful sign-up', 'Confirmation message should indicate successful sign-up');
    } catch (error) {
      console.error('Confirmation message not found or incorrect:', error);
      throw error;
    }

    // Step 6: Assume a confirmation email is sent (this step typically requires backend verification or mock)
    // This is a placeholder for actual email confirmation logic
    console.log('A confirmation email is assumed to be sent.');
  });
});