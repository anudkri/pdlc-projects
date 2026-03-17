import { test, expect } from '@playwright/test';

test.describe('Feature: User Account Creation', () => {
  test('User Account Creation with Valid Email and Password', async ({ page }) => {
    // Step 1: Navigate to the sign-up page
    try {
      await page.goto('https://example.com/signup'); // Replace with actual sign-up URL
    } catch (error) {
      console.error('Failed to navigate to sign-up page:', error);
      return;
    }

    // Step 2: Enter a valid email address
    const emailInputSelector = 'input[name="email"]'; // Adjust selector as necessary
    await page.fill(emailInputSelector, 'testuser@example.com');

    // Step 3: Enter a strong password
    const passwordInputSelector = 'input[name="password"]'; // Adjust selector as necessary
    await page.fill(passwordInputSelector, 'StrongPassword123!');

    // Step 4: Submit the sign-up form
    const submitButtonSelector = 'button[type="submit"]'; // Adjust selector as necessary
    await page.click(submitButtonSelector);

    // Step 5: Verify user account creation and redirection to login page
    await page.waitForURL('https://example.com/login', { timeout: 10000 }); // Replace with actual login URL
    expect(page.url()).toBe('https://example.com/login', 'User should be redirected to the login page after sign-up');
  });
});